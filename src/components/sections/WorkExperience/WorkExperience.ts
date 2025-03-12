import dictionary from "assets/dictionary.json";
const expTemplate = document.createElement("template");

expTemplate.innerHTML = `<section-component sSubtitle="EXPERIENCE" sTitle="Career Highlights">
  <div slot="content" class="grid gap-4 max-w-prose">
    <div class="flex items-center gap-4">
      <p class="text-muted drop-shadow-text-sm max-w-prose">Download my CV -</p>
      <ul
        aria-label="CV downloads"
        class="flex justify-around gap-1 items-center sm:gap-4"
      >
        <li title="CV PDF" class="hidden-lr group" style="--order-lr: 2">
          <a
            href="/CV-shum.pdf"
            rel="noopener noreferrer nofollow"
            target="_blank"
            class="text-accent bg-bkgSecondary rounded group-hover:text-current transition block p-2 sm:p-4 shadow-card-down group-hover:shadow-card-up group-hover:-translate-y-2"
          >
            <custom-icon name="pdf-file"></custom-icon>
          </a>
        </li>

        <li title="CV DOC" class="hidden-lr group" style="--order-lr: 3">
          <a
            href="/CV-shum.docx"
            rel="noopener noreferrer nofollow"
            target="_blank"
            class="text-accent bg-bkgSecondary rounded group-hover:text-current transition block p-2 sm:p-4 shadow-card-down group-hover:shadow-card-up group-hover:-translate-y-2"
          >
            <custom-icon name="doc-file"></custom-icon>
          </a>
        </li>
      </ul>
    </div>

    <ul class="grid gap-8 sm:grid-cols-2 sm:gap-4 justify-items-center">
      ${dictionary.workExperience.companies
        .map(
          (company) => `
      <li
        class="rounded shadow-card-down hover:shadow-card-up hover:-translate-y-2 max-w-sm sm:max-w-none w-full bg-bkgSecondary transition flex flex-col gap-4 p-4"
      >
        <small class="tracking-widest text-muted uppercase drop-shadow-text-sm"
      > ${company.position}</small
        >

        <div>
          <h3 class="text-xl font-medium tracking-wide">
            @
            <a
              href="${company.link}"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="decoration-accent underline hover:text-accent transition underline-offset-8 decoration-1"
              >${company.name}</a
            >
          </h3>
          <small class="text-muted">${company.date}</small>
        </div>

        <div class="text-left">
          <h5 class="tracking-widest">Projects:</h5>
          <ul class="list-disc list-inside marker:text-accent flex flex-col gap-4">
            ${company.projects
              .map(
                (project) => `
                  <li class="${
                    project.link
                      ? "flex gap-4 items-center"
                      : "text-muted drop-shadow-text-sm pl-2"
                  }">
                      ${
                        project.link
                          ? `
                            <a
                              href="${project.link}"
                              rel="noopener noreferrer nofollow"
                              target="_blank"
                              class="text-accent hover:text-current transition"
                            >
                              <custom-icon name="external-link"></custom-icon>
                            </a>
                            <div class="mt-2">${project.name}</div>
                        `
                          : project.name
                      }

                  </li>
            `
              )
              .join("")}
          </ul>
        </div>
      </li>
      `
        )
        .join("")}
    </ul>
  </div>
</section-component>
`;

class WorkExperience extends HTMLElement {
  constructor() {
    super();
    const content = expTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("work-experience-component", WorkExperience);
