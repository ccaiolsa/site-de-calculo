
// Add event listeners to all number buttons using a loop
for (let i = 0; i <= 9; i++) {
    const numBtn = document.querySelector(`.teclado-num${i}`);
    if (numBtn) {
        numBtn.addEventListener('click', function(event){
            event.preventDefault();
        });
    }
}
const btn2 = document.querySelector('.submissao2');
if (btn2) {
    btn2.addEventListener('click', function(event){
        event.preventDefault();
    });
}

const estilo1 = document.querySelector('.estilo');
if (estilo1) {
    estilo1.addEventListener('click', function(event){
        event.preventDefault();
        const form = document.querySelector('#calculadora-form');
        const digital = document.querySelector('#calculadora-digital');
        if (form) form.style.display = 'flex';
        if (digital) digital.style.display = 'none';
    });
}