class ControleIluminacao {

    observers = [];
    luzes = {};

    constructor() {

        this.observers = [];

        this.luzes = {
            sala: false,
            cozinha: false,
            quarto1: false,
            quarto2: false,
            banheiro: false,
            garagem: false
        };
    }

    ligarLuz(codigoComodo) {

        this.luzes[codigoComodo] = true;
        this.notificaObservers(codigoComodo);
    }

    desligarLuz(codigoComodo) {

        this.luzes[codigoComodo] = false;
        this.notificaObservers(codigoComodo);
    }

    registraObserver(observer) {

        this.observers.push(observer);
    }
    
    removeObserver(observer) {

        const index = this.observers.findIndex(func => func == observer);

        if (index >= 0) {

            this.observers.splice(index, 1);
        }
    }

    notificaObservers(codigoComodo) {

        for (const observer of this.observers) {
            
            observer.update(codigoComodo, this.luzes[codigoComodo]);
        }
    }
}

const controleIluminacao = new ControleIluminacao();
