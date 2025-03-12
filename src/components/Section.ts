import styles from "/src/styles/style.css?inline";

const sectionTemplate = document.createElement("template");

// Create a shared stylesheet that will be used by all Section instances
const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

sectionTemplate.innerHTML = `
      <section
        aria-label="-------------"
        class="container grid gap-4 max-w-prose"
      >
        <div>
          <div class="flex gap-4">
            <small id="subtitle"
              class="tracking-widest text-accent uppercase drop-shadow-text-sm leading-normal"
              >
              --------------------
              </small
            >
            <hr class="grow border-t-bkgSecondary border-t-2 self-center" />
          </div>

          <h2 id="title"
            class="text-3xl leading-normal font-bold tracking-wide drop-shadow-text-md"
          >
            -------------
          </h2>
        </div>

        <slot name="content"></slot>
        
      </section>
`;

class Section extends HTMLElement {
  root: ShadowRoot;
  titleElement: Element | null;
  subtitleElement: Element | null;
  sectionElement: Element | null;
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });

    // Use the shared stylesheet
    this.root.adoptedStyleSheets = [sheet];

    const content = sectionTemplate.content.cloneNode(true);
    this.root.appendChild(content);

    this.titleElement = this.root.querySelector("#title");
    this.subtitleElement = this.root.querySelector("#subtitle");
    this.sectionElement = this.root.querySelector("section[aria-label]");
  }

  static get observedAttributes() {
    return ["sTitle", "sSubtitle"];
  }

  get sTitle() {
    return this.getAttribute("sTitle");
  }

  get sSubtitle() {
    return this.getAttribute("sSubtitle");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (
      this.titleElement &&
      this.subtitleElement &&
      this.sectionElement &&
      this.sSubtitle
    ) {
      this.titleElement.textContent = this.sTitle;
      this.subtitleElement.textContent = this.sSubtitle;
      this.sectionElement.setAttribute("aria-label", this.sSubtitle);
    }
  }
}

customElements.define("section-component", Section);
