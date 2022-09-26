# Implementation Power Tools
Tool to facilitate the work of the implementation team

## Installation

First you need to clone this repository into a local folder.

### Google Chrome

1. Go to the URL `chrome://extensions`
2. Turn on the "Developer mode" in the right upper corner

![image](https://user-images.githubusercontent.com/109621179/191979674-4961f77d-fcc5-4116-869d-d0b4b6bc1799.png)

3. Load the previous cloned folder by clicking in this button

![image](https://user-images.githubusercontent.com/109621179/191980019-fc4bdcea-5b67-49ba-b8e2-419ebeb738a9.png)

### Mozilla Firefox

1. Modify the file manifest.json to look like this:
```json
{
  "name": "ImplementationPowerTools",
  "version": "1.0.0",
  "description": "Herramienta para facilitar el trabajo del equipo de implementaciones",
  "manifest_version": 2,
  "author": "Implementation Team",
  "action": {
    "default_icon": {
      "16": "./iconos/16.png",
      "32": "./iconos/32.png",
      "48": "./iconos/48.png"
    },
    "default_title": "Implementation Power Tools",
    "default_popup": "popup.html"
  },
  "content_scripts": [
    {
      "matches": ["https://*.visualvault.com/*"],
      "js": [
        "scripts/FormDesignerAlertExit.js",
        "scripts/AddFormPublicLink.js",
        "scripts/ChangeDropDownTo500.js",
        "scripts/EXT-004.js",
        "scripts/EXT-005.js"
      ]
    }
  ],
  "icons": {
    "16": "./iconos/16.png",
    "32": "./iconos/32.png",
    "48": "./iconos/48.png",
    "128": "./iconos/128.png"
  }
}

```
2. Zip the cloned folder files. **Note:** You only need to zip the files.
3. Go to the URL `about:debugging#/runtime/this-firefox`.
4. Click on "Load Temporary Add-on..."

![image](https://user-images.githubusercontent.com/109621179/191985851-f9b179c1-f0e7-43fb-883c-ddb9bb5bdfee.png)

5. Select the zipped file.