import './App.css';
import './Components/header'
import { Header } from './Components/header';
import { MainPhoto } from './Sections/FrontPhoto'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPhoto></MainPhoto>
      <section id="AboutSection"></section>
    </div>
  );
}

export default App;
