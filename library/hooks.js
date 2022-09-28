class Hook {
  constructor(description, method) {
    this.description = description;
    this.method = method;
  }

  inject() {
    console.log(`%c${this.description}`, "background: green;");
    this.method();
  }
}

class useEvent extends Hook {
  /** Overrides default addEventListener
   *
   * @param {string} description What you are doing
   * @param {string} selector The CSS selector
   * @param {string} event A JavaScript event (e.g: "click")
   * @param {function} fn A callback function to execute whenever the event occurs
   */
  constructor(description, selector, event, fn) {
    super(description, () => {
      document.querySelector(selector).addEventListener(event, fn);
    });
  }
}

class useInnerText extends Hook {
  /** Change the inner text of the selector.
   *
   * @param {string} description What you are doing
   * @param {string} selector The CSS selector
   * @param {string} newText The text you want to change
   */
  constructor(description, selector, newText) {
    super(description, () => {
      document.querySelector(selector).innerText = newText;
    });
  }
}

class useInnerHTML extends Hook {
  /** Change the inner HTML of the selector.
   *
   * @param {string} description What you are doing
   * @param {string} selector The CSS selector
   * @param {string} newHTML The HTML you want to change
   */
  constructor(description, selector, newHTML) {
    super(description, () => {
      document.querySelector(selector).innerHTML = newHTML;
    });
  }
}

class useInsertAdjacentHTML extends Hook {
  /** Inserts Adjacent HTML to the selector
   *
   * @param {string} description What you are doing
   * @param {string} selector The CSS selector
   * @param {string} newHTML The content you want to insert
   * @param {string} position One of these: beforebegin | afterbegin | beforeend | afterend
   */
  constructor(description, selector, newHTML, position) {
    super(description, () => {
      selector.insertAdjacentElement(position, newHTML);
    });
  }
}
