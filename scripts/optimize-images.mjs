import { existsSync, mkdirSync, statSync } from "node:fs";
import { basename, dirname, extname, join } from "node:path";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help")) {
  console.log(`Usage:
  npm run image:optimize -- public/images/photo.jpeg
  npm run image:optimize -- public/images/photo.jpeg --width 1600 --quality 82
  npm run image:optimize -- public/images/*.jpg --out public/images/optimized

Options:
  --width <px>      Longest edge in pixels. Default: 1600
  --quality <1-100> JPEG quality. Default: 82
  --out <dir>       Output directory. Default: same directory as source
`);
  process.exit(0);
}

const options = {
  width: 1600,
  quality: 82,
  outDir: null,
};

const files = [];

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];

  if (arg === "--width") {
    options.width = Number(args[++index]);
  } else if (arg === "--quality") {
    options.quality = Number(args[++index]);
  } else if (arg === "--out") {
    options.outDir = args[++index];
  } else {
    files.push(arg);
  }
}

if (!Number.isInteger(options.width) || options.width < 320) {
  throw new Error("--width must be an integer of at least 320.");
}

if (!Number.isInteger(options.quality) || options.quality < 1 || options.quality > 100) {
  throw new Error("--quality must be an integer from 1 to 100.");
}

const sipsCheck = spawnSync("sips", ["--version"], { encoding: "utf8" });

if (sipsCheck.status !== 0) {
  throw new Error("This optimizer uses macOS `sips`. Run it on your Mac before committing images.");
}

for (const file of files) {
  if (!existsSync(file) || !statSync(file).isFile()) {
    console.warn(`Skipped: ${file} does not exist or is not a file.`);
    continue;
  }

  const sourceExt = extname(file);
  const name = basename(file, sourceExt);
  const targetDir = options.outDir ?? dirname(file);
  const output = join(targetDir, `${name}-${options.width}.jpg`);

  mkdirSync(targetDir, { recursive: true });

  const result = spawnSync(
    "sips",
    ["-Z", String(options.width), "-s", "format", "jpeg", "-s", "formatOptions", String(options.quality), file, "--out", output],
    { encoding: "utf8" }
  );

  if (result.status !== 0) {
    console.error(result.stderr || result.stdout);
    process.exitCode = 1;
    continue;
  }

  const before = statSync(file).size;
  const after = statSync(output).size;
  const saved = Math.max(0, Math.round((1 - after / before) * 100));

  console.log(`${file} -> ${output} (${formatBytes(before)} -> ${formatBytes(after)}, saved ${saved}%)`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}
