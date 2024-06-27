const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const copyfiles = require('copyfiles');

// Paths
const distDir = path.join(__dirname, '..', 'dist');
const publicDir = path.join(__dirname, '..', 'public');
const distPublicDir = path.join(distDir, 'public');

// Step 1: Run Nest build
exec('nest build', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error during build: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);

  // Step 2: Create dist/public directory if it doesn't exist
  if (!fs.existsSync(distPublicDir)) {
    fs.mkdirSync(distPublicDir, { recursive: true });
    console.log('Created directory:', distPublicDir);
  } else {
    console.log('Directory already exists:', distPublicDir);
  }

  // Step 3: Copy public files to dist/public
  copyfiles([path.join(publicDir, '**', '*'), distPublicDir], { up: true }, (err) => {
    if (err) {
      console.error('Error copying files:', err);
      process.exit(1);
    } else {
      console.log('Files copied successfully');
    }
  });
});
