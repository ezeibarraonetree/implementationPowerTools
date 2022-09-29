# Implementation Power Tools

Tool to facilitate the work of the implementation team.

## Table of Contents

- [Installation](#installation)
  - [Mozilla Firefox](#mozilla-firefox)
- [Usage](#usage)
- [Adding scripts to extension](#adding-scripts-to-extension)
- [Implementation Hooks](#implementation-hooks)
  - [What are hooks?](#what-are-hooks)
  - [Types](#types)
    - [useEvent](#useevent)
      - [Usage](#usage-1)
      - [Example of use](#example-of-use)
    - [useInnerText](#useinnertext)
      - [Usage](#usage-2)
      - [Example of use](#example-of-use-1)
    - [useInnerHTML](#useinnerhtml)
      - [Usage](#usage-3)
      - [Example of use](#example-of-use-2)
    - [useInsertAdjacentHTML](#useinsertadjacenthtml)
      - [Usage](#usage-4)
      - [Example of use](#example-of-use-3)

## Installation

### Mozilla Firefox

1. Clone the repository with specific branch: `git clone -b firefox https://github.com/ezeibarraonetree/implementationPowerTools.git`
2. Zip the cloned folder's content (not the folder).
3. Go to the URL `about:debugging`.
4. Click on "This Firefox" on the left panel.
5. Click on "Load Temporary Add-on..." and select the compressed file

![image](https://user-images.githubusercontent.com/109621179/193043025-753fe0c2-aec6-4c69-be5d-e6af5054b7f3.png)

> After the installation you should refresh VisualVault page in order to initialize the settings.

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

#### Usage

```js
/** Overrides default addEventListener
 *
 * @param {string} description What you are doing
 * @param {NodeElement} selector The CSS selector. e.g: document.querySelector("#container > button")
 * @param {string} event A JavaScript event (e.g: "click")
 * @param {function} fn A callback function to execute whenever the event occurs
 */
new useEvent(description, selector, event, fn);
```

#### Example of use

```js
new useEvent(
  "When you click on the button an alert shows up",
  document.querySelector("#container > button"),
  "click",
  () => {
    alert("This is an alert");
  }
);
```

### useInnerText

Change the inner text of the selector.

#### Usage

```js
/** Change the inner text of the selector.
 *
 * @param {string} description What you are doing
 * @param {string} selector The CSS selector
 * @param {string} newText The text you want to change
 */
new useInnerText(description, selector, newText);
```

#### Example of use

```js
new useInnerText("Changing the text of a div tag", "body > div", "Hello World");
```

### useInnerHTML

Change the inner HTML of the selector.

#### Usage

```js
/** Change the inner HTML of the selector.
 *
 * @param {string} description What you are doing
 * @param {string} selector The CSS selector
 * @param {string} newHTML The HTML you want to change
 */
new useInnerHTML(description, selector, newHTML);
```

#### Example of use

```js
new useInnerHTML(
  "Changing the HTML of a div tag",
  "body > div",
  "<h1>Hello World</h1>"
);
```

### useInsertAdjacentHTML

#### Usage

```js
/** Inserts Adjacent HTML to the selector
 *
 * @param {string} description What you are doing
 * @param {NodeElement} selector The CSS selector. e.g: document.querySelector("#container > button")
 * @param {string} newHTML The content you want to insert
 * @param {string} position One of these: beforebegin | afterbegin | beforeend | afterend
 */
new useInsertAdjacentHTML(description, selector, newHTML, position);
```

#### Example of use

```js
new useInsertAdjacentHTML(
  "Adding a paragraph after the button ends",
  document.querySelector("#container > button"),
  "<p>Hello</p>",
  "afterend"
);
```
