// AREA DA EXECUÇÃO
function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  mostrarCarros();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcarPontos();
}
