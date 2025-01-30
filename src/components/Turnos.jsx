/* eslint-disable react/prop-types */
import { Cuadrado } from "./Cuadrado";
import { TURNOS } from "../logic/game";

export function Turnos({ turno }) {
  return (
    <section className="turn">
      <Cuadrado isSelected={turno === TURNOS.X}>{TURNOS.X}</Cuadrado>
      <Cuadrado isSelected={turno === TURNOS.O}>{TURNOS.O}</Cuadrado>
    </section>
  );
}
