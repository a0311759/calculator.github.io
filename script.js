function appendToResult(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  try {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearEntry() {
  document.getElementById("result").value = "";
}

function clearAll() {
  clearEntry();
}

function deleteLast() {
  const currentValue = document.getElementById("result").value;
  document.getElementById("result").value = currentValue.slice(0, -1);
}