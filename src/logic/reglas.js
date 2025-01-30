import { useState } from "react";
import confetti from "canvas-confetti";
import { checarGanador, checarSiFinalizoJuego } from "../logic/tabla";
import { TURNOS } from "./game";

export const useReglas = () => {
  
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(TURNOS.X);
  const [ganador, setGanador] = useState(null);

  const actualizarTablero = (index) => {
    if (tablero[index] || ganador) return;

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno;
    setTablero(nuevoTablero);

    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X;
    setTurno(nuevoTurno);

    const nuevoGanador = checarGanador(nuevoTablero);
    if (nuevoGanador) {
      confetti();
      setGanador(nuevoGanador);
    } else if (checarSiFinalizoJuego(nuevoTablero)) {
      setGanador(false); // empate
    }
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador(null);
  };

  return {
    tablero,
    turno,
    ganador,
    actualizarTablero,
    reiniciarJuego,
  };
};
