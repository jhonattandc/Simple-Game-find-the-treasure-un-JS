
/* listado de funciones */ 
/*funcion que genera un numero aleatoria entre 1 y 400*/
function numeroAleatorio (size)  {
    return Math.floor(Math.random() * size);
}

/*funcion para calcular la distacia entre el tesoro y el click */
let distanciaa = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }

/*funcion que una vez calculada la distacia te muestra una pista de que tan cerca estas del tesoro  */
let pistaDeDistancia = distancia =>{
   if (distancia < 30){
        return"estas ardiendo";
    }
    else if(distancia < 40){
        return"estas muy caliente";
    }
    else if(distancia < 80){
        return"estas caliente";
    }
    else if(distancia < 120){
        return"estas calido";
    }
    else if(distancia < 180){
        return"estas frio";
    }
    else if(distancia < 350){
        return"estas muy frio";
    }
    else{
        return "estas congelado"
    }
}