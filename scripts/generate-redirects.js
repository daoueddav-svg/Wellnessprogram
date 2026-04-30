import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const affiliatesPath = join(__dirname, '../src/data/affiliates.json');
const redirectsPath = join(__dirname, '../public/_redirects');

try {
  const data = JSON.parse(fs.readFileSync(affiliatesPath, 'utf-8'));
  let redirects = '';
  
  for (const [id, val] of Object.entries(data)) {
    redirects += `/go/${id}  ${val.finalUrl}  301\n`;
  }
  
  // Ensure public directory exists
  const publicDir = join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(redirectsPath, redirects);
  console.log('✅ Generated public/_redirects successfully from affiliates.json');
} catch (error) {
  console.error('❌ Error generating _redirects:', error);
  process.exit(1);
}
