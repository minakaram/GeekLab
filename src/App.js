import "./App.css";
import HeroContainer from "./Components/HeroContainer/HeroContainer";
import Navbar from "./Components/Navbar/Navbar";
import ServicesBar from "./Components/ServicesBar/ServicesBar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ServicesBar />
      <HeroContainer />
    </div>
  );
}

export default App;
