import dictionary from "assets/dictionary.json";

const educationTemplate = document.createElement("template");

educationTemplate.innerHTML = `
<section-component sSubtitle="Education" sTitle="Siberian Federal University">
  <div slot="content" class="grid gap-8 max-w-prose">
    <div>
        <a
          href="https://www.sfu-kras.ru/en"
          rel="noopener noreferrer nofollow"
          target="_blank"
          class="decoration-accent underline hover:text-accent transition underline-offset-8 decoration-1"
          >Institute of Space and Information Technologies</a
        >
      
      <div class="flex gap-x-4 items-center flex-wrap">
        <p class="text-muted drop-shadow-text-sm max-w-prose">
          Engineer in Computer Science
      </p>
        <small class="drop-shadow-text-sm max-w-prose text-muted">
          (2005 - 2010)
        </small>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:gap-8">
      <h3 class="text-xl font-medium tracking-wide">Languages:</h3>
      <ul class="text-left flex flex-col gap-4 sm:flex-row sm:gap-8">
        <li class="flex gap-4 items-center">
          <i class="text-accent w-20 sm:w-auto">rus-RU</i>
          <div class="flex flex-col leading-tight">
            Russian
            <small class="text-muted">fluent</small>
          </div>
        </li>

        <li class="flex gap-4 items-center">
          <i class="text-accent w-20 sm:w-auto">en-US</i>
          <div class="flex flex-col leading-tight">
            English
            <small class="text-muted"
              >B2 (<a
                href="/MY00124509138-28-12-2024-ETRF.pdf"
                class="text-accent"
                rel="noopener noreferrer nofollow"
                target="_blank"
                >IELTS 6.5</a
              >)</small
            >
          </div>
        </li>
      </ul>
    </div>

    <details class="group">
      <summary
        class="cursor-pointer list-none select-none flex gap-4 items-center"
      >
        <h3 class="text-xl font-medium tracking-wide">
          Certification & Trainings
        </h3>
        <custom-icon
          name="chevron"
          class="text-accent group-open:rotate-180 transition"
        ></custom-icon>
      </summary>

      <ul class="text-left grid gap-4 sm:grid-cols-2">
        ${dictionary.education.certificates
          .map(
            (certificate) =>
              `<li class="flex gap-4 items-center">
              <a
                href="${certificate.link}"
                rel="noopener noreferrer nofollow"
                target="_blank"
                class="text-accent hover:text-current transition"
              >
                <custom-icon name="external-link"></custom-icon>
              </a>
              <div class="flex flex-col leading-tight">
                ${certificate.title}
                <small class="text-muted">${certificate.date}</small>
              </div>
          </li>`
          )
          .join("")}
      </ul>
    </details>
  </div>
</section-component>
`;
class Education extends HTMLElement {
  constructor() {
    super();
    const content = educationTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}
customElements.define("education-component", Education);
