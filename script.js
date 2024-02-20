//Array das peças
var imgArray = ["./pecas/A.jpg","./pecas/AC.jpeg","./pecas/C.jpg","./pecas/CS.jpeg", "./pecas/I.jpeg",
"./pecas/K.jpg","./pecas/L.png","./pecas/R.jpg","./pecas/N.png", "./pecas/D.jpg", "./pecas/G.png", "./pecas/SG.jpg"];

//Vaalor imaginário que será usado depois na connfirmação das peças
var valorC = -1;

var blocoC;

var paresC = 0;

//função que cria o jogo
function Iniciar(){
    paresC = 0;
    const qtd_c = 4; //número de colunas
    const qtd_l = 4; //número de linhas

    var paresT = qtd_c*qtd_l/2; //vê quantos pares tem ao todo
    console.log(paresT);

    const jogo = document.querySelector("#jogo"); //pega a div onde vão ficar as peças
    jogo.innerHTML = ""; //limpa a div das peças
    const btn = document.querySelector("#center"); //pega a div dos botões de nível
    btn.remove(); //remove o botão

    var corretos1 = numeros_carta(qtd_c,qtd_l); //chama a função e dá os valores que ela vai usar
    corretos1 = shuffle(corretos1); //embaralha as peças
    //console.log(corretos1); põe no console para saber se foram todas

    let gtc = ""; //vai ser usado para fazer as linhas e colunas
    let codCell = 0; //coloca o codigo nas cartas 

    for (let c=0; c<qtd_c; c++){ //inicio de um laço de repetição que vai fazer a quantidade de colunas
        
        for (let k = 0; k<qtd_l; k++){ //laço que faz as linhas

            const bloco = document.createElement("div"); //cria as peças e dá as caracteisticas
            bloco.classList.add('box');
            bloco.style.backgroundSize = "contain";
            bloco.value = corretos1[codCell];
            bloco.style.backgroundColor = "lightblue";
           
            bloco.addEventListener("click", function() { //adiciona nas peças o evento do click
              bloco.style.transform = "rotateY(180deg)"; //roda a carta em 180°
              bloco.style.backgroundImage = `url(${imgArray[bloco.value]})`;//quando clicada a peça mostra a imagem a partir do seu valor

              if(valorC == -1){ //vai conferir se o valorC está inalterado (se estiver, esse foi o primeiro click)
                valorC = bloco.value; //vai dar o valor do bloco clicado para o valorC
                blocoC = bloco; //a peça vira o blococ para poder ser acessada depois
              }else{ //se o valorC foi alterado essa é a segunda peça clicada, então o seguinte acontece:
                if(valorC != bloco.value){ //confere se o valor dessa peça é igual a anterior, se não for elas viram
                console.log("errado");
                  setTimeout(function() {bloco.style.backgroundImage = ""; bloco.style.transform = "rotateY(-180deg)"; //roda a carta 180° pro outro lado
                   bloco.style.backgroundColor = "lightblue"}, 1500);
                  setTimeout(function() { blocoC.style.backgroundImage = ""; blocoC.style.transform = "rotateY(-180deg)"; 
                  blocoC.style.backgroundColor = "lightblue"}, 1500); //redefine as peças depis de alguns segundos
                }else{
                    paresC++; console.log(paresC)
                    setTimeout(function() {bloco.style.backgroundImage = ""; bloco.style.transform = "rotateY(-90deg)";}, 900);
                    //roda a carta 90°, isso a faz sumir por não ter um lado
                    setTimeout(function() { blocoC.style.backgroundImage = ""; blocoC.style.transform = "rotateY(-90deg)";}, 900);
                }
                valorC = -1;//volta o valorC para tirar o valor da peça anterior

                if(paresC == paresT){ //confere se finalizou o jogo de acordo com a quantidade de pares
                    const fim = document.querySelector("#fim"); //pega a div fim
                    setTimeout(function(){fim.classList.toggle("hide");}, 1500); //tira a class hide da div fim depois de um tempo
                    fim.addEventListener("click", function(){ /*adciona um evento que faz a pagina recarregar quando aperta em
                    qualquer lugar da tela*/
                        location.reload();
                    })
                }
              }
              
            });

            bloco.addEventListener("mouseover", function() {
                this.style.border = "4px solid blue"; //quando o mause estiver na peça cria uma borda diferente nela
              });  
            
            bloco.addEventListener("mouseout", function() {
                this.style.border = "1px solid black"; //quando o mause sair redefine a peça
              });  
            
            jogo.appendChild(bloco); //põe os blocos na div

            codCell++;
        }    
       
        gtc = gtc + " auto";
    }

    jogo.style.gridTemplateColumns = gtc;

}

