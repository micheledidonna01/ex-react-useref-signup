import { useEffect, useRef, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
function App() {
  useEffect(() => {
    nomeRef.current.focus();
  }, []);
  // const [nome, setNome] = useState("");//non controllato
  const nomeRef =useRef();
  const [username, setUsername] = useState("");//controllato
  const [pass, setPass] = useState("");//controllato
  // const [special, setSpecial] = useState("");//non controllato
  const specialRef = useRef();
  // const [esperienza, setEsperienza] = useState(0);//non controllato
  const esperienzaRef = useRef(0);
  // const [description, setDescription] = useState("");//non controllato
  const descriptionRef = useRef("");

  const letters = "abcdefghijklmnopqrstuvwxyz".split('');
  const numbers = "0123456789".split('');
  const symbols = ("!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~\"").split('');

  const validateName = (nome) => {
    nome = nome.current.value.trim();
    const nomeArray = nome.split("");
    const areThereNumbers = nomeArray.some(char => numbers.includes(char));
    const areThereSymbols = nomeArray.some(char => symbols.includes(char));
    const areThereLetters = nomeArray.some(char => letters.includes(char));
    if ( areThereLetters && !areThereNumbers && !areThereSymbols && nome.length >= 3) {
      return true;
    }
    
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
    description = description.current.value.trim();
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

    if (!validateName(nomeRef) || !validateUsername(username) || !validatePass(pass) || specialRef === "" || esperienzaRef < 0 || !validateDescription(descriptionRef)) {
      alert("Per favore, compila il form correttamente.");
      return;
    }
    else{
      console.log(`
      Nome: ${nomeRef.current.value}
      Username: ${username}
      Password: ${pass}
      Specializzazione: ${specialRef.current.value}
      Esperienza: ${esperienzaRef.current.value}
      Descrizione: ${descriptionRef.current.value}
      `);
      // nomeRef.current.value = "";
      // setUsername("");
      // setPass("");
      // specialRef.current.value = "";
      // esperienzaRef.current.value = 0;
      // descriptionRef.current.value = "";
    }
  }

  const resetForm = e => {
    e.preventDefault();
    nomeRef.current.value = "";
    setUsername("");
    setPass("");
    specialRef.current.value = "";
    esperienzaRef.current.value = 0;
    descriptionRef.current.value = "";
    nomeRef.current.focus();
  }
  
  const goToStartForm = () => {
  // Scroll to the top of the form 
    nomeRef.current.scrollIntoView({ behavior: "smooth" });
  }
    return (
      <>

        <form onSubmit={handleSubmit} className="p-5 d-flex flex-wrap align-items-start">
          <div className="form-floating mb-3 col-6">
            <input type="text" name="nome" ref={nomeRef} className="form-control" />
            <label htmlFor="nome" className="floatingInput">Inserisci nome
            </label>
            {/* {nomeRef === "" ? "" : validateName(nomeRef) ? <div className="text-success">Nome valido</div> : <div className="text-danger">Il nome deve contenere almeno 3 caratteri, senza numeri o simboli</div>} */}
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
            <select name="special" ref={specialRef} className="form-control">
              <option value="">---</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
            <label htmlFor="special" className="floatingInput">Inserisci specializzazione
            </label>
            {/* {special === "" ? <div className="text-danger">Seleziona una specializzazione</div> : ""} */}
          </div>

          <div className="form-floating mb-3 col-2">
            <input type="number" name="esperienza" ref={esperienzaRef} className="form-control" min="1" max="5"/>
            <label htmlFor="esperienza" className="floatingInput"> esperienza anni
            </label>
            {/* {esperienzaRef < 0 ? <div className="text-danger">L'esperienza non può essere negativa</div> : ""} */}
          </div>

          <div className="form-floating mb-3 col-12">
            <textarea name="description" ref={descriptionRef} className="form-control" rows="10"></textarea>
            <label htmlFor="description" className="floatingInput">piccola descrizione
            </label>
          </div>
          {/* {descriptionRef.current.value === "" ? "" : validateDescription(descriptionRef) ? <div className="text-success">Descrizione valida</div> : <div className="text-danger">La descrizione deve essere tra 100 e 1000 caratteri</div>} */}
          
          {/* {validateDescription(descriptionRef) &&  <div className="text-danger">La descrizione deve essere tra 100 e 1000 caratteri</div>} */}
          <div className="col-12 d-flex justify-content-between">
            <button type="submit" className="btn btn-outline-primary">Invia form</button>
            <button className="btn btn-outline-secondary" onClick={resetForm}>Reset</button>
          </div>

        </form>
        <div className="d-flex justify-content-end p-5 mt-5">

        
        <i className="bi bi-arrow-up bg-primary p-3 fs-2" onClick={goToStartForm}></i>
        </div>
      </>
    )
  }

  export default App
