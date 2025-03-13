const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<header
  aria-label="Welcome section"
  class="relative flex flex-col h-screen justify-center container max-w-prose"
>
  <div class="hidden-section">
    <small
      class="tracking-widest text-accent uppercase drop-shadow-text-sm mb-1"
    >
      EGOR SHUMANSKII
    </small>

    <h1
      class="leading-normal tracking-wide text-4xl text-left font-bold text-white drop-shadow-text-sm lg:drop-shadow-text-lg"
    >
      Software Engineer & <br/> Mentor
    </h1>

    <hr class="border-t-4 mt-4" />

    <h2 class="font-body text-2xl text-left font-normal mt-16 ml-[20%]">
      Web Development and Audit for Frontend Applications
    </h2>
  </div>
</header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
    const content = headerTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("header-component", Header);
