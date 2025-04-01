import dictionary from "assets/dictionary.json";

const skillsTemplate = document.createElement("template");

skillsTemplate.innerHTML = `
<section-component
  sSubtitle="TECH ARSENAL"
  sTitle="Skills"
  class="hidden-section"
>
  <ul
    slot="content"
    class="grid gap-8 sm:grid-cols-2 sm:gap-4 justify-items-center"
  >
    ${dictionary.skills.groups
      .map(
        (skill) => `
      <li
        class="rounded shadow-card-down hover:shadow-card-up hover:-translate-y-2 max-w-sm sm:max-w-none w-full bg-bkgSecondary transition flex flex-col gap-4 p-4 decor"
      >
        <h5 class="text-xl font-medium tracking-wide">${skill.title}</h5>

        <ul class="text-left list-disc list-inside marker:text-accent">
          ${skill.items
            .map(
              (item) =>
                `<li class="text-muted drop-shadow-text-sm">${item}</li>`
            )
            .join("")}
        </ul>
      </li>
      
      `
      )
      .join("")}
  </ul>
</section-component>
`;

class Skills extends HTMLElement {
  constructor() {
    super();
    const content = skillsTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("skills-component", Skills);
