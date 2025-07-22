let display = document.getElementById('display');

function apresentar(input){
    display.value += input;
}

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = 'error';
    }
}

function limpar(){
    display.value = '';
}

function calculadoraForm(){
    document.querySelector("#calculadora-form").style.display = 'flex';
    document.querySelector("#calculadora-digital").style.display = 'none';
}