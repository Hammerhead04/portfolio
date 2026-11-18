#!/usr/bin/env node
/**
 * One-off: download App Store icons for the shipped apps into public/apps/.
 * Icons are committed so the site never hotlinks Apple at runtime.
 * Usage: npm run fetch:icons
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const APPS = {
  6792014252: "around",
  6776602204: "represent",
  6748263503: "pickup",
};

const outDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "apps");
const lookup = `https://itunes.apple.com/lookup?id=${Object.keys(APPS).join(",")}&country=in`;

const res = await fetch(lookup);
if (!res.ok) throw new Error(`Lookup failed: ${res.status}`);
const { results } = await res.json();
await mkdir(outDir, { recursive: true });

for (const app of results) {
  const slug = APPS[app.trackId];
  if (!slug) continue;
  const src =
    app.artworkUrl512 ?? app.artworkUrl100?.replace(/\/\d+x\d+bb\.(jpg|png)$/, "/512x512bb.jpg");
  const img = await fetch(src);
  if (!img.ok) throw new Error(`Icon download failed for ${slug}: ${img.status}`);
  const file = path.join(outDir, `${slug}.jpg`);
  await writeFile(file, Buffer.from(await img.arrayBuffer()));
  const firstSentence = (app.description ?? "").split(/(?<=[.!?])\s/)[0];
  console.log(`✓ ${slug}.jpg  ${app.trackName}  [${app.primaryGenreName}]\n  ${firstSentence}\n`);
}
