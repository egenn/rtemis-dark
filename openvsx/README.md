# rtemis on Open VSX

Publishes the existing [`egenn.rtemis-theme`](https://open-vsx.org/extension/egenn/rtemis-theme)
listing from the finished extension in [`../vscode/`](../vscode/).

The theme JSON, version, screenshots, extension README, changelog, and licenses
are shared with VS Code. `manifest-overrides.json` preserves the Open VSX
extension name; the publisher stays `egenn`. The repository directory is set to
`openvsx` in this package. No theme colors or syntax rules are generated.

## Package

From the repository root, with Node.js and npm installed:

```sh
node openvsx/package.mjs
```

The script copies the extension into a temporary directory, changes its package
identity, and uses `vsce` to create `openvsx/rtemis-theme-<version>.vsix`.
The temporary directory is removed afterward. VSIX files are Git-ignored.

## Publish

With an Open VSX access token available as `OVSX_PAT`, run from the repository root:

```sh
npx ovsx publish openvsx/rtemis-theme-0.1.0.vsix
```

Use the filename produced by the packaging command for subsequent versions.
See the [Open VSX publishing guide](https://github.com/eclipse-openvsx/openvsx/wiki/Publishing-Extensions).
