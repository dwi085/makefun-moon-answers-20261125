// The Moon Finally Answers Back — make.fun entry
// Writes the Moon's one-line comeback to /output/entry.txt.
// Gate: UTF-8 text, 1–240 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// The Moon, after four billion years of wishes, howls and 3 a.m. promises,
// finally answers back. Wry, old, a little tired of being wished upon —
// and the turn lands at the end: nobody ever wished the Moon goodnight.
const LINE =
  "Four billion years of wishes, howls, and 3 a.m. promises \u2014 and not one of you has ever wished me goodnight back.";

// The grader provides /output. MAKEFUN_OUTPUT_DIR exists only so the
// entry can be verified locally without touching the grader's directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outDir}/entry.txt`);
