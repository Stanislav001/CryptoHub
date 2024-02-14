import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import NavMobile from "./components/NavMobile";

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
    </div>
  );
};

export default App;
