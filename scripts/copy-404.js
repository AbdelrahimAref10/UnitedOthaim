const fs = require('fs');
const path = require('path');

// Paths
const distPath = path.join(__dirname, '..', 'dist', 'united-othaim', 'browser');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('Error: index.html not found in dist folder');
  console.error('Expected path:', indexPath);
  process.exit(1);
}

// Read index.html
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Ensure the base href is preserved in 404.html
// GitHub Pages needs 404.html to redirect to index.html for client-side routing
// The content should be identical to index.html
fs.writeFileSync(notFoundPath, indexContent, 'utf8');

console.log('✓ Created 404.html for GitHub Pages routing support');
console.log('  Location:', notFoundPath);
