
const fs = require("fs");
const file = "app/achievers/page.tsx";
let content = fs.readFileSync(file, "utf8");

content = content.replace(/className="achievers-page"/g, `className="legends-page"`);
content = content.replace(/className="achievers-hero/g, `className="legends-hero`);
content = content.replace(/className="wrap achievers-list"/g, `className="wrap legends-list"`);

fs.writeFileSync(file, content, "utf8");
console.log("Fixed classes");

