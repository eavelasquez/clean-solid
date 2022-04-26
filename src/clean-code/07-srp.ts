(() => {
  // Without applying the Single Responsibility Principle

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) { }
  }

  class HtmlInputAttributes extends HtmlElement {
    constructor(id: string, public placeholder: string, public value: string) {
      super(id, 'input');
    }
  }

  class HtmlInputEvents extends HtmlInputAttributes {
    constructor(id: string, placeholder: string, value: string) {
      super(id, placeholder, value);
    }

    setFocus() { }
    getValue() { }
    isActive() { }
    removeValue() { }
  }

  const nameField = new HtmlInputEvents('txtName', 'Enter first name', 'Ai');
  console.log({ nameField });
})();

(() => {
  // With applying the Single Responsibility Principle
  // Prioritize composition over inheritance

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) { }
  }

  class HtmlInputAttributes {
    constructor(public placeholder: string, public value: string) { }
  }

  class HtmlInputEvents {
    constructor() { }

    setFocus() { }
    getValue() { }
    isActive() { }
    removeValue() { }
  }

  // Note: this class is a composition of the other classes
  class HtmlInputElement {
    public html: HtmlElement;
    public attributes: HtmlInputAttributes;
    public events: HtmlInputEvents;

    constructor(id: string, placeholder: string, value: string) {
      this.html = new HtmlElement(id, 'input');
      this.attributes = new HtmlInputAttributes(placeholder, value);
      this.events = new HtmlInputEvents();
    }
  }

  const nameField = new HtmlInputElement('txtName', 'Enter first name', 'Ai');
  console.log({ nameField });
})();
