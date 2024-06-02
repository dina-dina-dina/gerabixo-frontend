import "./professor.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";

function Professor() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
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
  }, [currentMonth, currentYear]); // Execute sempre que o mês ou ano mudar

  function createCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = ""; // Limpa o conteúdo existente
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
    <body>
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>
      <div className="corpo">
        <div className="esquerda">
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
          <h2>Página dos Professores</h2>
          <p>
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
   

            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto

            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus

   


          </p>
        </main>
        <div className="direita">
          <p>
            <h2>Insira Suas Aulas</h2>
            <button>OneDrive</button>
          </p>
        </div>
      </div>
    </body>
  );
}

export default Professor;
