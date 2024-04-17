const deposito = document.querySelector('.deposito');
const saque = document.querySelector('.saque');
const valorInput = document.querySelector('.valor');
const exibirSaldo = document.querySelector('.saldo');

class ContaBancaria {
    saldo = 0;

    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
}

const conta = new ContaBancaria(0);

function FormatarValor(valor)
{
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valor)
}

function atualizaValor() {
    
    exibirSaldo.innerHTML =
    `
    <p>${FormatarValor(conta.saldo)}</p>
    <p class="atualizado">Saldo atualizado...</p>
    `;
}

deposito.addEventListener('click', () => {

    const valor = parseFloat(valorInput.value);

    if (valor > 0) {

        conta.depositar(valor);
        atualizaValor();

    } else {

    exibirSaldo.innerHTML =
    `
    <p>${FormatarValor(conta.saldo)}</p>
    <p class="invalido">Depósito inválido...</p>
    `;
    }

    valorInput.value = '';
});

saque.addEventListener('click', () => {

    const valor = parseFloat(valorInput.value);

    if (valor > 0 && valor <= conta.saldo) {

        conta.sacar(valor);
        atualizaValor();

    } else {

    exibirSaldo.innerHTML =
    `
    <p>${FormatarValor(conta.saldo)}</p>
    <p class="invalido">Saque inválido...</p>
    `;
    }

    valorInput.value = '';
});
