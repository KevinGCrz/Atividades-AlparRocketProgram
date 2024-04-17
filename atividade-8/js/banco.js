const deposito = document.querySelector('.deposito');
const saque = document.querySelector('.saque');
const valorInput = document.querySelector('.valor');
const exibirSaldo = document.querySelector('.saldo');
const exibirExtrato = document.querySelector('.extrato')

class ContaBancaria {
    saldo = 0;
    historico = [];

    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
    historico(valor) {
        this.historico = valor;
    }
}

const conta = new ContaBancaria(0);
let numOperacoes = 1;

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

function atualizarHistory(tipo) {

    exibirExtrato.innerHTML +=
    `
    <p>${numOperacoes}° - ${FormatarValor(conta.saldo)} - ${tipo}</p>
    `

    numOperacoes++;
}

deposito.addEventListener('click', () => {

    const valor = parseFloat(valorInput.value);

    if (valor > 0) {

        conta.depositar(valor);
        atualizaValor();
        atualizarHistory('deposito');

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
        atualizarHistory('saque');

    } else {

    exibirSaldo.innerHTML =
    `
    <p>${FormatarValor(conta.saldo)}</p>
    <p class="invalido">Saque inválido...</p>
    `;
    }

    valorInput.value = '';
});
