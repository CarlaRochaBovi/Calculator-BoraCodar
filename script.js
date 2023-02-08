const input = document.getElementById('input')
const output = document.getElementById('output')

let expression = ''

function calculate(num) {
    expression += num;
    input.value = expression;
}

function equal() {
    output.innerHTML = eval(expression);

}

function erase(){
    expression = '';
    input.value = expression;   
}

function del() {
    expression = '';
    input.value = expression;
    output.innerHTML = '0'   
}