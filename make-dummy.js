
const fs = require("fs");
const file = "app/achievers/page.tsx";
let content = fs.readFileSync(file, "utf8");

const startIdx = content.indexOf("const Achievers: Legend[] = [");
const endIdx = content.indexOf("];\r\n\r\nexport default function AchieversPage() {");

if (startIdx !== -1 && endIdx !== -1) {
  const before = content.substring(0, startIdx);
  const after = content.substring(endIdx);
  
  const dummyArray = `const Achievers: Legend[] = [
  {
    name: "Achiever Name",
    image: "", // Add image path here later
    role: "Designation / Role",
    village: "Village Name",
    lifespan: "Present",
    cast: "Cast Name",
    bio: [
      "This is a placeholder for the achiever` + "`" + `s biography. You can add their success story, contributions, and professional details here.",
      "More details about their achievements can be listed in these paragraphs."
    ],
  },
`;

  fs.writeFileSync(file, before + dummyArray + after, "utf8");
  console.log("Replaced");
} else {
  console.log("Could not find bounds", startIdx, endIdx);
}

