const Calculate = {};
this.firstNumber = 0;
this.secondNumber = 0;
this.sign = '';

this.getNumsAndSign = function() {
  const firstInput = document.getElementById('number1');
  const secondinput = document.getElementById('number2');
  const selectedSign = document.getElementById('signs');
  this.firstNumber = Number(firstInput.value);
  this.secondNumber = Number(secondinput.value);
  this.sign = selectedSign.value;
}

/*
this.calNumbers = function() {
  this.getNumsAndSign();
  if (this.sign === 'sum') {
    return this.firstNumber + this.secondNumber;
  } else if (this.sign === 'minus') {
    return this.firstNumber - this.secondNumber;
  } else if (this.sign === 'multiply') {
    return this.firstNumber * this.secondNumber;
  } else if (this.sign === 'division') {
    return this.firstNumber / this.secondNumber;
  }
}
*/

this.calNumbers = function() {
  this.getNumsAndSign();
  switch (this.sign) {
    case 'sum':
      return this.firstNumber + this.secondNumber;
    case 'minus':
      return this.firstNumber - this.secondNumber;
    case 'multiply':
      return this.firstNumber * this.secondNumber;
    case 'division':
      return this.firstNumber / this.secondNumber;
    default:
      return '숫자를 입력해주세요';
  }
}

this.printNumbers = function() {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = this.calNumbers();
}