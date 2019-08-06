let numbers = [];
let signs = [];
let n = 1;

while (true) {
  const num1 = Number(prompt(n + '번째 숫자를 입력하세요.'));
  n = n + 1;
  let sign = prompt('연산자를 입력하세요.(+, -, *, /)');
  numbers.push(num1);
  signs.push(sign);
  if (sign === 'q') {
    break;
  }
}

let result = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  let sign = signs[i];
  if (sign === '+') {
    result = result + numbers[i + 1];
  } else if (sign === '-') {
    result = result - numbers[i + 1];
  } else if (sign === '*') {
    result = result * numbers[i + 1];
  } else if (sign === '/') {
    result = result / numbers[i + 1];
  } else {
    break;
  }
}

const resultBox = document.getElementById('result');
resultBox.innerHTML = result;