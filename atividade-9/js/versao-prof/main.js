const roomViewEl = document.querySelector('.room-view')
const kitchenViewEl = document.querySelector('.kitchen-view')

const roomBtn = document.querySelector('.room-button')
const kitchenBtn = document.querySelector('.kitchen-button')

roomBtn.addEventListener('click', ()=>{
    AutomacaoLuzes.instance.toggle('room')
})

roomBtn.addEventListener('click', ()=>{
    AutomacaoLuzes.instance.toggle('kitchen')
})

AutomacaoLuzes.instance.inscrever(()=>{
    if(AutomacaoLuzes.instance.getState('room')){
        roomViewEl.classList.add('active')
    }else{
        roomViewEl.classList.remove('active')
    }
});

AutomacaoLuzes.instance.inscrever(()=>{
    if(AutomacaoLuzes.instance.getState('kitchen')){
        roomViewEl.classList.add('active')
    }else{
        roomViewEl.classList.remove('active')
    }
});