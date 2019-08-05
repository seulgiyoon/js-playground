const sum = {};
this.firstNumber = 0;
this.secondNumber = 0;

this.getNumbers = function() {
  const firstInput = document.getElementById('number1');
  const secondinput = document.getElementById('number2');
  this.firstNumber = Number(firstInput.value);
  this.secondNumber = Number(secondinput.value);
}

this.sumNumbers = function() {
  this.getNumbers();
  return this.firstNumber + this.secondNumber;
}

this.printNumbers = function() {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = this.sumNumbers();
}