# rtemis themes for Quarto

Shared dark and light website themes, with code highlighting that matches the
rtemis editor palette. Each SCSS file combines the established website styling
with matching code surfaces. The `.theme` files provide syntax colors as
KDE/Skylighting JSON accepted by Pandoc. All files are maintained directly,
without a build step.

## Use in a book

Copy this directory into your book as `themes/rtemis/`, including the license and
third-party notices. Set the website accent directly in each copied SCSS file.
Merge the following into the book's `_quarto.yml`:

```yaml
format:
  html:
    theme:
      light: themes/rtemis/rtemis-light.scss
      dark: themes/rtemis/rtemis-dark.scss
    syntax-highlighting:
      light: themes/rtemis/rtemis-light.theme
      dark: themes/rtemis/rtemis-dark.theme
```

The SCSS files are complete custom themes; no Bootswatch base theme is needed.
For each website, edit `$rthighlight` near the top of its local
`rtemis-light.scss` and `rtemis-dark.scss`, for example:

```scss
$rthighlight: #ff4f36 !default;
```

The accent controls primary UI colors, links, sidebar highlights, and the webR
run icon. Set the same value in both files or choose a different accent per mode.
Syntax colors stay paired with the editor themes.

Quarto ignores highlighting-file backgrounds when using adaptive light/dark
highlighting. The SCSS supplies the neutral code backgrounds: `#F7F7F7` in light
mode and `#303030` in dark mode. Page backgrounds retain the website defaults,
white in light mode and `#181818` in dark mode. The `Normal` token style sets code
foregrounds in both modes, including text without a specialized token.

When migrating from separate website and code SCSS files, replace both entries
with the matching consolidated SCSS. Keep independent
site CSS, such as font and layout rules, in the existing `css:` configuration.
Use a single `syntax-highlighting` setting and remove obsolete `highlight-style`
settings that select a different palette.

For a single-mode HTML book:

```yaml
format:
  html:
    theme: themes/rtemis/rtemis-light.scss
    syntax-highlighting: themes/rtemis/rtemis-light.theme
```

For PDF output, configure the light highlighting file separately:

```yaml
format:
  pdf:
    syntax-highlighting: themes/rtemis/rtemis-light.theme
```

The HTML SCSS files do not apply to PDF. Older Quarto versions use
`highlight-style` in place of `syntax-highlighting`; the theme files are the same.
The configurations above were checked with Quarto 1.10.18 and its Pandoc 3.10.

## Share updates across books

Keep the master themes in this repository and copy them into each book.
Refresh both `.theme` files and both SCSS files together when adopting updates,
preserving the website's `$rthighlight` values in the local SCSS copies.

## Preview and matching

From this repository's root:

```sh
quarto preview quarto/preview.qmd
```

Use the page's light/dark toggle to review the R, Python, Julia, and JSON examples.
The preview does not execute code or require those language runtimes.

Functions are blue, types light blue, named arguments/attributes orange,
numbers and constants pink, strings teal, and keywords violet. Operators are
neutral gray. Italics are limited to comments and their documentation annotations.

Pandoc/Skylighting has fewer token categories than VS Code or Zed. For example,
R named arguments use `Attribute`, while the `L` suffix in `2L` uses `DataType`.
`Attribute` is also used for HTML attributes and some other languages' properties.
The palette matches; individual token classification depends on the language
highlighter. A color theme cannot add semantic classifications.

The SCSS preserves the established website component styling and `.day`/`.night`
visibility helpers. Redundant defaults, unused legacy container widths, commented
examples, and conflicting code-background overrides have been removed. Variable
removals were checked against compiled CSS with Quarto 1.10.18.

See [Quarto theme layering](https://quarto.org/docs/output-formats/html-themes-more.html#bootstrap-bootswatch-layering),
[Quarto custom highlighting](https://quarto.org/docs/output-formats/html-code.html#custom-highlighting)
and [Pandoc syntax highlighting](https://pandoc.org/MANUAL.html#syntax-highlighting).

## License

[BSD 3-Clause](LICENSE), with [third-party notices](THIRD_PARTY_NOTICES.txt) for
the adapted website component styles.
