import "./professor.css";
import Logo from "../imagens/logo_gera.png";
import React, { useState } from "react";

function Professor() {
  const [selectedOption, setSelectedOption] = useState('aulas');
  const [classLink, setClassLink] = useState('');
  const [classFile, setClassFile] = useState(null);
  const [exerciseLink, setExerciseLink] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState('Nome do Professor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleClassSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'aulas') {
      console.log("Aula submetida:", classLink, classFile);
    } else if (selectedOption === 'exercicios') {
      console.log("Lista de exercícios submetida:", exerciseLink);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    console.log("Dados atualizados:", name, email, password, photo);
    setIsEditModalOpen(false);
  };

  return (
    <div className="professor">
      <header>
        <img className="Logo" src={Logo} alt="logo gerabixo"></img>
        <h1>GERABIXO</h1>
        <div className="spacer"></div>
      </header>

      <div className="corpo">
        <main>
          <div className="profile-header">
            <img className="profile-pic" src={photo ? URL.createObjectURL(photo) : "https://via.placeholder.com/150"} alt="Foto do Professor" />
            <h2>Olá, {name}</h2>
          </div>
          <div className="corpo_texto">
            <div className="form-section">
              <form onSubmit={handleClassSubmit}>
                <label>
                  Selecione uma opção:
                  <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="aulas">Aulas</option>
                    <option value="exercicios">Lista de Exercícios</option>
                  </select>
                </label>
                {selectedOption === 'aulas' && (
                  <>
                    <label>
                      Link da Aula:
                      <input type="text" value={classLink} onChange={(e) => setClassLink(e.target.value)} />
                    </label>
                    <label>
                      Ou faça upload de um arquivo:
                      <input type="file" onChange={(e) => setClassFile(e.target.files[0])} />
                    </label>
                  </>
                )}
                {selectedOption === 'exercicios' && (
                  <label>
                    Link da Lista de Exercícios:
                    <input type="text" value={exerciseLink} onChange={(e) => setExerciseLink(e.target.value)} />
                  </label>
                )}
                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
          <button className="edit-button" onClick={() => setIsEditModalOpen(true)}>Edite seus dados</button>
        </main>
      </div>

      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edite seus dados</h2>
            <form onSubmit={handleEditSubmit}>
              <label>
                Nome:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                Senha:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label>
                Foto:
                <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
              </label>
              <button type="submit">Salvar</button>
              <button type="button" onClick={() => setIsEditModalOpen(false)}>Cancelar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Professor;