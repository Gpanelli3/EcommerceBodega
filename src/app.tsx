import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timeline from "./story.tsx";
import Footer from "./footer.tsx";
import MenuHamburguesa from "./menu";
import Carrusel from "./carrusel.tsx";


function App() {
  return (
    <Router>
      <Carrusel />

      <Routes>
        <Route path="/" element={<MenuHamburguesa />} />
        <Route path="/historia" element={<Timeline />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
