import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import App from "./App.tsx";
import IndividualIntervalsExample from "./carrusel.tsx";
import MenuHamburguesa from "./menu.tsx";
import Timeline from "./story.tsx";
import Footer from "./footer.tsx";
import Banner from "./banner.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuHamburguesa />
    <IndividualIntervalsExample />
    <Banner/>
    <Timeline />
    <Footer />
  </StrictMode>
);
