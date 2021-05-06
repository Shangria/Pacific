import './styles/App.scss';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import InformationAdventure  from "../src/Components/InformationAdventure/InformationAdventure";
import Destination  from "../src/Components/Destination/Destination";

function App() {

  return (
    <>
        <Header/>
        <Hero/>
        <InformationAdventure/>
        <Destination/>
      </>
  );
}

export default App;
