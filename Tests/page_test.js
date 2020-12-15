const fs = require("fs");
const path = require("path");

function fail(msg) {
  console.log("FAIL " + msg);
  process.exit(1);
}

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
if (!html.includes('id="nav"')) {
  fail("nav");
}
if (!html.includes("<title>GoGol online books</title>")) {
  fail("title");
}
if (!html.includes("href=\"style.css\"")) {
  fail("style.css");
}

const css = fs.readFileSync(path.join(__dirname, "..", "style.css"), "utf8");
if (!css.includes("navItem")) {
  fail("navItem");
}

console.log("OK justgogolitTests");
