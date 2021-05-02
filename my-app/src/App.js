import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
