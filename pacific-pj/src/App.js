import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './styles/App.scss';
import { HeaderData } from "../src/Components/Header/HeaderData";

function App() {

  return (
    <>
        <Header HeaderData={HeaderData}/>
        <Hero/>
      </>
  );
}

export default App;
