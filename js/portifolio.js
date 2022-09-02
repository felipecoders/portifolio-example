const portifolio = [
  { image_url: "./images/01.webp", title: "Image 01" },
  { image_url: "./images/02.png", title: "Image 02" },
  { image_url: "./images/03.jpg", title: "Image 03" },
  { image_url: "./images/04.jpg", title: "Image 04" },
  { image_url: "./images/05.jpg", title: "Image 05" },
  { image_url: "./images/06.webp", title: "Image 06" },
  { image_url: "./images/07.jpg", title: "Image 07" },
  { image_url: "./images/08.jpg", title: "Image 08" },
];

const portifolioContainer = document.getElementById("portifolio-container");

for (let index = 0; index < portifolio.length; index += 1) {
  const { image_url, title } = portifolio[index];
  const wrapper = document.createElement("div");
  const card = document.createElement("div");
  card.className = "card portifolio overflow-hidden shadow";

  const figure = document.createElement("figure");
  figure.className = "m-0";

  const img = document.createElement("img");
  img.className = "w-100";
  img.src = image_url;
  img.alt = img.title = title;

  figure.append(img);
  card.append(figure);
  wrapper.append(card);

  portifolioContainer.append(wrapper);
}
