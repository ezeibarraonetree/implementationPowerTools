class Hook {
  constructor(description, selector, method) {
    this.description = description;
    this.selector = selector;
    this.method = method;
  }

  inject() {
    this.method();
  }
}

class useEvent extends Hook {
  constructor(description, selector, event, fn) {
    super(description, selector, () => {
      document.querySelector(this.selector).addEventListener(event, fn);
    });
  }
}

class useInnerText extends Hook {
  constructor(description, selector, newText) {
    super(description, selector, () => {
      document.querySelector(this.selector).innerText = newText;
    });
  }
}

class useInnerHTML extends Hook {
  constructor(description, selector, newHTML) {
    super(description, selector, () => {
      document.querySelector(this.selector).innerHTML = newHTML;
    });
  }
}

class useInsertAdjacentHTML extends Hook {
  constructor(description, selector, newHTML, position) {
    super(description, selector, () => {
      this.selector.insertAdjacentElement(position, newHTML);
    });
  }
}
