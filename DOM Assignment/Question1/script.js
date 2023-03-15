function add() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 + num2;
    document.getElementById("result").innerText = result;
  }
  
  function subtract() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 - num2;
    document.getElementById("result").innerText = result;
  }
  
  function multiply() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 * num2;
    document.getElementById("result").innerText = result;
  }
  
  function divide() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    const result = num1 / num2;
    document.getElementById("result").innerText = result;
  }
  
  function clearFields() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").innerText = "";
  }
  