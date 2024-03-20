// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("img/road.png");
  imagemDoAtor = loadImage("img/actor-1.png");
  imagemCarro = loadImage("img/car-1.png");
  imagemCarro2 = loadImage("img/car-2.png");
  imagemCarro3 = loadImage("img/car-3.png");  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("sons/track.mp3");
  somDaColisao = loadSound("sons/crash.mp3");
  somDoPonto = loadSound("sons/points.wav");
}