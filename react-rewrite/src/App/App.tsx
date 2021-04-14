import './App.scss';
import './Components/header'
import { Header } from './Components/header';
import { MainPhoto } from './Sections/FrontPhoto'
import { About, Awards } from './Sections/Sections'
function App() {
  return (
    <div className="App">
      <Header/>
      <MainPhoto/>
      <About/>
      <Awards/>
    </div>
  );
}

export default App;
