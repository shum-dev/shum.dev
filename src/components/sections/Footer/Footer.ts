const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
    <footer class="hidden-section flex justify-center text-base mb-24">
      <p
        class="container text-muted drop-shadow-text-sm text-justify max-w-lg sm:max-w-2xl"
      >
        Designed in
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Figma (opens in a new tab)"
          class="text-white"
          >Figma</a
        >
        and developed in
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visual Studio Code (opens in a new tab)"
          class="text-white"
          >Visual Studio Code</a
        >. Built with
        <a
          href="https://vite.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vite (opens in a new tab)"
          class="text-white"
          >Vite</a
        >,
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TypeScript (opens in a new tab)"
          class="text-white"
          >TypeScript</a
        >, and
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tailwind CSS (opens in a new tab)"
          class="text-white"
          >Tailwind CSS</a
        >
        using
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Web Components (opens in a new tab)"
          class="text-white"
          >web components</a
        >, and deployed on a self-hosted VPS.

        <span class="relative display-inline-block">
          <a
            href="https://github.com/shum-dev/shum.dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="This web-site source code (opens in a new tab)"
            class="text-accent hover:text-white absolute -right-11 bottom-1"
            >
            <custom-icon name="github"></custom-icon>
          </a>
        </span>
      </p>
    </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
    const content = footerTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("footer-component", Footer);
