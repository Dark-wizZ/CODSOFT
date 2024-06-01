import './App.scss';
import Footer from './comp/Footer';
import Intro from './comp/Intro';
import Projects from './comp/Projects';
import Skills from './comp/Skills';

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
} 

export default App;
