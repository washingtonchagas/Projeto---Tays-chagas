const slider = document.querySelector('.slider');
const imagens = slider.querySelectorAll('img');
let indice = 0;

function mudarImagem() {
  imagens[indice].classList.remove('ativa');
  indice = (indice + 1) % imagens.length;
  imagens[indice].classList.add('ativa');
}

setInterval(mudarImagem, 3000); 


imagens[0].classList.add('ativa');
