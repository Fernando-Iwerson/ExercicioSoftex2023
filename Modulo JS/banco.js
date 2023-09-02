const banco = {
    conta: "246245-1",
    saldo: 2500,
    tipoDeConta: "Poupança",
    agencia: "3202",

    buscarSaldo: function(){
        console.log(`Saldo Atual: ${this.saldo}`)
    },

    deposito: function(){
        valor = 1300;
        this.saldo += valor
        console.log(`deposito de ${valor} foi feito com sucesso, o saldo Atual é: ${this.saldo}`)
    },

    saque: function(){
        valor = 500;
        this.saldo -= valor
        console.log(`saque de ${valor} foi feito com sucesso, o saldo Atual é: ${this.saldo}`)
    },

    numeroDaConta: function(){
        console.log(`Número da conta: ${this.conta}`)
    }

}

banco.buscarSaldo();
banco.deposito();
banco.saque();
banco.numeroDaConta();


