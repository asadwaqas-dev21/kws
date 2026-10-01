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
  let changed = false;

  // Single quote onError
  const errPattern1 = /onError={\(e\) = width={800} height={800} \/> { e\.currentTarget\.style\.display = 'none'; }} \/>/g;
  if (errPattern1.test(content)) {
    content = content.replace(errPattern1, 'onError={(e) => { e.currentTarget.style.display = \'none\'; }} width={800} height={800} />');
    changed = true;
  }

  // Double quote onError
  const errPattern2 = /onError={\(e\) = width={800} height={800} \/> { e\.currentTarget\.style\.display = "none"; }} \/>/g;
  if (errPattern2.test(content)) {
    content = content.replace(errPattern2, 'onError={(e) => { e.currentTarget.style.display = "none"; }} width={800} height={800} />');
    changed = true;
  }

  // onMouseOver pattern
  const hoverPattern = /onMouseOver={\(e\) = width={800} height={800} \/> e\.currentTarget\.style\.transform = "scale\(1\.1\)"}/g;
  if (hoverPattern.test(content)) {
    content = content.replace(hoverPattern, 'onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"} width={800} height={800} ');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
  }
});
