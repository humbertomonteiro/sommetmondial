import Home from "./pages/Home";
import ArcoTriunfo from "./components/ArcoTriunfo";
import Ingresso from "./components/Ingresso";
import Patrocinadores from "./components/Patrocinadores";
import { arrayPatrocinadores } from "./assets/data/patrocinadores";
import EnfrentandoDesafios from "./components/EnfrentandoDesafios";
import PorqueAgora from "./components/PorqueAgora";
import Potencial from "./components/Potencial";
import Engajamento from "./components/Engajamento";
import Impacto from "./components/Impacto";
import JunteSe from "./components/JunteSe";
import Versa from "./components/Versa";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div>
      <Home />
      <ArcoTriunfo />
      <Ingresso />
      <Patrocinadores array={arrayPatrocinadores} />
      <EnfrentandoDesafios />
      <PorqueAgora />
      <Potencial />
      <Engajamento />
      <Impacto />
      <JunteSe />
      <Versa />
      <div className="background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
    </div>
  );
}

export default App;
