    const WIDTH = 400;
    const HEIGH = 400;
    
    let objetivo = {
      x: numeroAleatorio(WIDTH),
      y: numeroAleatorio(HEIGH)
    };

let $map = document.getElementById('mapa');
let $distanciaEnPantalla = document.getElementById('distacia');
let clicks = 0;

$map.addEventListener('click', function(e){
  clicks++;
  let distancia = distanciaa(e, objetivo);
  let distanciaEncontrada = pistaDeDistancia(distancia);
  $distanciaEnPantalla.innerHTML = `<h1>${distanciaEncontrada}</h1>`;

  console.log(distancia);
 
  if (distancia < 20) {
    alert(`haz encontrado el tesoro en ${clicks} clicks`);
    location.reload();
  }
 
}) 


