import './App.css';
import Contacts from './contacts/Contacts';
import Main from './main/Main';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
