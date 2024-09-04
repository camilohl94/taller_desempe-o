import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Encabezado from "./Encabezado";
import Aside from "./Aside";
import Contenido from "./Contenido";
import Footer from "./Footer";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Encabezado />
    <section className="contenido">
      <Aside />
      <Contenido />
    </section>
   <section className="final">
    <Footer/>
   </section>
  </StrictMode>
);
