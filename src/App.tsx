// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Headers from "./layouts/Headers";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import EncodePage from "./pages/EncodePage";
import DecodePage from "./pages/DecodePage";
import AppContext from "./services/AppContext";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

const App = () => {
  // const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState("/"); 

  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{activeTab, setActiveTab}}>
          <Headers />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encode" element={<EncodePage />} />
            <Route path="/decode" element={<DecodePage />} />
          </Routes>
          <Footer />
        </AppContext.Provider>
      </BrowserRouter>
    </>
  )
};

export default App;
