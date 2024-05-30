let yAtor = 368
let xAtor = 100
let colisao = false
let meusPontos = 0

function mostrarAtor(){
  image(imagemDoAtor,xAtor,yAtor, 35,30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5;
      }
   if (keyIsDown(DOWN_ARROW)) {
     if(podeSeMover()){
    yAtor += 5;}
      }
}

function verificaColisao(){
  for(let i = 0; i<imagemCarros.length; i++){
    colisao =     collideRectCircle(xCarro[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,15)
      if(colisao){
        voltaInicio();
        somColisao.play();
        if(pontosMaiorQueZero()){
          meusPontos-=1;       
        } 
    }
  }
}
  
  function voltaInicio(){
    yAtor = 368;
    console.log("coliciu")
  }
  

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,0));
  text(meusPontos, width/5, 26);
}

function marcarPontos(){
  if (yAtor<15){
    meusPontos++;
    somPonto.play();
    voltaInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos>0
}

function podeSeMover(){
  return yAtor < 368;
}
