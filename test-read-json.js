const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'src/assets/choices.json');

function readJsonFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      console.log('JSON data:', jsonData);
    } catch (parseErr) {
      console.error('Error parsing JSON:', parseErr);
    }
  });
}
