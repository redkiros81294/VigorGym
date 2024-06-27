const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'dist', 'public');
console.log('Checking if directory exists:', dir);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log('Directory created:', dir);
} else {
  console.log('Directory already exists:', dir);
}
