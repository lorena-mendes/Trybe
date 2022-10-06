const paragraph = document.querySelector("#paragraph");
      paragraph.style.color = "red";

console.log(paragraph);

const pageTitle = document.querySelector("#page-title");
console.log(pageTitle.innerText);
pageTitle.innerText = "Doutor Estranho"

const subtitle = document.querySelector("#subtitle");
console.log(subtitle);
const subtituloTag = document.querySelectorAll("h4");
subtituloTag[0].style.color = "green";
subtitle.innerText = "Meu livro favorito - O Poder do Hábito";

const secondParagraph = document.querySelector("#second-paragraph");
console.log(secondParagraph);
secondParagraph.innerText = "Segundo filme favorito - Meu malvado favorito";

const paragrafos = document.querySelectorAll(".color");
paragrafos[0].style.color = "blue"
paragrafos[1].style.background = "pink"
console.log(paragrafos);