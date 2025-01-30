import { useReglas } from "./logic/reglas";
import { GanadorModal } from "./components/GanadorModal";
import { Tablero } from "./components/Tablero";
import { Turnos } from "./components/Turnos";

function App() {
  const { tablero, turno, ganador, actualizarTablero, reiniciarJuego } = useReglas();

  return (
    <main className="board">

      {/* Titulo */}
      <h1>Tic Tac Toe</h1>
      <button onClick={reiniciarJuego}>Empezar de Nuevo!</button>

      {/* Tablero */}
      <Tablero tablero={tablero} actualizarTablero={actualizarTablero} />

      {/* Seccion Turnos */}
      <Turnos turno={turno} />

      {/* Modal de Ganador*/}
      <GanadorModal ganador={ganador} reiniciarJuego={reiniciarJuego} />
    </main>
  );
}

export default App;
