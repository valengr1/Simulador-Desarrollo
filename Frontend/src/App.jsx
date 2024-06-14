import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./pages/Principal/Principal";
import Formulario from "./pages/Formulario/Formulario";
import Mision from "./pages/Mision/Mision";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/simular" element={<Formulario />} />
        <Route path="/mision" element={<Mision />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
