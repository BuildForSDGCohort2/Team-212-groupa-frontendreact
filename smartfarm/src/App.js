import React from "react";
import "./App.css";
import Mynavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    
      <div className="container-fluid text-center overlay App">
        <Mynavbar />
        <Footer />
      </div>

  );
}

export default App;
