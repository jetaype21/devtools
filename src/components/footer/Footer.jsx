import React from "react";

export default function Footer() {
  const anio = new Date();
  return (
    <footer className="tamanio-pantalla text-center pt-5">
      <cite className="font-thin block">
        Todos los derechos reservados por JUAN TAYPE &copy; -{" "}
        {anio.getFullYear()}
      </cite>
    </footer>
  );
}
