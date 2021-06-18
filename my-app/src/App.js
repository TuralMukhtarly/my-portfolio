import './App.css';
import Contacts from './contacts/Contacts';
import Main from './main/Main';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Main} />
        <Route path="/skill" component={Contacts} />
        {/* <Main /> */}
        {/* <Skills/>
      <Projects/>
      <Contacts/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
