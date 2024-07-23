import "./alunos.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";
import Mascotes from "../imagens/GeraBixo1.png";

function Alunos() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [visibleSubjects, setVisibleSubjects] = useState({});

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

  function toggleVisibility(subject) {
    setVisibleSubjects((prev) => ({
      ...prev,
      [subject]: !prev[subject],
    }));
  }

  function renderMateria(titulo, topicos) {
    return (
      <div className="materia">
        <div className="foto_prof">Foto do prof</div>
        <h3
          onClick={() => toggleVisibility(titulo)}
          style={{ cursor: "pointer", textAlign: "left" }}
        >
          {titulo} {visibleSubjects[titulo] ? "▲" : "▼"}
        </h3>
        {visibleSubjects[titulo] && (
          <div className="materia-conteudo">
            <div className="prof">
              <ul>
                {topicos.map((topico) => (
                  <li key={topico.id}>
                    <input type="checkbox" id={topico.id} />
                    <label htmlFor={topico.id}>{topico.label}</label>
                  </li>
                ))}
              </ul>
              <div className="links">
                <a href="#">Aulas (link)</a>
                <a href="#">Lista de Exercícios (link)</a>
              </div>
            </div>
          </div>
        )}
        <img className="GeraBixo1" src={Mascotes} alt="mascotes gera"></img>
      </div>
    );
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
          {renderMateria("Matemática", [
            { id: "mat1", label: "Funções" },
            { id: "mat2", label: "Probabilidade" },
            { id: "mat3", label: "Geometria Analítica" },
            { id: "mat4", label: "Estatística" },
          ])}
          {renderMateria("Física", [
            { id: "fis1", label: "Mecânica" },
            { id: "fis2", label: "Termodinâmica" },
            { id: "fis3", label: "Óptica" },
            { id: "fis4", label: "Eletromagnetismo" },
          ])}
          {renderMateria("Química", [
            { id: "qui1", label: "Estequiometria" },
            { id: "qui2", label: "Reações Químicas" },
            { id: "qui3", label: "Química Orgânica" },
            { id: "qui4", label: "Eletroquímica" },
          ])}
          {renderMateria("Gramática", [])}
          {renderMateria("Física Elétrica", [])}
          {renderMateria("Física Mecânica", [])}
          {renderMateria("Matemática Fundamental", [])}
          {renderMateria("Química Geral", [])}
          {renderMateria("Geometria", [])}
          {renderMateria("Redação", [])}
          {renderMateria("Biologia Celular", [])}
          {renderMateria("Inglês", [])}
          {renderMateria("Literatura", [])}
          {renderMateria("Físico Química", [])}
          {renderMateria("Filosofia", [])}
          {renderMateria("História Geral", [])}
          {renderMateria("Geografia Geral", [])}
          {renderMateria("Álgebra", [])}
          {renderMateria("Biologia Animal", [])}
          {renderMateria("Sociologia", [])}
          {renderMateria("Biologia Botânica", [])}
          {renderMateria("Física Óptica", [])}
          {renderMateria("Geografia do Brasil", [])}
          {renderMateria("História do Brasil", [])}
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
