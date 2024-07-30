import "./administrador.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState, useEffect } from "react";

function Administrador() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedOption, setSelectedOption] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [userType, setUserType] = useState('Aluno');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userTurno, setUserTurno] = useState('Manhã');
  const [userMateria, setUserMateria] = useState('Matemática');
  const [userPhoto, setUserPhoto] = useState(null);
  const [qrCode, setQrCode] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [editUserEmail, setEditUserEmail] = useState('');
  const [editUser, setEditUser] = useState(null);

  const subjects = [
    "Matemática", "Física", "Química", "Gramática", "Física Elétrica", 
    "Física Mecânica", "Matemática Fundamental", "Química Geral", 
    "Geometria", "Redação", "Biologia Celular", "Inglês", "Literatura", 
    "Físico Química", "Filosofia", "História Geral", "Geografia Geral", 
    "Álgebra", "Biologia Animal", "Sociologia", "Biologia Botânica", 
    "Física Óptica", "Geografia do Brasil", "História do Brasil"
  ];

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  useEffect(() => {
    createCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear, events]);

  function createCalendar(month, year) {
    let firstDay = new Date(year, month, 1).getDay();
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
          let event = events.find(e => {
            const eventDate = new Date(e.date);
            return eventDate.getUTCDate() === date && eventDate.getUTCMonth() === month && eventDate.getUTCFullYear() === year;
          });
          if (event) {
            cell.style.backgroundColor = '#FFDE59';
          }
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
    const newPost = { title: postTitle, text: postText, image: postImage };
    setPosts([...posts, newPost]);
    setPostTitle('');
    setPostText('');
    setPostImage(null);
    console.log("Post enviado:", newPost);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const newUser = { 
      type: userType, 
      email: userEmail, 
      name: userName, 
      turno: userTurno, 
      materia: userMateria, 
      photo: userPhoto 
    };
    setUsers([...users, newUser]);
    setUserType('Aluno');
    setUserEmail('');
    setUserName('');
    setUserTurno('Manhã');
    setUserMateria('Matemática');
    setUserPhoto(null);
    console.log("Usuário cadastrado:", newUser);
  };

  const handleQrCodeSubmit = (e) => {
    e.preventDefault();
    console.log("QR Code inserido:", qrCode);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = { title: eventTitle, date: eventDate };
    setEvents([...events, newEvent]);
    setEventTitle('');
    setEventDate('');
    console.log("Evento adicionado:", newEvent);
  };

  const handleRemovePost = (title) => {
    setPosts(posts.filter(post => post.title !== title));
  };

  const handleRemoveUser = (email) => {
    setUsers(users.filter(user => user.email !== email));
  };

  const handleRemoveEvent = (title) => {
    setEvents(events.filter(event => event.title !== title));
  };

  const handleEditUserSubmit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user => 
      user.email === editUserEmail ? { ...user, type: userType, email: userEmail, name: userName, turno: userTurno, materia: userMateria, photo: userPhoto } : user
    );
    setUsers(updatedUsers);
    setEditUserEmail('');
    setEditUser(null);
    setUserType('Aluno');
    setUserEmail('');
    setUserName('');
    setUserTurno('Manhã');
    setUserMateria('Matemática');
    setUserPhoto(null);
    console.log("Usuário editado:", updatedUsers.find(user => user.email === editUserEmail));
  };

  useEffect(() => {
    const userToEdit = users.find(user => user.email === editUserEmail);
    if (userToEdit) {
      setEditUser(userToEdit);
      setUserType(userToEdit.type);
      setUserEmail(userToEdit.email);
      setUserName(userToEdit.name);
      setUserTurno(userToEdit.turno);
      setUserMateria(userToEdit.materia);
      setUserPhoto(userToEdit.photo);
    }
  }, [editUserEmail]);

  return (
    <div className="administrador">
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>

      <div className="corpo">
        <div className="esquerda_adm">
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
            <div className="event-list">
              <h3>Eventos do Mês</h3>
              <ul>
                {events
                  .filter(event => new Date(event.date).getUTCMonth() === currentMonth && new Date(event.date).getUTCFullYear() === currentYear)
                  .map((event, index) => (
                    <li key={index}>
                      {new Date(event.date).getUTCDate()} - {event.title}
                    </li>
                  ))}
              </ul>
            </div>
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
                  <option value="remover-publicacao">Remover Publicação</option>
                  <option value="novo-cadastro">Novo Cadastro</option>
                  <option value="remover-cadastro">Remover Cadastro</option>
                  <option value="editar-cadastro">Editar Cadastro</option>
                  <option value="inserir-qr-code">Inserir QR Code</option>
                  <option value="adicionar-evento">Adicionar Evento ao Calendário</option>
                  <option value="remover-evento">Remover Evento</option>
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
                    <label>
                      Imagem:
                      <input type="file" onChange={(e) => setPostImage(e.target.files[0])} />
                    </label>
                    <button type="submit">Enviar Post</button>
                  </form>
                </div>
              )}

              {selectedOption === "remover-publicacao" && (
                <div className="form-section">
                  <h3>Remover Publicação</h3>
                  <form onSubmit={(e) => { e.preventDefault(); handleRemovePost(postTitle); }}>
                    <label>
                      Título da Publicação:
                      <select value={postTitle} onChange={(e) => setPostTitle(e.target.value)}>
                        <option value="">Selecione</option>
                        {posts.map((post, index) => (
                          <option key={index} value={post.title}>{post.title}</option>
                        ))}
                      </select>
                    </label>
                    <button type="submit">Remover Publicação</button>
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
                    {userType === "Aluno" && (
                      <>
                        <label>
                          Email:
                          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </label>
                        <button type="submit">Cadastrar</button>
                      </>
                    )}
                    {userType === "Professor" && (
                      <>
                        <label>
                          Nome:
                          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </label>
                        <label>
                          Email:
                          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </label>
                        <label>
                          Turno:
                          <select value={userTurno} onChange={(e) => setUserTurno(e.target.value)}>
                            <option value="Manhã">Manhã</option>
                            <option value="Tarde">Tarde</option>
                          </select>
                        </label>
                        <label>
                          Matéria:
                          <select value={userMateria} onChange={(e) => setUserMateria(e.target.value)}>
                            {subjects.map(subject => (
                              <option key={subject} value={subject}>{subject}</option>
                            ))}
                          </select>
                        </label>
                        <label>
                          Foto:
                          <input type="file" onChange={(e) => setUserPhoto(e.target.files[0])} />
                        </label>
                        <button type="submit">Cadastrar</button>
                      </>
                    )}
                  </form>
                </div>
              )}

              {selectedOption === "remover-cadastro" && (
                <div className="form-section">
                  <h3>Remover Cadastro</h3>
                  <form onSubmit={(e) => { e.preventDefault(); handleRemoveUser(userEmail); }}>
                    <label>
                      Email do Usuário:
                      <select value={userEmail} onChange={(e) => setUserEmail(e.target.value)}>
                        <option value="">Selecione</option>
                        {users.map((user, index) => (
                          <option key={index} value={user.email}>{user.email} - {user.type}</option>
                        ))}
                      </select>
                    </label>
                    <button type="submit">Remover Cadastro</button>
                  </form>
                </div>
              )}

              {selectedOption === "editar-cadastro" && (
                <div className="form-section">
                  <h3>Editar Cadastro</h3>
                  <form onSubmit={handleEditUserSubmit}>
                    <label>
                      Email do Usuário:
                      <select value={editUserEmail} onChange={(e) => setEditUserEmail(e.target.value)}>
                        <option value="">Selecione</option>
                        {users.map((user, index) => (
                          <option key={index} value={user.email}>{user.email} - {user.type}</option>
                        ))}
                      </select>
                    </label>
                    {editUser && (
                      <>
                        <label>
                          Tipo de Usuário:
                          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                            <option value="Aluno">Aluno</option>
                            <option value="Professor">Professor</option>
                          </select>
                        </label>
                        {userType === "Aluno" && (
                          <>
                            <label>
                              Email:
                              <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            </label>
                            <button type="submit">Salvar Alterações</button>
                          </>
                        )}
                        {userType === "Professor" && (
                          <>
                            <label>
                              Nome:
                              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                            </label>
                            <label>
                              Email:
                              <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                            </label>
                            <label>
                              Turno:
                              <select value={userTurno} onChange={(e) => setUserTurno(e.target.value)}>
                                <option value="Manhã">Manhã</option>
                                <option value="Tarde">Tarde</option>
                              </select>
                            </label>
                            <label>
                              Matéria:
                              <select value={userMateria} onChange={(e) => setUserMateria(e.target.value)}>
                                {subjects.map(subject => (
                                  <option key={subject} value={subject}>{subject}</option>
                                ))}
                              </select>
                            </label>
                            <label>
                              Foto:
                              <input type="file" onChange={(e) => setUserPhoto(e.target.files[0])} />
                            </label>
                            <button type="submit">Salvar Alterações</button>
                          </>
                        )}
                      </>
                    )}
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

              {selectedOption === "remover-evento" && (
                <div className="form-section">
                  <h3>Remover Evento</h3>
                  <form onSubmit={(e) => { e.preventDefault(); handleRemoveEvent(eventTitle); }}>
                    <label>
                      Título do Evento:
                      <select value={eventTitle} onChange={(e) => setEventTitle(e.target.value)}>
                        <option value="">Selecione</option>
                        {events.map((event, index) => (
                          <option key={index} value={event.title}>{event.title}</option>
                        ))}
                      </select>
                    </label>
                    <button type="submit">Remover Evento</button>
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
