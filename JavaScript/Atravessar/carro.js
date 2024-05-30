let yCarros = [40,95,150,210,260,315]
let velocidadeCarro = [2.5,3.4,3.8,2.8,4.1,2.9]
let xCarro = [600,600,600,600,600,600]
let comprimentoCarro = 60
let alturaCarro = 40


//Movimento Carro 1
function mostrarCarros(){
  for(let i = 0; i<imagemCarros.length; i++){
  image(imagemCarros[i],xCarro[i],yCarros[i], comprimentoCarro,alturaCarro);
    }
}

function movimentaCarro(){
  for(let i = 0; i<imagemCarros.length; i++){
      xCarro[i]-=velocidadeCarro[i];
  }
}

function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i<imagemCarros.length; i++){
      if(passouTodaTela(xCarro[i])){
      xCarro[i] = 600
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro <-70;
}