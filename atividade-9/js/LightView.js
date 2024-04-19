const garagemViewEl = document.querySelector(".garagem-view");
const salaViewEl = document.querySelector(".sala-view");
const cozinhaViewEl = document.querySelector(".cozinha-view");
const quarto1ViewEl = document.querySelector(".quarto1-view");
const quarto2ViewEl = document.querySelector(".quarto2-view");
const corredorViewEl = document.querySelector(".corredor-view");
const banheiroViewEl = document.querySelector(".banheiro-view");
const lavanderiaViewEl = document.querySelector(".lavanderia-view");

class LightView {

  turnOngaragem() {
    garagemViewEl.classList.add("aceso");
    garagemViewEl.classList.remove("apagado");
  }
  turnOffgaragem() {
    garagemViewEl.classList.add("apagado");
    garagemViewEl.classList.remove("aceso");
  }

  turnOnsala() {
    salaViewEl.classList.add("aceso");
    salaViewEl.classList.remove("apagado");
  }
  turnOffsala() {
    salaViewEl.classList.add("apagado");
    salaViewEl.classList.remove("aceso");
  }


  turnOncozinha() {
    cozinhaViewEl.classList.add("aceso");
    cozinhaViewEl.classList.remove("apagado");
  }
  turnOffcozinha() {
    cozinhaViewEl.classList.add("apagado");
    cozinhaViewEl.classList.remove("aceso");
  }

  turnOnquarto1() {
    quarto1ViewEl.classList.add("aceso");
    quarto1ViewEl.classList.remove("apagado");
  }
  turnOffquarto1() {
    quarto1ViewEl.classList.add("apagado");
    quarto1ViewEl.classList.remove("aceso");
  }


  turnOnquarto2() {
    quarto2ViewEl.classList.add("aceso");
    quarto2ViewEl.classList.remove("apagado");
  }
  turnOffquarto2() {
    quarto2ViewEl.classList.add("apagado");
    quarto2ViewEl.classList.remove("aceso");
  }


  turnOncorredor() {
    corredorViewEl.classList.add("aceso");
    corredorViewEl.classList.remove("apagado");
  }
  turnOffcorredor() {
    corredorViewEl.classList.add("apagado");
    corredorViewEl.classList.remove("aceso");
  }


  turnOnbanheiro() {
    banheiroViewEl.classList.add("aceso");
    banheiroViewEl.classList.remove("apagado");
  }
  turnOffbanheiro() {
    banheiroViewEl.classList.add("apagado");
    banheiroViewEl.classList.remove("aceso");
  }


  turnOnlavanderia() {
    lavanderiaViewEl.classList.add("aceso");
    lavanderiaViewEl.classList.remove("apagado");
  }
  turnOfflavanderia() {
    lavanderiaViewEl.classList.add("apagado");
    lavanderiaViewEl.classList.remove("aceso");
  }



  turnOnAll() {
    this.turnOngaragem()
    this.turnOnsala()
    this.turnOncozinha()
    this.turnOnquarto1()
    this.turnOnquarto2()
    this.turnOncorredor()
    this.turnOnbanheiro()
    this.turnOnlavanderia()
  }
  turnOffAll() {
    this.turnOffgaragem()
    this.turnOffsala()
    this.turnOffcozinha()
    this.turnOffquarto1()
    this.turnOffquarto2()
    this.turnOffcorredor()
    this.turnOffbanheiro()
    this.turnOfflavanderia()
  }
}