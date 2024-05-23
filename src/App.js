import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    // <BrowserRouter>
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter Text to analyze "
        mode={mode}
      />
      <div className="container my-4" mode={mode}>
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* <Route
              exact
              path="/"
              element={
               
              }
            ></Route> */}
        {/* </Routes> */}
      </div>
    </>
    // {/* </BrowserRouter> */}
  );
}

export default App;
