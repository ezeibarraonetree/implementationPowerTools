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

4. After the installation you should refresh VisualVault page in order to initialize the settings.

> For now, it only supports Google Chrome.

## Usage

In your browser toolbar click on the extension icon to access its settings:

![image](https://user-images.githubusercontent.com/109621179/192633777-4abfe977-2bd8-42dd-be46-6ee02f1c2500.png)

## Adding scripts to extension

1. Copy the base template [`baseTemplateScript.js`](https://github.com/ezeibarraonetree/implementationPowerTools/blob/main/baseTemplateScript.js) file to `scripts` folder and modify as needed.
2. Change file and function names having in mind the script functionality (like the other scripts).
3. Modify the condition before running the function to look like this:

```js
getStorageValue("YourScriptDescriptiveName", (result) => {
  if (correctUrl && ref && test && result) {
    yourScriptDescriptiveName();
  }
});
```

4. Add the file relative path to `manifest.json > content_scripts > js` array.
5. Modify [`scripts/script-config.js`](https://github.com/ezeibarraonetree/implementationPowerTools/blob/main/scripts/script-config.js) adding a an object with the value to the `initStorage()` helper function at the begin.

# Implementation Hooks

## What are 'Hooks'?

> Hooks are nothing more, and nothing less, than a wrap around a generic callback.

## Types

### useEvent

Overrides default `addEventListener`.

```js
new useEvent(description, selector, event, fn);
```
