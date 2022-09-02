const aboutUsSection = document.getElementById("about-us-container");

const unscubscribeScrollAboutUs = useScroll(
  aboutUsSection.offsetTop - 100,
  async () => {
    unscubscribeScrollAboutUs();

    const paragraths = Array.from(
      aboutUsSection.querySelectorAll("p")
    ).values();

    const chainLetters = [];
    let iterator;
    while (!(iterator = paragraths.next()).done) {
      const paragrath = iterator.value;
      paragrath.className = "text-wrapper";
      const letters = paragrath.innerText
        .trim()
        .split("")
        .map((char) => {
          const span = document.createElement("span");
          span.setAttribute(
            "style",
            "display: inline-block;"
            + "transform: translateX(150%) translateY(200%) rotate(-45deg);"
            + "opacity: 0;"
          );
          span.innerHTML = char.trim() === "" ? "&nbsp;" : char;

          return span;
        });

      paragrath.innerHTML = "";
      paragrath.append(...letters);

      chainLetters.push(...letters);
    }

    anime({
      targets: chainLetters,
      delay: anime.stagger(10),
      duration: 450,
      easing: 'easeInOutQuad',
      translateX: 0,
      translateY: 0,
      rotate: 0,
      opacity: 1
    });
  }
);
