// config imports
import { BrowserRouter, Routes, Route } from "react-router-dom"

// config rotas
import Home from "./pages/home/Home"
import Clientes from "./pages/clientes/Clientes"
import Exames from "./pages/exames/Exames"

// config conponents
import Header from "./conponents/header/Header"
import Footer from "./conponents/footer/Footer"
import Formulario from "./conponents/formulario/Formulario"

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/exames" element={<Exames />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="*" element={<h1>Página não encontrada</h1>} />
          </Routes>
        
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
