const calcular = document.querySelector('#calcular');

function imc() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado');
    if (nome !== '' && altura !== '' && peso!== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso. Procure um médico!';
        } else if (valorIMC < 24.9) {
            classificacao = 'com o peso normal.';
        } else if (valorIMC < 29.9) {
            classificacao = 'acima do peso. Procure um médico!';
        } else if (valorIMC < 34.9) {
            classificacao = 'com obesidade grau I. Procure um médico!';
        } else if (valorIMC < 39.9) {
            classificacao = 'com obesidade grau II. Procure um médico!';
        } else {
            classificacao = 'com obesidade grau III. Procure um médico!'
        }
        resultado.textContent = `${nome} seu imc é ${valorIMC} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener ('click', imc) 



