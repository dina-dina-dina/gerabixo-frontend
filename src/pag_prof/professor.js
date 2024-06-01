import "./style.css"
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

function Professor(){
  return(
    
  <body>
  <header>
    <img src="../imagens/logo_gera.png" alt="Logo GeraBixo" />
    <h1>GERABIXO</h1>
    <div class="spacer"></div>
  </header>

  <div class="corpo">
    <div class="esquerda">
      <p><button>LOGIN</button></p>

      <div id="Calendario">
        <div id="header"></div>
        <button class="btn" onclick={()=>moveMonth(-1)}>&#10094; Anterior</button>
        <button class="btn" onclick={()=>moveMonth(1)}>Próximo &#10095;</button>
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
      <h2>Página dos Professores</h2>
      <p>
        texto para a pag dos profs 
        Lorem ipsum dolor sit amet consectetur adipisicing
      </p>
    </main>
    <div class="direita">
      <p>
        <h2>Torne-se um Apoiador</h2>
        <button>Registre-se</button>
      </p>
    </div>
  </div>
</body>

  )
}

export default Professor