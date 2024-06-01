import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import PaginaPrincipal from "./pag_principal/principal.js"
import PaginaAlunos from "./pag_alunos/alunos.js"
import PaginaProf from "./pag_prof/professor.js"

function Rotas(){
    return(
    <Router>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/alunos" element={<PaginaAlunos />} />
        <Route path="/professores" element={<PaginaProf />} />
      </Routes>
    </Router>
    )
}

export default Rotas;
