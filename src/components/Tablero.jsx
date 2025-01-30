/* eslint-disable react/prop-types */

import { Cuadrado } from "./Cuadrado";

export function Tablero({ tablero, actualizarTablero }) {
  return (
    <section className="game">
      {tablero.map((jugador, index) => (
        <Cuadrado
          key={index}
          index={index}
          actualizarTablero={actualizarTablero}
        >
          {jugador}
        </Cuadrado>
      ))}
    </section>
  );
}
