import dictionary from "assets/dictionary.json";
const codeExamplesTemplate = document.createElement("template");

// TODO put my own site here
codeExamplesTemplate.innerHTML = `
<section-component sSubtitle="REPOSITORIES" sTitle="Code Examples">
  <ul
    slot="content"
    class="grid gap-8 sm:grid-cols-2 sm:gap-4 justify-items-center"
  >
    ${dictionary.codeExamples.examples
      .map(
        (project) => `
      <li
        class="rounded shadow-card-down hover:shadow-card-up hover:-translate-y-2 max-w-sm sm:max-w-none w-full bg-bkgSecondary transition flex flex-col gap-4 p-4"
      >
        <div class="flex gap-4 justify-end">
          <a
            href="${project.githubLink}"
            rel="noopener noreferrer nofollow"
            target="_blank"
            class="text-accent hover:text-current transition w-min"
            aria-label="${project.title} github repository (opens in a new tab)"
          >
            <custom-icon name="github"></custom-icon>
          </a>
          <a
            href="${project.href}"
            rel="noopener noreferrer nofollow"
            target="_blank"
            class="text-accent hover:text-current transition w-min"
            aria-label="${project.title} project (opens in a new tab)"
          >
            <custom-icon name="external-link"></custom-icon>
          </a>
        </div>

        <div>
          <h5 class="text-xl font-medium tracking-wide">
            <a
              href="${project.href}"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="decoration-accent underline hover:text-accent transition underline-offset-8 decoration-1"
              aria-label="${project.title} project (opens in a new tab)"
              >${project.title}</a
            >
          </h5>
          <small class="tracking-widest text-muted drop-shadow-text-sm"
            >${project.techStack}
          </small>
        </div>

        <p class="drop-shadow-text-sm text-justify">
          ${project.description}
        </p>
      </li>
      `
      )
      .join("")}
  </ul>
</section-component>
`;

class CodeExamples extends HTMLElement {
  constructor() {
    super();
    const content = codeExamplesTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("code-examples-component", CodeExamples);
