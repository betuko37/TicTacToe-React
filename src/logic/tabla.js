import { COMBOS_GANADORES } from "./game"

export const checarGanador = (checarElTablero) => {
    
    //para ver si X u O es ganador
    for( const combo of COMBOS_GANADORES){
      const [a,b,c] = combo
      if(
        checarElTablero[a] &&
        checarElTablero[a] === checarElTablero[b] && 
        checarElTablero[a] === checarElTablero[c]
        ){
          return checarElTablero[a]
        }
    }

    //si no hay ganador 
    return null
  } 



  export const checarSiFinalizoJuego = (nuevoTablero) =>{
    //revisar si hay un empate si no hay mas espacios vacios en el tablero y ningun ganador
    return nuevoTablero.every((cuadrado) => cuadrado !== null)
  }