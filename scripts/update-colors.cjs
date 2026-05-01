const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.astro') || filePath.endsWith('.css') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Grayscale removal
    content = content.replace(/ grayscale /g, ' ');
    content = content.replace(/ grayscale"/g, '"');
    
    // Backgrounds & Borders
    content = content.replace(/bg-\[\#f4f4f2\]/g, 'bg-slate-50');
    content = content.replace(/bg-\[\#f9f9f7\]/g, 'bg-slate-50');
    content = content.replace(/bg-\[\#eeeeec\]/g, 'bg-slate-100');
    content = content.replace(/bg-\[\#d3e8d5\]/g, 'bg-emerald-100');
    content = content.replace(/bg-\[\#b7ccb9\]/g, 'bg-emerald-200');
    
    content = content.replace(/border-\[\#e8e8e6\]/g, 'border-slate-200');
    content = content.replace(/border-\[\#eeeeec\]/g, 'border-slate-200');
    content = content.replace(/border-\[\#c3c8c1\]/g, 'border-slate-300');
    
    // Texts
    content = content.replace(/text-\[\#334537\]/g, 'text-slate-900');
    content = content.replace(/text-\[\#434843\]/g, 'text-slate-700');
    content = content.replace(/text-\[\#737872\]/g, 'text-slate-500');
    content = content.replace(/text-\[\#5f5e5e\]/g, 'text-slate-500');
    content = content.replace(/text-\[\#c3c8c1\]/g, 'text-slate-300');
    
    // Primary brand color replacements (The tricky one)
    // Buttons & Badges: bg-[#334537] -> bg-emerald-600
    content = content.replace(/bg-\[\#334537\]/g, 'bg-emerald-600');
    content = content.replace(/hover:bg-\[\#334537\]/g, 'hover:bg-emerald-700');
    content = content.replace(/hover:bg-\[\#4a5d4e\]/g, 'hover:bg-emerald-700');
    content = content.replace(/hover:text-\[\#334537\]/g, 'hover:text-emerald-600');
    content = content.replace(/hover:text-\[\#4a5d4e\]/g, 'hover:text-emerald-600');
    content = content.replace(/border-\[\#334537\]/g, 'border-emerald-600');
    
    // Any remaining #334537 in CSS or inline styles -> slate-900 for safety, or emerald.
    // We already replaced tailwind utility classes, so left over might be raw hex.
    content = content.replace(/#334537/g, '#0f172a'); 
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Colors and grayscale updated successfully.');
