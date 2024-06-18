import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Principal/Principal";
import Formulario from "./pages/Formulario/Formulario";
import Mision from "./pages/Mision/Mision";
import Instrucciones from "./pages/Instrucciones/Instrucciones";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/simular" element={<Formulario />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
