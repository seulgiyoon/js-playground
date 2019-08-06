function getFirstValue() {
  const firstInput = document.getElementById('number1');
  return Number(firstInput.value);
}

function getSecondValue() {
  const secondInput = document.getElementById('number2');
  return Number(secondInput.value);
}

function getSign() {
  const selectedSign = document.getElementById('signs');
  return selectedSign.value;
}

function calculate(firstNum, secondNum, sign) {
  if (sign === 'sum') {
    return firstNum + secondNum;
  } else if (sign === 'minus') {
    return firstNum - secondNum;
  } else if (sign === 'multiply') {
    return firstNum * secondNum;
  } else if (sign === 'division') {
    return firstNum / secondNum;
  }
}

function print(result) {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = result;
}

function main() {
  const firstNum = getFirstValue();
  const secondNum = getSecondValue();
  const sign = getSign();
  const result = calculate(firstNum, secondNum, sign);
  print(result);
}