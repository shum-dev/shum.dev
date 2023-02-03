const hiddenSections = document.querySelectorAll(".hidden-section");
const hiddenLR = document.querySelectorAll(".hidden-lr");

const sectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      if (section.isIntersecting) {
        section.target.classList.add("shown-section");
        sectionsObserver.unobserve(section.target);

        setTimeout(() => {
          section.target.classList.remove("hidden-section", "shown-section");
        }, 2000);
      }
    });
  },
  {
    rootMargin: "0px 0px -150px 0px",
  }
);
hiddenSections.forEach((element) => sectionsObserver.observe(element));

// Left To Right Animation
const LRObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.add("shown-lr");

        LRObserver.unobserve(element.target);

        setTimeout(() => {
          element.target.classList.remove("hidden-lr", "shown-lr");
        }, 500);
      }
    });
  },
  {
    threshold: 0.6,
  }
);

hiddenLR.forEach((element) => LRObserver.observe(element));

export {};
