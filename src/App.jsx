import { useEffect, useState } from "react";
import "./App.css";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useSearchParams,
} from "react-router-dom";

export default function App() {
  const [params, setParams] = useSearchParams();
  const [parametro, setParametro] = useState("");

  function agregarParametro(e, setActiveCategories) {
    e.preventDefault();
    // refreshPage();
    let valor = e.currentTarget.value.replace(/\s+/g, "-");

    setParams({
      categoria: valor,
    });
    setParametro(valor);
    setActiveCategories(false);
  }

  function Home() {
    return (
      <>
        <Header agregarParametro={agregarParametro} />
        <Body parametro={parametro} />
        <Footer />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
