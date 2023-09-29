/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  //this method is default in light mode
  const [mode, setMode] = useState("light");

  //show the alert message in alert window
  const [alert, setAlert] = useState();
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    //Time out function for alert window
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212019";
      showAlert(" Dark mode enable", "succes");
      document.title = "Text Utile - Dark mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode enable", "succes");
      document.title = "Text Utile - Light mode";
    }
  };
  return (
    <>
      <BrowserRouter>

        <Navbar title="TextUtile" abouttext="About Us" home="Home" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Textform showAlert={showAlert} heading="Text Area" mode={mode} />
          <About/>
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
