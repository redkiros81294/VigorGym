const copyfiles = require('copyfiles');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'public', '**', '*');
const destDir = path.join(__dirname, '..', 'dist', 'public');

console.log('Copying files from:', srcDir, 'to:', destDir);

copyfiles([srcDir, destDir], { up: true }, (err) => {
  if (err) {
    console.error('Error copying files:', err);
    process.exit(1);
  } else {
    console.log('Files copied successfully');
  }
});
