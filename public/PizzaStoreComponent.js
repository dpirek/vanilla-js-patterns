class PizzaStoreComponent extends HTMLElement {
  static get observedAttributes() {
    return ['pizza-type'];
  }

  constructor(pizzaType) {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const type = pizzaType || this.getAttribute('pizza-type');

    shadowRoot.innerHTML = `<p>${type || 'Default Content'}</p>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'my-attribute') {
      this.shadowRoot.querySelector('div').textContent = newValue;
      console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    }
  }
}

customElements.define('pizza-store', PizzaStoreComponent);

export {
  PizzaStoreComponent
}