function Iniciar2(){
  paresC = 0;
  const qtd_c = 5; //número de colunas
  const qtd_l = 4; //número de linhas

  var paresT = qtd_c*qtd_l/2; //vê quantos pares tem ao todo
  console.log(paresT);

  const jogo = document.querySelector("#jogo"); //pega a div onde vão ficar as peças
  jogo.innerHTML = ""; //limpa a div das peças
  const btn = document.querySelector("#center"); //pega a div dos botões de nível
  btn.remove(); //remove o botão

  var corretos1 = numeros_carta(qtd_c,qtd_l); //chama a função e dá os valores que ela vai usar
  corretos1 = shuffle(corretos1); //embaralha as peças
  //console.log(corretos1); põe no console para saber se foram todas

  let gtc = ""; //vai ser usado para fazer as linhas e colunas
  let codCell = 0; //coloca o codigo nas cartas 

  for (let c=0; c<qtd_c; c++){ //inicio de um laço de repetição que vai fazer a quantidade de colunas
      
      for (let k = 0; k<qtd_l; k++){ //laço que faz as linhas

          const bloco = document.createElement("div"); //cria as peças e dá as caracteisticas
          bloco.classList.add('box');
          bloco.style.backgroundSize = "contain";
          bloco.value = corretos1[codCell];
          bloco.style.backgroundColor = "lightblue";
         
          bloco.addEventListener("click", function() { //adiciona nas peças o evento do click
            bloco.style.transform = "rotateY(180deg)"; //roda a carta em 180°
            bloco.style.backgroundImage = `url(${imgArray[bloco.value]})`;//quando clicada a peça mostra a imagem a partir do seu valor

            if(valorC == -1){ //vai conferir se o valorC está inalterado (se estiver, esse foi o primeiro click)
              valorC = bloco.value; //vai dar o valor do bloco clicado para o valorC
              blocoC = bloco; //a peça vira o blococ para poder ser acessada depois
            }else{ //se o valorC foi alterado essa é a segunda peça clicada, então o seguinte acontece:
              if(valorC != bloco.value){ //confere se o valor dessa peça é igual a anterior, se não for elas viram
              console.log("errado");
                setTimeout(function() {bloco.style.backgroundImage = ""; bloco.style.transform = "rotateY(-180deg)"; //roda a carta 180° pro outro lado
                 bloco.style.backgroundColor = "lightblue"}, 1500);
                setTimeout(function() { blocoC.style.backgroundImage = ""; blocoC.style.transform = "rotateY(-180deg)"; 
                blocoC.style.backgroundColor = "lightblue"}, 1500); //redefine as peças depis de alguns segundos
              }else{
                  paresC++; console.log(paresC)
                  setTimeout(function() {bloco.style.backgroundImage = ""; bloco.style.transform = "rotateY(-90deg)";}, 900);
                  //roda a carta 90°, isso a faz sumir por não ter um lado
                  setTimeout(function() { blocoC.style.backgroundImage = ""; blocoC.style.transform = "rotateY(-90deg)";}, 900);
              }
              valorC = -1;//volta o valorC para tirar o valor da peça anterior

              if(paresC == paresT){ //confere se finalizou o jogo de acordo com a quantidade de pares
                  const fim = document.querySelector("#fim"); //pega a div fim
                  setTimeout(function(){fim.classList.toggle("hide");}, 1500); //tira a class hide da div fim depois de um tempo
                  fim.addEventListener("click", function(){ /*adciona um evento que faz a pagina recarregar quando aperta em
                  qualquer lugar da tela*/
                      location.reload();
                  })
              }
            }
            
          });

          bloco.addEventListener("mouseover", function() {
              this.style.border = "4px solid blue"; //quando o mause estiver na peça cria uma borda diferente nela
            });  
          
          bloco.addEventListener("mouseout", function() {
              this.style.border = "1px solid black"; //quando o mause sair redefine a peça
            });  
          
          jogo.appendChild(bloco); //põe os blocos na div

          codCell++;
      }    
     
      gtc = gtc + " auto";
  }

  jogo.style.gridTemplateColumns = gtc;

}

