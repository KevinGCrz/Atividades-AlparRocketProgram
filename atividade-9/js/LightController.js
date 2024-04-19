class LightController {
    static instance
    data
    view

    constructor() {
        this.data = new LightModel()
        this.view = new LightView()
    }

    toggleGaragem() {
        this.data.garagem = !this.data.garagem;
        
        if(this.data.garagem) {
            this.view.turnOngaragem()
        } else {
            this.view.turnOffgaragem()
        }
        this.execute()
    }

    toggleSala() {
        this.data.sala = !this.data.sala;
        
        if(this.data.sala) {
            this.view.turnOnsala()
        } else {
            this.view.turnOffsala()
        }
        this.execute()
    }

    toggleCozinha() {
        this.data.cozinha = !this.data.cozinha;
        
        if(this.data.cozinha) {
            this.view.turnOncozinha()
        } else {
            this.view.turnOffcozinha()
        }
        this.execute()
    }

    toggleQuarto1() {
        this.data.quarto1 = !this.data.quarto1;
        
        if(this.data.quarto1) {
            this.view.turnOnquarto1()
        } else {
            this.view.turnOffquarto1()
        }
        this.execute()
    }

    toggleQuarto2() {
        this.data.quarto2 = !this.data.quarto2;
        
        if(this.data.quarto2) {
            this.view.turnOnquarto2()
        } else {
            this.view.turnOffquarto2()
        }
        this.execute()
    }

    toggleCorredor() {
        this.data.corredor = !this.data.corredor;
        
        if(this.data.corredor) {
            this.view.turnOncorredor()
        } else {
            this.view.turnOffcorredor()
        }
        this.execute()
    }

    toggleBanheiro() {
        this.data.banheiro = !this.data.banheiro;
        
        if(this.data.banheiro) {
            this.view.turnOnbanheiro()
        } else {
            this.view.turnOffbanheiro()
        }
        this.execute()
    }

    toggleLavanderia() {
        this.data.lavanderia = !this.data.lavanderia;
        
        if(this.data.lavanderia) {
            this.view.turnOnlavanderia()
        } else {
            this.view.turnOfflavanderia()
        }
        this.execute()
    }


    toggleAll() {
        this.data.all = !this.data.all;
        if(this.data.all) {
            this.view.turnOnAll()
        } else {
            this.view.turnOffAll()
        }
        this.execute()
    }

    // OBSERVERS
    observers = []
    subscribe(observeFn) {
        this.observers.push(observeFn)
    }
    execute() {
        this.observers.forEach((observeFn)=>{
            observeFn(data)
        })
    }
    
}

LightController.instance = new LightController()