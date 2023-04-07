const localStorageKey = 'Key'
function validar(){
    let valor = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let msg = document.getElementById('input').value
    let existe = valor.find(x => x.name == msg)
    return !existe ? false : true
}
function tarefa(){
    let msg = document.getElementById('input')

    if(!msg.value){
        alert('Digite algo')

    }
    else if(validar()){
      alert ('Essa atividade já exite')
    }
    else{
        //incremento
        let valor = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        valor.push({
            name: msg.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(valor))
        mostrar()
    }
    msg.value = ''
}

function mostrar(){
    let valor = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let lista = document.getElementById('todo')
    lista.innerHTML = ''
    for(let i = 0; i <valor.length; i++){
        lista.innerHTML +=`<li>${valor[i]['name']}<button id="apaga" title="concluir" onclick='apaga("${valor[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </svg></button></li>`
    }
}

function apaga(data){
    let valor = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valor.findIndex(x => x.name == data )
    valor.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(valor))
    mostrar()
}
mostrar()