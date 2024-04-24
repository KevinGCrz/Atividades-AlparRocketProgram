const tarefaInputEl = document.querySelector('.input-tarefa')
const horaTarefaEl = document.querySelector('.input-hora')

const minhasTarefasEl = document.querySelector('.tarefas-agendadas')
const concluidaEl = document.querySelector('.checkbox')

let horaCerta = 'AM'

function incluirTarefa(){

    if(parseInt(horaTarefaEl.value) > 12)
    {
        horaCerta = 'PM'
    }

    if(tarefaInputEl.value)
    {
        if(horaTarefaEl.value)
        {

        minhasTarefasEl.innerHTML +=
            `
            <div class="minha-tarefa">
            <div class="checkbox">
                <img class="conclusao" onclick="concluida(this)" src="./css/img/checkbox.png" alt="">
            </div>
            
            <p class="tarefa-desc">${tarefaInputEl.value}</p>
            <p class="tarefa-hora">${horaTarefaEl.value} ${horaCerta}</p>
            
        
            <div class="trash">
                <img class="excluir" onclick="excluida(this.parentNode.parentNode)" src="./css/img/trash.png" alt="">
            </div>
            </div>
            `
        
            tarefaInputEl.value = ''
            horaTarefaEl.value = ''

        } else {

        alert('Insira um horario correto para sua nova tarefa!')

        }

    } else {

        alert('Insira uma descrição para sua nova tarefa!')
    }
    
}

function concluida(imgElement) {
    
    const tarefa = imgElement.parentNode.parentNode;
    
        if (imgElement.src.endsWith("checkbox.png")) {
            
            imgElement.src = "./css/img/check.png";
            tarefa.classList.add('concluida');
        } else {

            imgElement.src = "./css/img/checkbox.png"; 
            tarefa.classList.remove('concluida');
        }

}


function excluida(tarefa) {
    tarefa.remove(); 
}