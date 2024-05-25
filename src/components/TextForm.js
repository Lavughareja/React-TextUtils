import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert Upper Case", "success");
  };
  const handleLoclick = () => {
    // console.log("Lower was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert lower Case", "success");
  };
  const handleClclick = () => {
    // console.log("clear was clicked " + text);
    let newText = "";
    setText(newText);
    props.showAlert("clear ", "success");
  };
  const handleCapitalizeclick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Capitalize ", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("remove space ", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copy text", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change ");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //   text="hii lav"; //wrong method to change value
  // setText("hii lav"); //correct method to change value

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myform"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoclick}
        >
          Convert to LowerCase
        </button>

        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClclick}
        >
          Clear Text
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalizeclick}
        >
          Sentence Case
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary "
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          {text.trim() === "" ? 0.0 : text.match(/\S+/g).length} words{" "}
          {text.replace(/\s+/g, "").length} Characters
        </p>
        {/* <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p> */}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>

        <h3>Privew</h3>
        <p> {text.length > 0 ? text : "Nothing to privew!"}</p>
      </div>
    </>
  );
}
