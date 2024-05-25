import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  // };

  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);
    // console.log(cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar
            title="TextUtils"
            aboutText="About"
            mode={mode}
            togglemode={toggleMode}
          />
          <Alert alert={alert} />
          <div className="container my-4" mode={mode}>
            <Routes>
              <Route
                exact
                path="/about"
                element={<About mode={mode} />}
              ></Route>
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Try TextUtils - word counter, character counter, remove extra spaces "
                    mode={mode}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
