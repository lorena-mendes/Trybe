//1.Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.

function texto () {
  let centerContent = document.getElementsByTagName('p');
  centerContent[0].innerText = "Daqui a dois anos me vejo como uma pessoa desenvolvedora já inserida no mercado de trabalho."
}
texto ();

//2.Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function cor () {
  let mainContent = document.getElementsByClassName('main-content');
  mainContent[0].style.backgroundColor = 'rgb(76, 164, 109)';  
}
cor ();

//3.Crie uma função que mude a cor do quadrado vermelho para branco.

function cor2 () {
  let centerContentColor = document.getElementsByClassName('center-content');
  centerContentColor[0].style.backgroundColor = 'white'
}
cor2 ();

//4.Crie uma função que corrija o texto da tag <h1>

function correcaoDoTexto () {
  let title = document.getElementsByClassName('title');
  title[0].innerText = 'Exercício 5.1 - JavaScript'
}
correcaoDoTexto ();

//5.Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function maiusculo () {
  let maiusculo = document.getElementsByTagName('p');
  maiusculo[0].innerText = maiusculo[0].innerText.toUpperCase ();
}
maiusculo ();

//6.Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function todasTags () {
  let tags = document.getElementsByTagName('p')
  for (index = 0; index < tags.length; index += 1){
    console.log(tags[index].innerText)
  }
}
todasTags ();