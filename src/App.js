import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Why from "./components/Why";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Trade from "./components/Trade";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";
import Calculate from "./components/Calculate";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2500, delay: 400 });
  }, []);

  return (
    <div className="overflow-hidden">
      <Header setIsMobile={setIsMobile} />
      <Hero />
      <div
        className={`${
          isMobile ? "right-0" : "right-full"
        } fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setIsMobile={setIsMobile} />
      </div>

      <Stats />
      <Why />
      <Calculate />
      <Trade />

      <div className="h-[2000px]"></div>
    </div>
  );
};

export default App;
