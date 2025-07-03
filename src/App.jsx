import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [special, setSpecial] = useState("");
  const [esperienza, setEsperienza] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if( nome.length < 3 || username.length < 3 || pass.length < 8 || special === "" || esperienza < 0) {
      alert("Compila correttamente il form");
      return;
    }
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
  return (
    <>

      <form onSubmit={handleSubmit} className="p-5 d-flex flex-wrap ">
        <div className="form-floating mb-3 col-6">
          <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} className="form-control" />
          <label htmlFor="nome" className="floatingInput">Inserisci nome
          </label>
          {nome.length < 3 && nome.length > 0 ? <div className="text-danger">Il nome deve essere lungo almeno 3 caratteri</div> : ""}
        </div>
        <div className="form-floating mb-3 col-6">
          <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} className="form-control" />
          <label htmlFor="username" className="floatingInput">Inserisci username
          </label>
          {username.length < 3 && username.length > 0 ? <div className="text-danger">Lo username deve essere lungo almeno 3 caratteri</div> : ""}
        </div>
        <div className="form-floating mb-3 col-6">
          <input type="password" name="pass" value={pass} onChange={e => setPass(e.target.value)} className="form-control" />
          <label htmlFor="pass" className="floatingInput">Inserisci password
          </label>
          {pass.length < 8 && pass.length > 0 ? <div className="text-danger">La password deve essere lunga almeno 8 caratteri</div> : ""}
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
        <div className="col-12 d-flex justify-content-center">
        <button type="submit" className="btn btn-outline-primary">Invia form</button>
        </div>
      </form>
    </>
  )
}

export default App
