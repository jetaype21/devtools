import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axiosConfig from "../../utils/axiosConfig";
import { useSearchParams } from "react-router-dom";

export default function Body({ parametro }) {
  const [herramientas, setHerramientas] = useState([]);

  const [categoriaParam, setcategoriaParam] = useState("");
  const [params, setParams] = useSearchParams();

  function categoryExist() {
    let param = params.get("categoria");

    if (param) {
      setcategoriaParam(param);
    } else {
      setcategoriaParam("");
    }
  }

  useEffect(() => {
    categoryExist();

    parametro !== ""
      ? axiosConfig.get(`/herramientas?categoria=${parametro}`).then((r) => {
          setHerramientas(r.data);
        })
      : axiosConfig.get("/herramientas").then((r) => {
          setHerramientas(r.data);
        });
  }, [parametro]);

  return (
    <main className="tamanio-pantalla">
      {herramientas.length === 0 && <h2>Datos cargando....</h2>}
      {/* {console.log(herramientas[0]?.tools.length)} */}
      {/* {console.log(parametro)} */}
      {/* {console.log(herramientas)} */}
      {herramientas?.map((itemprincipal, index) => (
        <section key={index} className="mt-8">
          <h2 className="text-2xl">{itemprincipal.name}</h2>
          <p className="font-normal mb-2 font-thin">
            {itemprincipal.descripcion}
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {itemprincipal.tools.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </section>
        </section>
      ))}
    </main>
  );
}
