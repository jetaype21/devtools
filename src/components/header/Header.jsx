import React from "react";
import NavBar from "../category/Nav";

export default function Header({ agregarParametro }) {
  return (
    <header>
      <NavBar agregarParametro={agregarParametro} />

      <section className="tamanio-pantalla">
        <h1 className="text-center mt-5 text-2xl md:text-4xl capitalize font-normal italic">
          Todo lo que nesecitas en un solo lugar
        </h1>

        <p className="text-center font-light mt-2 text-md text-slate-200 italic">
          Encuentra las mejores herramientas para el desarrollo de software y
          aumenta tu productividad.
        </p>
      </section>

      {/* <button onClick={goToPosts}>Go to Posts</button> */}
    </header>
  );
}
