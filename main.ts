import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// One desert island (U+1F3DD + VS16): the whole dream vacation in a single glyph.
writeFileSync(join(outDir, "entry.txt"), "\u{1F3DD}\u{FE0F}", "utf8");
