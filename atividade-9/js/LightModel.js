class LightModel {

    _garagem = false;
    _sala = false;
    _cozinha = false;
    _quarto1 = false;
    _quarto1 = false;
    _corredor = false;
    _banheiro = false;
    _lavanderia = false;
  
    get garagem() {
        return this._garagem;
      }
      set garagem(value) {
        this._garagem = value;
      }

    get sala() {
      return this._sala;
    }
    set sala(value) {
      this._sala = value;
    }
  
    get cozinha() {
      return this._cozinha;
    }
    set cozinha(value) {
      this._cozinha = value;
    }
  
    get quarto1() {
      return this._quarto1;
    }
    set quarto1(value) {
      this._quarto1 = value;
    }
  
    get quarto2() {
      return this._quarto2;
    }
    set quarto2(value) {
      this._quarto2 = value;
    }
  
    get banheiro() {
      return this._banheiro;
    }
    set banheiro(value) {
      this._banheiro = value;
    }
  
    get corredor() {
      return this._corredor;
    }
    set corredor(value) {
      this._corredor = value;
    }

    get lavanderia() {
      return this._lavanderia;
    }
    set lavanderia(value) {
      this._lavanderia = value;
    }
  

    get all() {
      return this._garagem && this._sala && this._cozinha && this._quarto1 && this._quarto2 && this._corredor && this._banheiro && this._lavanderia
    }
    set all(value) {
      this.garagem = value
      this.sala = value
      this.cozinha = value
      this.quarto1 = value
      this.quarto2 = value
      this.corredor = value
      this.banheiro = value
      this.lavanderia = value
    }
  }