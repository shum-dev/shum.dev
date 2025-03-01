// src/components/Icon.js
class Icon extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute('name') || '';
    const size = this.getAttribute('size') || '30';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        svg {
          display: block;
        }
      </style>
      <svg height="${size}" width="${size}">
        <use xlink:href="#i-${name}"></use>
      </svg>
    `;
  }
}

customElements.define('custom-icon', Icon);