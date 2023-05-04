import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import axiosConfig from "../../utils/axiosConfig";
import { useSearchParams } from "react-router-dom";

export let parametro = "";

export default function NavBar({ agregarParametro }) {
  const [params, setParams] = useSearchParams();

  function addParam(e) {
    agregarParametro(e, setActiveCategories);
  }

  const [activeCategories, setActiveCategories] = useState(false);
  const [categorias, setCategorias] = useState([]);

  let categoryRef = useRef();

  function showDesc(e, item) {
    e.currentTarget.title = item.categoria_descripcion;
  }

  useEffect(() => {
    axiosConfig.get("/categorias").then((r) => {
      setCategorias(r.data);
    });
  }, []);

  return (
    <nav className="h-20 flex justify-between items-center px-2 border border-b-white">
      <section>
        <h1 className="text-2xl cursor-pointer">
          <a href="/">Inicio</a>
        </h1>
      </section>

      <section className="italic text-lg font-light relative">
        <p
          className="flex gap-1 cursor-pointer"
          onMouseEnter={() => {
            setActiveCategories(true);
          }}
          onMouseLeave={() => {
            setActiveCategories(false);
          }}
        >
          Categorias
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-7"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Menu / Hamburger_MD">
                {" "}
                <path
                  id="Vector"
                  d="M5 17H19M5 12H19M5 7H19"
                  stroke="#FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </p>
        {activeCategories && (
          <section
            ref={categoryRef}
            onMouseEnter={() => {
              setActiveCategories(true);
            }}
            onMouseLeave={() => setActiveCategories(false)}
            className="container_categories absolute"
          >
            {categorias &&
              categorias?.map((item) => (
                <button
                  className="inline-block p-1 rounded-lg mr-2 mb-2 border-2 hover:border-rose-500"
                  title={item.categoria_descripcion}
                  onMouseEnter={(e) => showDesc(e, item)}
                  key={item.categoria_id}
                  onClick={(e) => addParam(e)}
                  type="button"
                  value={item.categoria_nombre}
                >
                  {item.categoria_nombre}
                </button>
              ))}
          </section>
        )}
      </section>
    </nav>
  );
}
