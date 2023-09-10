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

      const regexText = /<(h1|h3|p|a|li)\b[^>]*>(.*?)<\/\1>/gi;
      const matches = Array.from(fileContent.matchAll(regexText), m => m[2]);
      matches.forEach((match) => {
        let newMatch = match
        const regexUnderline = /<UnderLine\s+text=['"]([^'"]+)['"]/g;
        let m
        if ((m = regexUnderline.exec(newMatch)) !== null) {
          let underline = m[1];
          console.log(underline)
          newMatch.replace(regexUnderline, underline);
        }

        //console.log(match);
        newMatch = match.replace(/[\n\s]/g, ' ');

        //replace Underline tags

        //skip dynamic titles
        const regexBrackets = /^\{.*\}$/;
        const isMatch = regexBrackets.test(newMatch);
        if (!isMatch) {
          extractedText.push({ title: title, text: newMatch });
        }
      });

    }
  }

  // Create CSV file
  const csv = new ObjectsToCsv(extractedText);
  csv.toDisk('./output.csv', options = { allColumns: true });

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