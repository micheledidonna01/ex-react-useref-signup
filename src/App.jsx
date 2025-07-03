import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [special, setSpecial] = useState("");
  const [esperienza, setEsperienza] = useState(0);
  const [description, setDescription] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz".split('');
  const numbers = "0123456789".split('');
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\" + ",.<>?/`~" + '"'.split('');

  const validateName = (nome) => {
    const nomeArray = nome.split("");
    const areThereNumbers = nomeArray.some(char => numbers.includes(char));
    const areThereSymbols = nomeArray.some(char => symbols.includes(char));
    const areThereLetters = nomeArray.some(char => letters.includes(char));
    if ( areThereLetters && !areThereNumbers && !areThereSymbols && nome.length >= 3) {
      return true;
    }
    return false;
  }

  const validatePass = (pass) => {
    const passArray = pass.split("");
    const areANumber = passArray.some(char => numbers.includes(char));
    const areASymbol = passArray.some(char => symbols.includes(char));
    const areALetter = passArray.some(char => letters.includes(char));
    if (pass.length >= 8 && areASymbol && areANumber && areALetter) {
      return true;
    }
    return false;
  }


  const validateDescription = (description) => {
    if (description.length >= 100 && description.length <= 1000) {
      return true;
    }
    return false;
  }

  const validateUsername = (username) => {
    const usernameArray = username.split("");
    const areThereSymbols = usernameArray.some(char => symbols.includes(char));
    const areThereLetters = usernameArray.some(char => letters.includes(char));
    const areThereNumbers = usernameArray.some(char => numbers.includes(char));
    if (username.length >= 6 && !areThereSymbols && areThereLetters && areThereNumbers) {
      return true;
    }
    return false;
  }


  const handleSubmit = e => {
    e.preventDefault();

    if (!validateName(nome) || !validateUsername(username) || !validatePass(pass) || special === "" || esperienza < 0 || !validateDescription(description)) {
      alert("Per favore, compila il form correttamente.");
      return;
    }
    else{
      console.log(`
      Nome: ${nome}
      Username: ${username}
      Password: ${pass}
      Specializzazione: ${special}
      Esperienza: ${esperienza}
      Descrizione: ${description}
      `);
      setNome("");
      setUsername("");
      setPass("");
      setSpecial("");
      setEsperienza(0);
      setDescription("");
    }
  }

    return (
      <>

        <form onSubmit={handleSubmit} className="p-5 d-flex flex-wrap ">
          <div className="form-floating mb-3 col-6">
            <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} className="form-control" />
            <label htmlFor="nome" className="floatingInput">Inserisci nome
            </label>
            {nome === "" ? "" : validateName(nome) ? <div className="text-success">Nome valido</div> : <div className="text-danger">Il nome deve contenere almeno 3 caratteri, senza numeri o simboli</div>}
            {/* {validateName(nome) ? <div className="text-success">Nome valido</div> : <div className="text-danger">Il nome deve contenere almeno 6 caratteri, senza numeri o simboli</div>} */}
          </div>

          <div className="form-floating mb-3 col-6">
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
            <label htmlFor="username" className="floatingInput">Inserisci username
            </label>
            {username === "" ? "" : validateUsername(username) ? <div className="text-success">Username valido</div> : <div className="text-danger">L'username deve contenere almeno 6 caratteri, senza simboli</div>}
          </div>

          <div className="form-floating mb-3 col-6">
            <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} className="form-control" />
            <label htmlFor="pass" className="floatingInput">Inserisci password
            </label>
            {pass === "" ? "" : validatePass(pass) ? <div className="text-success">Password valida</div> : <div className="text-danger">La password deve contenere almeno 8 caratteri, con lettere, numeri e simboli</div>}
          </div>

          <div className="form-floating mb-3 col-4">
            <select name="special" value={special} onChange={e => setSpecial(e.target.value)} className="form-control">
              <option value="">---</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
            <label htmlFor="special" className="floatingInput">Inserisci specializzazione
            </label>
            {special === "" ? <div className="text-danger">Seleziona una specializzazione</div> : ""}
          </div>

          <div className="form-floating mb-3 col-2">
            <input type="number" name="esperienza" value={esperienza} onChange={e => setEsperienza(e.target.value)} className="form-control" />
            <label htmlFor="esperienza" className="floatingInput"> esperienza anni
            </label>
            {esperienza < 0 ? <div className="text-danger">L'esperienza non può essere negativa</div> : ""}
          </div>

          <div className="form-floating mb-3 col-12">
            <textarea name="description" id="" value={description} onChange={e => setDescription(e.target.value)} className="form-control"></textarea>
            <label htmlFor="description" className="floatingInput">piccola descrizione
            </label>
          </div>
          {description === "" ? "" : validateDescription(description) ? <div className="text-success">Descrizione valida</div> : <div className="text-danger">La descrizione deve essere tra 100 e 1000 caratteri</div>}

          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary">Invia form</button>
          </div>

        </form>
      </>
    )
  }

  export default App
