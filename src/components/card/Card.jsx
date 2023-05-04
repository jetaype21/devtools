import React from "react";

export default function Card({ item, index }) {
  return (
    <article className="border-2 border-slate-600 rounded-lg p-5">
      <img
        className="w-12 h-12"
        src={item.herramienta_logo}
        alt={item.herramienta_nombre}
      />
      <strong>{item.herramienta_nombre}</strong>
      <section className="text-ellipsis overflow-hidden m-3 md:h-24">
        <p className="text-sm font-thin italic text-slate-300">
          {item.herramienta_descripcion}
        </p>
      </section>
      <a
        href={item.herramienta_enlace}
        target="_blank"
        className="border rounded-lg p-1 text-sm"
      >
        Visitar
      </a>
    </article>
  );
}
