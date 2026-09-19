# rtemis themes

Editor themes for [rtemis](https://www.rtemis.org).

| Editor | Themes |
|---|---|
| [VS Code](vscode/) | `rtemis-dark` and `rtemis-light` |
| [Zed](zed/) | Planned |

## VS Code development

The extension is self-contained in `vscode/`. Edit the finished JSON files in
`vscode/themes/` directly; no theme generation or build step is required.

Open this repository in VS Code and press F5 to launch the extension in a
development window. Choose `rtemis-dark` or `rtemis-light` with **Preferences:
Color Theme**.

To create an installable extension package, run:

```sh
cd vscode
npx @vscode/vsce package --no-dependencies --githubBranch master
```

Install the resulting `.vsix` using **Extensions → … → Install from VSIX**.

## License

See [LICENSE](LICENSE) and the
[VS Code third-party notices](vscode/THIRD_PARTY_NOTICES.txt).
