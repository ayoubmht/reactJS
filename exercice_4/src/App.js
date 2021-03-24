import {faReact} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function App() {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        Bootstrap est installé et il fonctionne !
      </div>
      <p>Est ce que FontAwesome fonctionne ?</p>
      <FontAwesomeIcon icon={faReact}/>
      <p>Oui FontAwesome fonctionne !</p>
    </div>
  );
}

export default App;