# Implementation Power Tools

Tool to facilitate the work of the implementation team.

## Table of Contents

* [Installation](#installation)
  * [Google Chrome](#google-chrome)
* [Usage](#usage)
* [Adding scripts to extension](#adding-scripts-to-extension)
* [Implementation Hooks](#implementation-hooks)
  * [What are hooks?](#what-are-hooks)
  * [Types](#types)
    * [useEvent](#useevent)
      * [Usage](#usage-1)
      * [Example of use](#example-of-use)
    * [useInnerText](#useinnertext)
      * [Usage](#usage-2)
      * [Example of use](#example-of-use-1)
    * [useInnerHTML](#useinnerhtml)
      * [Usage](#usage-3)
      * [Example of use](#example-of-use-2)
    * [useInsertAdjacentHTML](#useinsertadjacenthtml)
      * [Usage](#usage-4)
      * [Example of use](#example-of-use-3)


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

#### Usage

```js
/** Overrides default addEventListener
 *
 * @param {string} description What you are doing
 * @param {string} selector The CSS selector
 * @param {string} event A JavaScript event (e.g: "click")
 * @param {function} fn A callback function to execute whenever the event occurs
 */
new useEvent(description, selector, event, fn)
```

#### Example of use

```js
new useEvent(
  "When you click on the button an alert shows up", 
  "body > button", 
  "click", 
  () => {
    alert("This is an alert")
  });
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
new useInnerText(description, selector, newText)
```

#### Example of use

```js
new useInnerText(
  "Changing the text of a div tag", 
  "body > div", 
  "Hello World"
);
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
new useInnerHTML(description, selector, newHTML)
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
 * @param {string} selector The CSS selector
 * @param {string} newHTML The content you want to insert
 * @param {string} position One of these: beforebegin | afterbegin | beforeend | afterend
 */
new useInsertAdjacentHTML(description, selector, newHTML, position)
```

#### Example of use

```js
new useInsertAdjacentHTML(
  "Adding a paragraph after the button ends", 
  "body > button", 
  "<p>Hello</p>", 
  "afterend"
);
```
