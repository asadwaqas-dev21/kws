
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
  const origContent = content;
  
  // A safer regex to remove the arrow span specifically from the membership button
  content = content.replace(/(Apply for membership\s*)<span className="arrow">.*?<\/span>/g, "$1");
  
  if (content !== origContent) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Updated " + file);
  }
});
console.log("Done");

