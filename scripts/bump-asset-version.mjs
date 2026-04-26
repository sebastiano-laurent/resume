import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const indexPath = path.join(rootDir, "index.html");

function currentAssetVersion() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
}

const version = currentAssetVersion();
const source = await readFile(indexPath, "utf8");
const updated = source
  .replace(/(href="\.\/styles\.css\?v=)[^"]+(")/, `$1${version}$2`)
  .replace(/(src="\.\/script\.js\?v=)[^"]+(")/, `$1${version}$2`);

if (updated !== source) {
  await writeFile(indexPath, updated, "utf8");
}

console.log(`asset version: ${version}`);
