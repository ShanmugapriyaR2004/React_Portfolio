import "./App.css";
import Connect from "./Components/Connect";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Tools from "./Components/Tools";

function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <Skills />
      <Tools />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;