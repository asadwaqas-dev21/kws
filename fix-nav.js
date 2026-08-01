
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
  
  const linkStr = `\n            <Link href="/achievers" className={pathname === "/achievers" ? "active" : ""} onClick={() => setIsMenuOpen(false)}>Our Achievers</Link>`;
  
  // Replace two occurrences with one
  while (content.includes(linkStr + linkStr)) {
    content = content.replace(linkStr + linkStr, linkStr);
  }
  
  // Also check if any file didn`t get it at all? 
  // No, I just want to clean up duplicates right now.
  fs.writeFileSync(file, content, "utf8");
});
console.log("Fixed duplicates");

