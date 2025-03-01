class Icon extends HTMLElement {
  static get observedAttributes() {
    return ["name", "size"];
  }

  connectedCallback() {
    if (!document.querySelector("icon-set")) {
      console.warn(
        "IconSet component is not loaded. Icons might not display correctly."
      );
    }
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "";
    const size = this.getAttribute("size") || "30";

    if (!document.querySelector(`#i-${name}`)) {
      console.warn(`Icon "${name}" not found in IconSet`);
    }

    this.innerHTML = `
      <svg height="${size}" width="${size}">
        <use xlink:href="#i-${name}"></use>
      </svg>
    `;
  }
}

customElements.define("custom-icon", Icon);
