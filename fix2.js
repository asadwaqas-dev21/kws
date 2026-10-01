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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  content = content.split("onError={(e) = width={800} height={800} /> { e.currentTarget.style.display = 'none'; }} />").join("onError={(e) => { e.currentTarget.style.display = 'none'; }} width={800} height={800} />");

  content = content.split('onError={(e) = width={800} height={800} /> { e.currentTarget.style.display = "none"; }} />').join('onError={(e) => { e.currentTarget.style.display = "none"; }} width={800} height={800} />');

  content = content.split('onMouseOver={(e) = width={800} height={800} /> e.currentTarget.style.transform = "scale(1.1)"}').join('onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"} width={800} height={800} ');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
  }
});
