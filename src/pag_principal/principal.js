import "./principal.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";

function Principal() {
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

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="principal">
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>
      <div className="corpo">
        <div className="esquerda_p">
          <p>
            <button onClick={handleLoginClick}>LOGIN</button>
          </p>

          {showLogin && (
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <label>
                  Usuário:
                  <input type="text" name="username" />
                </label>
                <label>
                  Senha:
                  <input type="password" name="password" />
                </label>
                <button type="submit">Entrar</button>
              </form>
              <p>
                Nova conta? <button className="botao_senha" onClick={handleRegisterClick}>Troque Sua Senha!</button>
              </p>
            </div>
          )}

          {showRegister && (
            <div className="register-form">
              <h2>Troque Sua Senha</h2>
              <form>
                <label>
                  Nome:
                  <input type="text" name="name" />
                </label>
                <label>
                  Usuário:
                  <input type="text" name="username" />
                </label>
                <label>
                  Nova Senha:
                  <input type="password" name="password" />
                </label>
                <button type="submit">Concluir</button>
              </form>
            </div>
          )}

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
          
          <p>
          <h1>Tópico 1</h1>
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus

            <br /><br />
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            <br /><br />
            <img className="Logo" src={Logo} alt="logo gerabixo"></img>


            <br /><br />
            <h1>Tópico 2</h1>
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus

            <br /><br />
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus
            perspiciatis. Quidem aperiam error alias vero repudiandae architecto
            texto para o geranews Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis nisi neque tempora delectus

            <br /><br />

            <img className="Logo" src={Logo} alt="logo gerabixo"></img>
          </p>
        </main>
        <div className="direita_p">
          <h2>Torne-se um Apoiador</h2>
          <a href="#"><button>Registre-se</button></a> 
        </div>
      </div>
    </div>
  );
}

export default Principal;
