# rtemis themes for Zed

Dark and light [rtemis](https://www.rtemis.org) themes for [Zed](https://zed.dev),
matching the rtemis VS Code palette and neutral gray interface.

Includes **rtemis-dark** and **rtemis-light**. Functions are blue, types are
light blue, parameters are orange, strings are teal, numbers and constants are
pink, and keywords are violet. Only comments use italics.

Diffs use green additions, red deletions, and blue modification markers, with
stronger highlighting on changed words.

## Install

Install [rtemis theme](https://zed.dev/extensions/rtemis-theme) from the Zed
extensions registry: run **zed: extensions**, search for `rtemis`, and click
**Install**. Then run **theme selector: toggle** and choose **rtemis-dark** or
**rtemis-light**.

To use the theme without the extension, copy
[`themes/rtemis.json`](themes/rtemis.json) into `~/.config/zed/themes/` on
macOS or Linux.

## Matching VS Code

The syntax palette, editor and panel backgrounds, and normal/bright terminal
ANSI colors match the VS Code themes. Selections use the existing neutral
inactive-selection grays so syntax remains readable when Zed retains its colors
on selected text. Zed's dim ANSI colors are derived from the normal colors and
terminal background.

Zed's language grammars and semantic classifications differ from VS Code's.
Parameters and properties receive their colors when the active language exposes
the corresponding category; a theme cannot add missing classifications. R and
Julia categories are included alongside the common syntax categories.

Licensed under [BSD 3-Clause](LICENSE).
