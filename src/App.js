import './App.css';
import {nanoid} from 'nanoid';
import './components/students';
import Students from './components/students';

const listStudents = [
  {
    "id":nanoid(),
    "firstname":"arthur",
    "lastname":"lupine",
    "option":"mathématique",
    "sexe":"x",
    "result":72
  },
  {
    "id":nanoid(),
    "firstname":"yves",
    "lastname":"rogne",
    "option":"science",
    "sexe":"m",
    "result":25
  },
  {
    "id":nanoid(),
    "firstname":"oscar",
    "lastname":"paccio",
    "option":"lettre",
    "sexe":"m",
    "result":85
  },
  {
    "id":nanoid(),
    "firstname":"abel",
    "lastname":"aubois-dormant",
    "option":"lettre",
    "sexe":"f",
    "result":72
  },
  {
    "id":nanoid(),
    "firstname":"sandra",
    "lastname":"nicouette",
    "option":"science",
    "sexe":"f",
    "result":89
  }
];

function App() {
  return (
    <div className="App">
      <Students liste={listStudents}/>
    </div>
  );
}

export default App;
