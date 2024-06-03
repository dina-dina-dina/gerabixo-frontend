import "./administrador.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";

function Administrador() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedOption, setSelectedOption] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [userType, setUserType] = useState('Aluno');
  const [userEmail, setUserEmail] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
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

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("Post enviado:", postTitle, postText);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário cadastrado:", userType, userEmail);
  };

  const handleQrCodeSubmit = (e) => {
    e.preventDefault();
    console.log("QR Code inserido:", qrCode);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log("Evento adicionado:", eventTitle, eventDate);
  };

  return (
    <div className="administrador">
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>

      <div className="corpo">
        <div className="esquerda">  
            <p><button>LOGIN</button></p>

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

        <main>
        <h2>Administração</h2>
          <div className="corpo_texto">
              <div className="form-section">
                <label>
                  Selecione uma opção:
                  <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="nova-publicacao">Nova Publicação</option>
                    <option value="novo-cadastro">Novo Cadastro</option>
                    <option value="inserir-qr-code">Inserir QR Code</option>
                    <option value="adicionar-evento">Adicionar Evento ao Calendário</option>
                  </select>
                </label>
                {selectedOption === "nova-publicacao" && (
                  <div className="form-section">
                    <h3>Postar Notícia</h3>
                    <form onSubmit={handlePostSubmit}>
                      <label>
                        Título:
                        <input type="text" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
                      </label>
                      <label>
                        Texto:
                        <textarea value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
                      </label>
                      <button type="submit">Enviar Post</button>
                    </form>
                  </div>
                )}
                {selectedOption === "novo-cadastro" && (
                  <div className="form-section">
                    <h3>Cadastrar Usuário</h3>
                    <form onSubmit={handleUserSubmit}>
                      <label>
                        Tipo de Usuário:
                        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                          <option value="Aluno">Aluno</option>
                          <option value="Professor">Professor</option>
                        </select>
                      </label>
                      <label>
                        Email:
                        <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                      </label>
                      <button type="submit">Cadastrar</button>
                    </form>
                  </div>
                )}
                {selectedOption === "inserir-qr-code" && (
                  <div className="form-section">
                    <h3>Inserir QR Code</h3>
                    <form onSubmit={handleQrCodeSubmit}>
                      <label>
                        QR Code:
                        <input type="text" value={qrCode} onChange={(e) => setQrCode(e.target.value)} />
                      </label>
                      <button type="submit">Inserir QR Code</button>
                    </form>
                  </div>
                )}
                {selectedOption === "adicionar-evento" && (
                  <div className="form-section">
                    <h3>Adicionar Evento ao Calendário</h3>
                    <form onSubmit={handleEventSubmit}>
                      <label>
                        Título do Evento:
                        <input type="text" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
                      </label>
                      <label>
                        Data do Evento:
                        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
                      </label>
                      <button type="submit">Adicionar Evento</button>
                    </form>
                  </div>
                )}
              </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Administrador;

