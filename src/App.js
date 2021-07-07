import './App.css';
import './components/students';
import Students from './components/students';

const listStudents = [
  {
    "firstname":"arthur",
    "lastname":"lupine",
    "option":"mathématique",
    "sexe":"x",
    "result":72
  },
  {
    "firstname":"yves",
    "lastname":"rogne",
    "option":"science",
    "sexe":"m",
    "result":25
  },
  {
    "firstname":"oscar",
    "lastname":"paccio",
    "option":"lettre",
    "sexe":"m",
    "result":85
  },
  {
    "firstname":"abel",
    "lastname":"aubois-dormant",
    "option":"lettre",
    "sexe":"f",
    "result":72
  },
  {
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
