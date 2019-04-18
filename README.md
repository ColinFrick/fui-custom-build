### Fomantic UI - Custom Build

Javascript build task with custom javascript files.

**Caveats**:
* javascript files inside the src folder will be flattened:
src/example/example.js will be copied to semantic/dist/example.js
* javascript files must be added to the components array inside semantic.json (with all other semantic components) for this to work:
```json
{
  "base": "semantic/",
  "paths": {
    "source": {
      "config": "src/theme.config",
      "definitions": "src/definitions/",
      "site": "src/site/",
      "themes": "src/themes/"
    },
    "output": {
      "packaged": "dist/",
      "uncompressed": "dist/components/",
      "compressed": "dist/components/",
      "themes": "dist/themes/"
    },
    "clean": "dist/"
  },
  "permission": false,
  "autoInstall": false,
  "rtl": false,
  "components": [
    "reset",
    "site",
    "button",
    "container",
    "divider",
    "flag",
    "header",
    "icon",
    "image",
    "input",
    "label",
    "list",
    "loader",
    "rail",
    "reveal",
    "segment",
    "step",
    "breadcrumb",
    "form",
    "grid",
    "menu",
    "message",
    "table",
    "ad",
    "card",
    "comment",
    "feed",
    "item",
    "statistic",
    "accordion",
    "calendar",
    "checkbox",
    "dimmer",
    "dropdown",
    "embed",
    "modal",
    "nag",
    "placeholder",
    "popup",
    "progress",
    "slider",
    "rating",
    "search",
    "shape",
    "sidebar",
    "sticky",
    "tab",
    "text",
    "toast",
    "transition",
    "api",
    "form",
    "state",
    "visibility",

    "example"
  ],
  "version": "2.7.4"
}
```
