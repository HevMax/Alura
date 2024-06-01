//Variaveis Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;
//Variaveis Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis Raquetes
let alturaRaquete = 90;
let comprimentoRaquete = 8;
let alturaRaqueteOponente = 90;
let comprimentoRaqueteOponente = 8;
let yRaquete = 150;
let yRaqueteOponente = 150;
let xRaquete = 8;
let xRaqueteOponente = 584;
let velocidadeOponente = 0;
let chanceDeErrar = 0;

//Placar do Jogo
let meusPontos = 0;
let pontosOponente = 0;

// Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

//CODIGO PRINCIPAL

function draw() {
  background(0);
  mostrarBolinha();
  deslocamentoBolinha();
  limitesDeTela();
  raqueteUsuario();
  raqueteOponente();
  movimentoRaqueteUsuario();
  colisaoRaquete();
  colisaoRaqueteOponente();
  incluirPlacar();
  marcar();
  bolinhaNaoFicaPresa();
  movimentaRaqueteOponente();
}

// funções complementares
function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametro);
}
function deslocamentoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function limitesDeTela() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function raqueteUsuario() {
  rect(xRaquete, yRaquete, comprimentoRaquete, alturaRaquete);
}

function raqueteOponente() {
  rect(
    xRaqueteOponente,
    yRaqueteOponente,
    comprimentoRaqueteOponente,
    alturaRaqueteOponente
  );
}
//Movimento da Raquete
function movimentoRaqueteUsuario() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

//Colisão Com a raquete

function colisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + comprimentoRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoRaqueteOponente() {
  if (
    xBolinha - raio < xRaqueteOponente + comprimentoRaqueteOponente &&
    xBolinha + raio > xRaqueteOponente &&
    yBolinha - raio < yRaqueteOponente + alturaRaqueteOponente &&
    yBolinha + raio > yRaqueteOponente
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

//Placar do Jogo
function incluirPlacar() {
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill(color(0, 150, 300));
  rect(130, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(260, 130, 0));
  rect(430, 10, 40, 20);
  fill(255);
  text(pontosOponente, 450, 26);
}

function marcar() {
  if (xBolinha + raio > width) {
    meusPontos++;
    ponto.play();
  }
  if (xBolinha - raio < 0) {
    pontosOponente++;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa() {
  if (xBolinha - raio < 0) {
    xBolinha = raio;
  }
}

function resetarBolinha() {
  xBolinha = width / 2;
  yBolinha = height / 2;
}

function movimentaRaqueteOponente() {
  velocidadeYOponente =
    yBolinha - yRaqueteOponente - comprimentoRaqueteOponente / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1;
    if (chanceDeErrar >= 10) {
      chanceDeErrar = 50;
    }
  } else {
    chanceDeErrar -= 1;
    if (chanceDeErrar <= 5) {
      chanceDeErrar = 30;
    }
  }
}
