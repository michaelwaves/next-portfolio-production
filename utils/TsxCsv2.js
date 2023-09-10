const fs = require('fs');
const cheerio = require('cheerio');
const ObjectsToCsv = require('objects-to-csv');

function parseTSXFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);

    const extractedText = [];

    for (const file of files) {
        if (file.endsWith('.tsx')) {
            const filePath = `${directoryPath}/${file}`;
            const fileContent = fs.readFileSync(filePath, 'utf-8');

            const $ = cheerio.load(fileContent);

            const title = $('h1:first').text();
            //console.log(title);
            $('h1, h3, h4, h5, h6, p, a, li').each((index, element) => {
                let text = $(element).text()
                text = text.replace(/[\n\s]/g, ' ');
                text = text.replace(/\s+/g, ' ');

                //skip dynamic titles
                const regexBrackets = /^\{.*\}$/;
                const isMatch = regexBrackets.test(text);
                /* // Split text into chunks if longer than 300 characters
                const chunks = [];
                while (text.length > 0) {
                  chunks.push(text.substring(0, 300));
                  text = text.substring(300);
                } */

                // Extract text from custom underline components
                const underlineRegex = /<UnderLine\s+text=['"]([^'"]+)['"]/g;
                let match;
                while ((match = underlineRegex.exec(text)) !== null) {
                    let underline = match[1];
                    console.log(text)
                    text.replace(underlineRegex, underline);
                    //console.log(extractedText)
                }
                while ((match = underlineRegex.exec(fileContent)) !== null) {
                    let underline = match[1];
                    console.log(underline)
                }
                if (!isMatch) {
                    extractedText.push({ title: title, text });
                }

            });


        }
    }

    // Create CSV file
    const csv = new ObjectsToCsv(extractedText);
    csv.toDisk('./output2.csv', options = { allColumns: true });

    console.log('Extraction complete. CSV file created.');


    //create json file
    const json = JSON.stringify(extractedText);
    fs.writeFile('output.json', json, 'utf8', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON file has been created successfully.");
        }
    });
}

// Usage
//parseTSXFiles('/path/to/directory');
parseTSXFiles('../pages')