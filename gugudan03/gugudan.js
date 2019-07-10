gugudan = {};
gugudan.inputValue = "";
gugudan.firstNumber = "";
gugudan.secondNumber = "";
gugudan.numberLists = [];

// input란에서 값을 가져옴
gugudan.getValue = function() {
    this.inputValue = document.getElementById('numbers').value;
}

// 입력한 곱해지는 숫자가 1일 때 경고창 띄우기
gugudan.inputAlert = function() {
    if (this.inputValue[0] === "1" && this.inputValue[1] == ",") {
        alert("첫번째 숫자는 2부터 입력해주세요.");
    }
}

// getValue에서 가져온 값(문자열)을 쉽표를 기준으로 앞쪽 문자열은 firstNumber에,
// 뒤의 문자열은 secondNumber에 저장함
gugudan.seperateStrings = function() {
    this.inputAlert();
    this.firstNumber = "";
    this.secondNumber = "";
    for (var f = 0; f < this.inputValue.length; f++) {
        if (this.inputValue[f] === ",") {
            for (var s = f + 1; s < this.inputValue.length; s++){
                this.secondNumber += this.inputValue[s];
            }
            break;
        } else {
            this.firstNumber += this.inputValue[f];
        }
    }
}

// 문자열을 숫자로 바꾸어 반환함
gugudan.stringToNumber = function(str) {
    return str = Number(str);
}

// 2부터 firstNumber 사이의 수에 1부터 secondNumber 사이의 수를 사용한 곱셈식을 배열에 담아 반환함
gugudan.calNumbers = function(n) {
    var calResult = [];
    for (var m = 1; m <= this.stringToNumber(this.secondNumber); m++) {
        calResult.push(n + " × " + m + " = " + n * m);
    }
    return calResult;
}

// 2부터 firstNumber 사이의 수 만큼 div를 생성함. 위치는 id가 showNumbers인 div아래.
// 그 전에 이전 계산결과로 생성된 모든 div를 지움.
// 생성한 div 안에는 단 수를 표시한 h2 문자열을 함께 생성함.
gugudan.makeBoxs = function() {
    this.removeBoxs();  
    for (var n = 2; n <= this.stringToNumber(this.firstNumber); n++) {
        var perentsEl = document.getElementById("showNumbers");
        var box = document.createElement('div');
        var title = document.createElement('h2');
        box.id = n + 'box';
        box.className = 'box';
        title.textContent = n + ' 단';
        box.appendChild(title);
        perentsEl.appendChild(box);
    }
}

// 생성한 div 안에 곱셈식을 저장한 배열을 출력함. 
// 배열을 세로로 출력하기 위해 테이블을 만들어 행 마다 곱셈식 하나를 삽입하는 형식을 띔.
gugudan.popNumbers = function() {
    for (n = 2; n <= this.stringToNumber(this.firstNumber); n++) {
        var perentsEl = document.getElementById(String(n) + "box");
        this.numberLists = this.calNumbers(n);
        var numTable = document.createElement('table');
        for (m = 0; m < this.numberLists.length; m++) {
            var numRow = document.createElement('tr');
            numTable.appendChild(numRow);
            numRow.textContent = this.numberLists[m];
        }
        perentsEl.appendChild(numTable);
    }
}

// 이전 계산(실행)에서 만들어진 모든 내용을 지우도록 id가 showNumbers인 div의 자식노드를 모두 삭제함.
gugudan.removeBoxs = function() {
    var perentsEl = document.getElementById("showNumbers");
    while (perentsEl.firstChild) {
        perentsEl.removeChild(perentsEl.firstChild);
    }
}

function main() {
    gugudan.getValue();
    gugudan.seperateStrings();
    gugudan.makeBoxs();
    gugudan.popNumbers();
}