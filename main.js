var screen = document.getElementById('Answer');
function EnterNumber(value) {
screen.value += value
}

function EnterOperator(value) {
    screen.value += ' ' +value+ ''
}

function EnterClear() {
    screen.value = '';
}

function EnterEqual() {

    var sum = eval(screen.value);
    screen.value= sum;
}

