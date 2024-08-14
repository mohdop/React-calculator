import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClickButton = (value: string) => {
    setDisplay(display + value);
  };
  const handleClear = () => {
    setDisplay("");
  };
  const handleEqual = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };
  return (
    <div className="calculator card">
      <input
        type="text"
        className="calculator-screen z-depth-1"
        value={display}
        readOnly
      />

      <div className="calculator-keys">
        <button
          type="button"
          data-mdb-button-init
          className="operator btn btn-info"
          value="+"
          onClick={() => handleClickButton("+")}
        >
          +
        </button>
        <button
          type="button"
          data-mdb-button-init
          className="operator btn btn-info"
          value="-"
          onClick={() => handleClickButton("-")}
        >
          -
        </button>
        <button
          type="button"
          data-mdb-button-init
          className="operator btn btn-info"
          value="*"
          onClick={() => handleClickButton("*")}
        >
          &times;
        </button>
        <button
          type="button"
          data-mdb-button-init
          className="operator btn btn-info"
          value="/"
          onClick={() => handleClickButton("/")}
        >
          &divide;
        </button>

        <button
          type="button"
          data-mdb-button-init
          value="7"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("7")}
        >
          7
        </button>
        <button
          type="button"
          data-mdb-button-init
          value="8"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("8")}
        >
          8
        </button>
        <button
          type="button"
          data-mdb-button-init
          value="9"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("9")}
        >
          9
        </button>

        <button
          type="button"
          data-mdb-button-init
          value="4"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("4")}
        >
          4
        </button>
        <button
          type="button"
          data-mdb-button-init
          value="5"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("5")}
        >
          5
        </button>
        <button
          type="button"
          data-mdb-button-init
          value="6"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("6")}
        >
          6
        </button>

        <button
          type="button"
          data-mdb-button-init
          value="1"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("1")}
        >
          1
        </button>
        <button
          type="button"
          data-mdb-button-init
          value="2"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("2")}
        >
          2
        </button>
        <button
          type="button"
          data-mdb-button-init
          value="3"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("3")}
        >
          3
        </button>

        <button
          type="button"
          data-mdb-button-init
          value="0"
          data-mdb-ripple-init
          className="btn btn-light waves-effect"
          onClick={() => handleClickButton("0")}
        >
          0
        </button>
        <button
          type="button"
          data-mdb-button-init
          className="decimal function btn btn-secondary"
          value="."
          onClick={() => handleClickButton(".")}
        >
          .
        </button>
        <button
          type="button"
          data-mdb-button-init
          className="all-clear function btn btn-danger btn-sm"
          value="all-clear"
          onClick={() => handleClear()}
        >
          AC
        </button>

        <button
          type="button"
          data-mdb-button-init
          className="equal-sign operator btn  btn-warning"
          value="="
          onClick={() => handleEqual()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
