const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'app'));
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let hasChanges = false;
  
  if (content.includes('<img ')) {
    if (!content.includes('next/image')) {
       // Insert import after the last import, or at the top if no imports
       const lastImportIndex = content.lastIndexOf('import ');
       if (lastImportIndex !== -1) {
          const endOfLine = content.indexOf('\n', lastImportIndex);
          content = content.slice(0, endOfLine + 1) + 'import Image from "next/image";\n' + content.slice(endOfLine + 1);
       } else {
          content = 'import Image from "next/image";\n' + content;
       }
    }
    
    // Replace <img ... /> or <img ...> with <Image ... width={800} height={800} />
    content = content.replace(/<img\s+([^>]+)>/g, (match, props) => {
       let newProps = props;
       
       // Handle self-closing slash
       let isSelfClosing = newProps.endsWith('/');
       if (isSelfClosing) {
           newProps = newProps.slice(0, -1).trim();
       }
       
       // Inject width and height if not present
       if (!newProps.includes('width=')) {
           newProps += ' width={800} height={800}';
       }
       
       return `<Image ${newProps} />`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log('Optimized:', file);
  }
});

console.log(`Done optimizing images in ${changedFiles} files.`);
