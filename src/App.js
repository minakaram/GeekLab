import React, { useState, useEffect } from "react";
import "./App.css";
import HeroContainer from "./Components/HeroContainer/HeroContainer";
import Navbar from "./Components/Navbar/Navbar";
import ServicesBar from "./Components/ServicesBar/ServicesBar";
import up from "./up-arrow.png";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const shouldTranslate = scrollPosition > 150;

  return (
    <div className="App">
      <Navbar />
      <ServicesBar />
      <HeroContainer />
      <div
        className={`scrolling ${shouldTranslate ? "" : "translate"}`}
        onClick={handleScrollToTop}
      >
        <img src={up} alt="Scroll to top" />
      </div>
    </div>
  );
}

export default App;