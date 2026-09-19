// Package the finished VS Code extension under its existing Open VSX name.
import { execFileSync } from "node:child_process";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const directory = dirname(fileURLToPath(import.meta.url));
const source = join(directory, "../vscode");
const manifest = JSON.parse(await readFile(join(source, "package.json"), "utf8"));
const overrides = JSON.parse(
  await readFile(join(directory, "manifest-overrides.json"), "utf8"),
);
Object.assign(manifest, overrides);
delete manifest.__metadata;
manifest.repository.directory = "openvsx";

const output = join(directory, `${manifest.name}-${manifest.version}.vsix`);
const staging = await mkdtemp(join(tmpdir(), "rtemis-openvsx-"));
try {
  for (const file of [
    ".vscodeignore",
    "README.md",
    "CHANGELOG.md",
    "LICENSE",
    "THIRD_PARTY_NOTICES.txt",
    "themes",
    "images",
  ]) {
    await cp(join(source, file), join(staging, file), { recursive: true });
  }
  await writeFile(join(staging, "package.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  execFileSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["--yes", "@vscode/vsce", "package", "--no-dependencies", "--out", output],
    { cwd: staging, stdio: "inherit" },
  );
} finally {
  await rm(staging, { recursive: true, force: true });
}
