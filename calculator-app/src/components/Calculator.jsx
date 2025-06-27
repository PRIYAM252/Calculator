import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`btn ${btn === "=" ? "equal" : btn === "C" ? "clear" : isNaN(btn) && btn !== "." ? "operator" : "number"}`}
            onClick={
              btn === "="
                ? handleCalculate
                : btn === "C"
                ? handleClear
                : () => handleClick(btn)
            }
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
