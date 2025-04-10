import dictionary from "assets/dictionary.json";

const aboutTemplate = document.createElement("template");

import avatarUrl from "/assets/shum_ava.webp";

aboutTemplate.innerHTML = `
<section aria-label="About" class="container max-w-prose">
  <div class="flex gap-4">
    <small
      class="tracking-widest text-accent uppercase drop-shadow-text-sm leading-normal"
      >Hi, my name is</small
    >

    <hr class="grow border-t-bkgSecondary border-t-2 self-center" />
  </div>

  <div class="grid gap-4 sm:grid-cols-[60%_1fr] sm:gap-[5%]">
    <div class="grid gap-4">
      <h2
        class="leading-normal text-3xl font-bold tracking-wide drop-shadow-text-md"
      >
        Egor Shumanskii
      </h2>

      <p class="text-muted drop-shadow-text-sm max-w-prose text-justify">
        ${dictionary.about.text}
      </p>

      <ul aria-label="Contacts" class="flex justify-around gap-1 items-center">
        ${dictionary.about.links
          .map(
            (link) =>
              `<li title="${link.title}" class="hidden-lr group" >
                <a
                  href="${link.href}"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  class="text-accent bg-bkgSecondary rounded group-hover:text-current transition block p-2 sm:p-4 shadow-card-down group-hover:shadow-card-up group-hover:-translate-y-2"
                  aria-label="${link.label}"
                >
                  <custom-icon name="${link.icon}"></custom-icon>
                </a>
              </li>`
          )
          .join("")}
      </ul>
    </div>

    <div class="grid group self-center justify-center">
      <div class="col-span-full row-span-full place-self-center">
        <img
          loading="lazy"
          class="rounded object-cover w-full max-w-xs mx-auto"
          src="${avatarUrl}"
          alt="Egor's Photo"
          width="320"
          height="427"
        />
      </div>

      <div
        class="bg-bkgSecondary z-0 col-span-full row-span-full self-end p-3 mx-4 max-w-[300px] flex items-center justify-self-stretch justify-center gap-2"
      >
        <custom-icon name="location"></custom-icon>

        <small title="Current Location" class="whitespace-nowrap"
          >Batumi, Georgia</small
        >
      </div>
    </div>
  </div>
</section>
`;

class About extends HTMLElement {
  constructor() {
    super();
    const content = aboutTemplate.content.cloneNode(true);
    this.appendChild(content);
  }
}

customElements.define("about-component", About);