function Iniciar3(){
  paresC = 0;
  const qtd_c = 6; //número de colunas
  const qtd_l = 4; //número de linhas

  var paresT = qtd_c*qtd_l/2; //vê quantos pares tem ao todo
  console.log(paresT);

  const jogo = document.querySelector("#jogo"); //pega a div onde vão ficar as peças
  jogo.innerHTML = ""; //limpa a div das peças
  const btn = document.querySelector("#center"); //pega a div dos botões de nível
  btn.remove(); //remove o botão

  var corretos1 = numeros_carta(qtd_c,qtd_l); //chama a função e dá os valores que ela vai usar
  corretos1 = shuffle(corretos1); //embaralha as peças
  //console.log(corretos1); põe no console para saber se foram todas

  let gtc = ""; //vai ser usado para fazer as linhas e colunas
  let codCell = 0; //coloca o codigo nas cartas 

  for (let c=0; c<qtd_c; c++){ //inicio de um laço de repetição que vai fazer a quantidade de colunas
      
      for (let k = 0; k<qtd_l; k++){ //laço que faz as linhas

          const bloco = document.createElement("div"); //cria as peças e dá as caracteisticas
          bloco.classList.add('box');
          bloco.style.backgroundSize = "contain";
          bloco.value = corretos1[codCell];
          bloco.style.backgroundColor = "lightblue";
         
          bloco.addEventListener("click", function() { //adiciona nas peças o evento do click
            bloco.style.transform = "rotateY(180deg)"; //roda a carta em 180°
            bloco.style.backgroundImage = `url(${imgArray[bloco.value]})`;//quando clicada a peça mostra a imagem a partir do seu valor

            if(valorC == -1){ //vai conferir se o valorC está inalterado (se estiver, esse foi o primeiro click)
              valorC = bloco.value; //vai dar o valor do bloco clicado para o valorC
              blocoC = bloco; //a peça vira o blococ para poder ser acessada depois
            }else{ //se o valorC foi alterado essa é a segunda peça clicada, então o seguinte acontece:
              if(valorC != bloco.value){ //confere se o valor dessa peça é igual a anterior, se não for elas viram
              console.log("errado");
                setTimeout(function() {bloco.style.backgroundImage = ""; bloco.style.transform = "rotateY(-180deg)"; //roda a carta 180° pro outro lado
                 bloco.style.backgroundColor = "lightblue"}, 1500);
                setTimeout(function() { blocoC.style.backgroundImage = ""; blocoC.style.transform = "rotateY(-180deg)"; 
                blocoC.style.backgroundColor = "lightblue"}, 1500); //redefine as peças depis de alguns segundos
              }else{
                  paresC++; console.log(paresC)
                  setTimeout(function() {bloco.style.backgroundImage = ""; bloco.style.transform = "rotateY(-90deg)";}, 900);
                  //roda a carta 90°, isso a faz sumir por não ter um lado
                  setTimeout(function() { blocoC.style.backgroundImage = ""; blocoC.style.transform = "rotateY(-90deg)";}, 900);
              }
              valorC = -1;//volta o valorC para tirar o valor da peça anterior

              if(paresC == paresT){ //confere se finalizou o jogo de acordo com a quantidade de pares
                  const fim = document.querySelector("#fim"); //pega a div fim
                  setTimeout(function(){fim.classList.toggle("hide");}, 1500); //tira a class hide da div fim depois de um tempo
                  fim.addEventListener("click", function(){ /*adciona um evento que faz a pagina recarregar quando aperta em
                  qualquer lugar da tela*/
                      location.reload();
                  })
              }
            }
            
          });

          bloco.addEventListener("mouseover", function() {
              this.style.border = "4px solid blue"; //quando o mause estiver na peça cria uma borda diferente nela
            });  
          
          bloco.addEventListener("mouseout", function() {
              this.style.border = "1px solid black"; //quando o mause sair redefine a peça
            });  
          
          jogo.appendChild(bloco); //põe os blocos na div

          codCell++;
      }    
     
      gtc = gtc + " auto";
  }

  jogo.style.gridTemplateColumns = gtc;

}


function shuffle(array) {//fução que vai embaralhar as cartas (peguei na internet)
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function numeros_carta(q,p){ //função que dá o valor das cartas e faz os pares
    const array = [];
    var j = 0;
    for (let valor=0; valor<q*p/2; valor++){
      array[j] = valor;
      j = j +1;
      array[j] = valor;
      j = j +1;
    }
    return array;
  }
