const fs = require('fs');

// Get command-line arguments
const inputFile = process.argv[2];
const outputFile = process.argv[3];

// Check if input and output file paths are provided
if (!inputFile || !outputFile) {
  console.error('Please provide input and output file paths.');
  process.exit(1);
}

// Read the contents of the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`File not found: ${inputFile}`);
    process.exit(1);
  }

  // Split the contents into an array of strings (lines)
  const lines = data.split('\n');

  // Filter out empty lines and lines starting with "#"
  const filteredLines = lines.filter(line => line.trim() !== '' && !line.startsWith('#'));

  // Sort the remaining lines alphabetically
  const sortedLines = filteredLines.sort();

  // Write the sorted lines to the output file
  fs.writeFile(outputFile, sortedLines.join('\n'), err => {
    if (err) {
      console.error(`Failed to write to file: ${outputFile}`);
      process.exit(1);
    }
    console.log(`Sorted lines written to ${outputFile}.`);
  });
});
