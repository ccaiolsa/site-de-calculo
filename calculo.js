document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#calculadora-form');
    const valor1 = document.querySelector('#numero1');
    const valor2 = document.querySelector('#numero2');
    const operacao = document.querySelector('#operacao');
    const resultado = document.querySelector('#resultado');
    const btn1 = document.querySelector('.submissao1');
    btn1.addEventListener('click', function(event){
        event.preventDefault();

        let numero1 = Number(valor1.value);
        let numero2 = Number(valor2.value);
        let operacaoEscolhida = operacao.value;
        let resultado;

        switch(operacaoEscolhida){
            case 'soma':
                resultado = numero1 + numero2;
            break
            case 'subtração':
                resultado = numero1 - numero2;
            break;
            case 'multiplicação':
                resultado = numero1 * numero2;
            break;
            case 'divisão':
                if(numero2 == 0){
                    resultado = 'Operação inválida';
                }else{
                    resultado = numero1 / numero2;
                }
        }
        document.querySelector("#resultado").value = resultado;
    })
    const digital = document.getElementById('calculadora-digital');
    const estilo = document.querySelector('.estilo');
    estilo.addEventListener('click', function(event){
        event.preventDefault();
        form.style.display = 'none';
        digital.style.display = 'flex';

    })
})