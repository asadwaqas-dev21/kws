
const fs = require("fs");
const path = require("path");

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith("page.tsx") || dirFile.endsWith("layout.tsx")) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

const files = walkSync("app");

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  
  // Replace <a href="/directory" ...>Directory</a>
  const regexA = /(<a href="\/directory"[\s\S]*?>Directory<\/a>)/g;
  const regexLink = /(<Link href="\/directory"[\s\S]*?>Directory<\/Link>)/g;
  
  const replacement = `$1\n            <Link href="/achievers" className={pathname === "/achievers" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Our Achievers</Link>`;
  
  let newContent = content.replace(regexA, replacement);
  newContent = newContent.replace(regexLink, replacement);
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, "utf8");
    console.log("Updated " + file);
  }
});
console.log("Done");

