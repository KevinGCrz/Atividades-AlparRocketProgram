class AutomacaoLuzes {
    static instance;
    observers = []

    room = false;
    kitchen = false;
    
    toggle(convenient) {
        if(convenient == 'room'){
            this.room = !this.room
        }
        else if(convenient == 'kitchen'){
            this.kitchen = !this.kitchen
        }

        this.executar();
    }

    getState(convenient)
    {
        if(convenient == 'room'){
            return this.room
        }
        else if (convenient == 'kitchen'){
            return this.kitchen
        }
    }

    inscrever(funcao){
        this.observers.push(funcao)
    }

    executar(){
        this.observers.forEach((funcao)=>{
            funcao()
        })
    }

}

AutomacaoLuzes.instance = new AutomacaoLuzes()