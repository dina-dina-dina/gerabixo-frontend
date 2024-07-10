import "./alunos.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";

function Alunos() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  useEffect(() => {
    createCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear]);

  function createCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";
    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          let cell = document.createElement("td");
          let cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }
      }
      tbl.appendChild(row);
    }
    document.getElementById("header").innerHTML =
      monthNames[month] + " " + year;
  }

  function moveMonth(step) {
    let newMonth = currentMonth + step;
    let newYear = currentYear;
    if (newMonth === -1) {
      newMonth = 11;
      newYear--;
    } else if (newMonth === 12) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  }
  
  return (
    <div>
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>

      <div className="corpo">
        <div className="esquerda_a">
          <p>
            <button>LOGIN</button>
          </p>
          <div id="Calendario">
            <div id="header"></div>
            <button className="btn" onClick={() => moveMonth(-1)}>
              &#10094; Anterior
            </button>
            <button className="btn" onClick={() => moveMonth(1)}>
              Próximo &#10095;
            </button>
            <table>
              <thead>
                <tr>
                  <th>Dom</th>
                  <th>Seg</th>
                  <th>Ter</th>
                  <th>Qua</th>
                  <th>Qui</th>
                  <th>Sex</th>
                  <th>Sáb</th>
                </tr>
              </thead>
              <tbody id="calendar-body"></tbody>
            </table>
          </div>
        </div>

        <main className="corpo_texto">
          <h2>Página do Aluno</h2>
          <div className="materia">
            <div className="prof">
              <div className="foto_prof">Foto do prof</div>
              <h3>Matemática</h3>
              <ul>
                <li>
                  <input type="checkbox" id="mat1" />
                  <label htmlFor="mat1">Funções</label>
                </li>
                <li>
                  <input type="checkbox" id="mat2" />
                  <label htmlFor="mat2">Probabilidade</label>
                </li>
                <li>
                  <input type="checkbox" id="mat3" />
                  <label htmlFor="mat3">Geometria Analítica</label>
                </li>
                <li>
                  <input type="checkbox" id="mat4" />
                  <label htmlFor="mat4">Estatística</label>
                </li>
              </ul>
              <div className="links">
                <a href="#">Aulas (link)</a>
                <a href="#">Lista de Exercícios (link)</a>
              </div>
            </div>
          </div>
          <div className="materia">
            <div className="prof">
              <div className="foto_prof">Foto do prof</div>
              <h3>Física</h3>
              <ul>
                <li>
                  <input type="checkbox" id="fis1" />
                  <label htmlFor="fis1">Mecânica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis2" />
                  <label htmlFor="fis2">Termodinâmica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis3" />
                  <label htmlFor="fis3">Óptica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis4" />
                  <label htmlFor="fis4">Eletromagnetismo</label>
                </li>
              </ul>
              <div className="links">
                <a href="#">Aulas (hiperlink)</a>
                <a href="#">Lista de Exercícios (hiperlink)</a>
              </div>
            </div>
          </div>
          <div className="materia">
            <div className="prof">
              <div className="foto_prof">Foto do prof</div>
              <h3>Química</h3>
              <ul>
                <li>
                  <input type="checkbox" id="qui1" />
                  <label htmlFor="qui1">Estequiometria</label>
                </li>
                <li>
                  <input type="checkbox" id="qui2" />
                  <label htmlFor="qui2">Reações Químicas</label>
                </li>
                <li>
                  <input type="checkbox" id="qui3" />
                  <label htmlFor="qui3">Química Orgânica</label>
                </li>
                <li>
                  <input type="checkbox" id="qui4" />
                  <label htmlFor="qui4">Eletroquímica</label>
                </li>
              </ul>
              <div className="links">
                <a href="#">Aulas (hiperlink)</a>
                <a href="#">Lista de Exercícios (hiperlink)</a>
              </div>
            </div>
          </div>
        </main>

        <div className="direita_a">
          <h2>Torne-se um Apoiador</h2>
          <button>Registre-se</button>
        </div>
      </div>
    </div>
  );
}

export default Alunos;
