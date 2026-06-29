let display = document.getElementById("display");
const beep = new Audio("beep.wav");

function appendValue(value) {
  beep.play();
  display.value += value;
}

function clearDisplay() {
  beep.play();
  display.value = "";
}

function calculate() {
  beep.play();
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Keyboard support
document.addEventListener("keydown", function(e) {
  const key = e.key;
  if ("0123456789+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
