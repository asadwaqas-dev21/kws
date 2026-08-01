const fs = require("fs");

let content = fs.readFileSync("app/legends/page.tsx", "utf8");

// 1. Rename array
content = content.replace("const legends: Legend[] = [", "const Achievers: Legend[] = [");
const arrayEndIdx = content.indexOf("];\r\n\r\nexport default function Legends() {");
if (arrayEndIdx === -1) {
  // try without \r
  const arrayEndIdx2 = content.indexOf("];\n\nexport default function Legends() {");
}
// Actually let's just use regex for safety
content = content.replace(/const Achievers: Legend\[\] = \[[\s\S]*?\];[\s\S]*?export default function Legends\(\) \{/, 
`const Achievers: Legend[] = [
  {
    name: "Achiever Name",
    image: "", 
    role: "Designation / Role",
    village: "Village Name",
    lifespan: "Present",
    cast: "Cast Name",
    bio: [
      "This is a placeholder for the achiever's biography. You can add their success story, contributions, and professional details here.",
      "More details about their achievements can be listed in these paragraphs."
    ],
  },
];

export default function AchieversPage() {`);

// 3. Rename CSS classes and labels for English layout
content = content.replace(`<main className="legends-page" dir="rtl" lang="ur">`, `<main className="achievers-page" dir="ltr" lang="en">`);
content = content.replace(`className="legends-hero reveal in"`, `className="achievers-hero reveal in"`);
content = content.replace(`url('/legends-hero-bg.png')`, `url('/Achievers-hero-bg.png')`);

content = content.replace(`<span className="eyebrow" style={{ justifyContent: "center", color: "var(--amber)", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>ہمارے ہیرو</span>`, `<span className="eyebrow" style={{ justifyContent: "center", color: "var(--amber)", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Our Heroes</span>`);
content = content.replace(`<h1 className="h-sec" style={{ color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.8)", marginTop: "10px", fontFamily: "inherit", fontWeight: "normal" }}>خرم ہٹھاڑ کے <em style={{ color: "var(--amber)", fontStyle: "normal" }}>عظیم لوگ۔</em></h1>`, `<h1 className="h-sec" style={{ color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.8)", marginTop: "10px", fontFamily: "inherit", fontWeight: "normal" }}>Achievers of <em style={{ color: "var(--amber)", fontStyle: "normal" }}>Khurram Hithar.</em></h1>`);
content = content.replace(`<p className="lead" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 2px 6px rgba(0,0,0,0.8)", maxWidth: "700px", margin: "0 auto" }}>ان عظیم شخصیات کو خراجِ تحسین جو اپنی نیک خدمات، قیادت اور عمر بھر کی لگن سے ہماری کمیونٹی پر ناقابلِ فراموش نقوش چھوڑ گئے۔</p>`, `<p className="lead" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 2px 6px rgba(0,0,0,0.8)", maxWidth: "700px", margin: "0 auto" }}>Celebrating the success, dedication, and leadership of the bright minds from our community.</p>`);

content = content.replace(`className="wrap legends-list"`, `className="wrap achievers-list"`);
content = content.replace(`{legends.map((legend) => (`, `{Achievers.map((legend) => (`);

content = content.replace(`<div className="ls-meta">`, `<div className="ls-meta" style={{ textAlign: "left", direction: "ltr" }}>`);
content = content.replace(/<span className="lsm-label">کردار<\/span>/g, `<span className="lsm-label">Role</span>`);
content = content.replace(/<span className="lsm-label">گاؤں<\/span>/g, `<span className="lsm-label">Village</span>`);
content = content.replace(/<span className="lsm-label">حیات<\/span>/g, `<span className="lsm-label">Lifespan</span>`);
content = content.replace(/<span className="lsm-label">ذات<\/span>/g, `<span className="lsm-label">Caste</span>`);

content = content.replace(/<div className="ls-bio">/g, `<div className="ls-bio" style={{ textAlign: "left" }}>`);
content = content.replace(/<h3 className="ls-bio-title">سوانحِ عمری<\/h3>/g, `<h3 className="ls-bio-title">Biography</h3>`);

// Clean up buttons in case they have arrows
content = content.replace(/Apply for membership\s*<span className="arrow">.*?<\/span>/g, "Apply for membership ");
content = content.replace(/Apply for membership <span className="arrow">→<\/span>/g, "Apply for membership");

fs.writeFileSync("app/achievers/page.tsx", content, "utf8");
console.log("Achievers page fully rewritten!");
