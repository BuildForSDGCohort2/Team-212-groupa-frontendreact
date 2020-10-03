import React from "react";
import "./App.css";
import Mynavbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (

    <div className="container-fluid text-center overlay App">
      <Router>
      <Mynavbar />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
