const skillsContainer = document.getElementById("skills-container");
const skillsElements = [];

function renderSkills() {
  const skills = [
    {
      icon: "fa-brands fa-html5",
      title: "HTML 5",
      porcent: 85,
    },
    {
      icon: "fa-brands fa-css3-alt",
      title: "CSS",
      porcent: 85,
    },
    {
      icon: "fa-brands fa-square-js",
      title: "JS",
      porcent: 90,
    },
    {
      icon: "fa-brands fa-java",
      title: "Java",
      porcent: 75,
    },
  ];

  const container = document.getElementById("skills");

  for (const skill of skills) {
    container.innerHTML += `
      <div class="card bg-dark py-4 card-skill mb-4">
          <div class="row">
            <div class="col-3" style="padding-right: 0">
              <figure
                class="text-warning w-100 h-100 d-flex align-items-center justify-content-center"
              >
                <i style="font-size: 3.5rem" class="${skill.icon}"></i>
              </figure>
            </div>
            <div class="col-9" style="padding-left: 0">
              <div class="text-center text-warning pt-2 fs-3">${skill.title}</div>
              <div class="py-2 px-2">
                <div class="progress" style=" --bs-progress-height: 2rem">
                  <div
                    class="progress-bar bg-warning text-dark fs-4"
                    role="progressbar"
                    aria-label="${skill.title}"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style="width: 0; transition: all 0ms;"
                  >
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
  }

  skillsElements.push(
    ...Array.from(container.children).map((element, index) => ({
      element,
      skill: skills[index],
    }))
  );
}

renderSkills();

const unscubscribeScroll = useScroll(
  skillsContainer.offsetTop - 100,
  async () => {
    unscubscribeScroll();

    while (skillsElements.length > 0) {
      const { element, skill } = skillsElements.shift();
      element.classList.add("active");
      await new Promise((res) => setTimeout(res, 250));

      setTimeout(() => {
        const progressbar = element.querySelector('[role="progressbar"]');

        anime({
          targets: progressbar,
          width: `${skill.porcent}%`,
          duration: 1000,
          easing: "linear",
          update: function () {
            const porcent = Math.floor(
              Number(progressbar.style.width.replace("%", ""))
            );
            progressbar.innerHTML = `${porcent}%`;
          },
        });
      }, 500);
    }
  }
);
