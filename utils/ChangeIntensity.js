const fs = require('fs');
const path = "../components/models/Room.tsx";

function updateIntensity(file, multiplier) {
    // Read the .tsx file content
    const content = fs.readFileSync(file, 'utf-8');

    // Use regular expression to find and replace the intensity numbers
    const updatedContent = content.replace(/intensity={(\d+(\.\d+)?)}/g, (match, intensity) => {
        const updatedValue = intensity * multiplier;
        return `intensity={${intensity}*INTENSITY_MULTIPLIER}`;
    });

    // Write the updated content to a new .tsx file
    const outputFile = file.replace('.tsx', '_controls.tsx');
    fs.writeFileSync(outputFile, updatedContent, 'utf-8');

    console.log(`Output file: ${outputFile}`);
}

// Example usage
updateIntensity(path, 0.05);