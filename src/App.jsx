import { useState } from "react";
import confetti from "canvas-confetti";
import { Cuadrado } from "./components/Cuadrado";
import { TURNOS, COMBOS_GANADORES } from "./game";
  


function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));

  const [turno, setTurno] = useState(TURNOS.X)

  const [ganador, setGanador] = useState(null)

  const checarGanador = (checarElTablero) => {
    
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

  const reinciarJuego = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.X)
    setGanador(null)
  }

  const checarSiFinalizoJuego = (nuevoTablero) =>{
    //revisar si hay un empate si no hay mas espacios vacios en el tablero y ningun ganador
    return nuevoTablero.every((cuadrado) => cuadrado !== null)
  }

  const actualizarTablero = (index) =>{
    //si ya existe no colocar nada
    if (tablero[index] || ganador) return

    //colocar X u O si hay espacio en array
    const nuevoTablero = [...tablero]
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)

    //cambiar el turno
    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(nuevoTurno)

    //revisar si alguien gano
    const nuevoGanador = checarGanador(nuevoTablero)
    if(nuevoGanador){
      confetti()
      setGanador(nuevoGanador)
    }else if(checarSiFinalizoJuego(nuevoTablero)){
      setGanador(false) //empate
    }
  }

  return (
  <main className="board">
    <h1>Tic Tac Toe</h1>
    <button onClick={reinciarJuego}>Empezar de Nuevo!</button>
    <section className="game">
      {
        tablero.map((_, index)=> {
          return (
            <Cuadrado
            key={index}
            index={index}
            actualizarTablero={actualizarTablero}
            >
              {_}
            </Cuadrado>
          )
        })
      }
    </section>

      <section className="turn">
      <Cuadrado isSelected={turno === TURNOS.X}>{TURNOS.X}</Cuadrado>
      <Cuadrado isSelected={turno === TURNOS.O}>{TURNOS.O}</Cuadrado>

      </section>


      {
        ganador !== null &&(
          <section className="winner">
            <div className="text">
            <h2>
                {
                  ganador === false
                  ? 'Empate'
                  : 'Gano'
                }
            </h2>

                <header className="win">
                  {ganador && <Cuadrado>{ganador}</Cuadrado>}
                </header>


                <footer>
                  <button onClick={reinciarJuego}>Empezar de nuevo</button>
                </footer>


            </div>
          </section>
        )
      }

  </main>

  )
}

export default App
