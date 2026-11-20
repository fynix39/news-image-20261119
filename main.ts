// news-image-20261119: hand the composed front page to the grader.
//
// The image (entry.png) is built ahead of time: four AI-generated art panels
// with all text rendered programmatically on top, summing up the world news
// of Thursday 19 November 2026. This program only copies that file into the
// output directory, deterministically, with no network access.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(repoRoot, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outDir, "entry.png"));
