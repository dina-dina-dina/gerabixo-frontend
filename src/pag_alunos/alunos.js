import "./style.css";
import React from "react";

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
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

function createCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let tbl = document.getElementById("calendar-body");
  let date = 1;
  tbl.innerHTML = "";
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
  document.getElementById("header").innerHTML = monthNames[month] + " " + year;
}

function moveMonth(step) {
  currentMonth = currentMonth + step;
  if (currentMonth === -1) {
    currentMonth = 11;
    currentYear--;
  } else if (currentMonth === 12) {
    currentMonth = 0;
    currentYear++;
  }
  createCalendar(currentMonth, currentYear);
}

createCalendar(currentMonth, currentYear);

function Alunos() {
  return (
    <body>
      <header>
        <img src="../imagens/logo_gera.png" alt="Logo GeraBixo" />
        <h1>GERABIXO</h1>
        <div class="spacer"></div>
      </header>

      <div class="corpo">
        <div class="esquerda">
          <p>
            <button>Login (Professor e Aluno)</button>
          </p>
          <div id="Calendario">
            <div id="header"></div>
            <button class="btn" onclick="moveMonth(-1)">
              &#10094; Anterior
            </button>
            <button class="btn" onclick="moveMonth(1)">
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

        <main class="corpo_texto">
          <h2>Página do Aluno</h2>
          <div class="materia">
            <div class="prof">
              <div class="foto_prof">Foto do prof</div>
              <h3>Matemática</h3>
              <ul>
                <li>
                  <input type="checkbox" id="mat1" />
                  <label for="mat1">Funções</label>
                </li>
                <li>
                  <input type="checkbox" id="mat2" />
                  <label for="mat2">Probabilidade</label>
                </li>
                <li>
                  <input type="checkbox" id="mat3" />
                  <label for="mat3">Geometria Analítica</label>
                </li>
                <li>
                  <input type="checkbox" id="mat4" />
                  <label for="mat4">Estatística</label>
                </li>
              </ul>
              <div class="links">
                <a href="#">Aulas (link)</a>
                <a href="#">Lista de Exercícios (link)</a>
              </div>
            </div>
          </div>
          <div class="materia">
            <div class="prof">
              <div class="foto_prof">Foto do prof</div>
              <h3>Física</h3>
              <ul>
                <li>
                  <input type="checkbox" id="fis1" />
                  <label for="fis1">Mecânica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis2" />
                  <label for="fis2">Termodinâmica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis3" />
                  <label for="fis3">Óptica</label>
                </li>
                <li>
                  <input type="checkbox" id="fis4" />
                  <label for="fis4">Eletromagnetismo</label>
                </li>
              </ul>
              <div class="links">
                <a href="#">Aulas (hiperlink)</a>
                <a href="#">Lista de Exercícios (hiperlink)</a>
              </div>
            </div>
          </div>
          <div class="materia">
            <div class="prof">
              <div class="foto_prof">Foto do prof</div>
              <h3>Química</h3>
              <ul>
                <li>
                  <input type="checkbox" id="qui1" />
                  <label for="qui1">Estequiometria</label>
                </li>
                <li>
                  <input type="checkbox" id="qui2" />
                  <label for="qui2">Reações Químicas</label>
                </li>
                <li>
                  <input type="checkbox" id="qui3" />
                  <label for="qui3">Química Orgânica</label>
                </li>
                <li>
                  <input type="checkbox" id="qui4" />
                  <label for="qui4">Eletroquímica</label>
                </li>
              </ul>
              <div class="links">
                <a href="#">Aulas (hiperlink)</a>
                <a href="#">Lista de Exercícios (hiperlink)</a>
              </div>
            </div>
          </div>
        </main>

        <div class="direita">
          <h2>Torne-se um Apoiador</h2>
          <button>Registre-se</button>
        </div>
      </div>
    </body>
  );
}

export default Alunos;
