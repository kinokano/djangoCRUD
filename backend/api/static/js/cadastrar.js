

async function enviarFormulario(evento){
    evento.preventDefault()
    
    var url = '/api/user/'
    var method = 'POST'

    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value
    var body = {
        username: nome,
        password: senha
    }

    var msg = document.getElementById('msg')

    const resposta = await apiFetch(url, method, body)
    
    // await fetch('/api/user/', {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({username: nome, password: email})
    // })

    if(resposta.ok){
        window.location.href = "/home"
    }
    else{
        msg.innerHTML = 'Erro ao cadastrar'
    }


}

var alunoForm = document.getElementById('alunoForm').addEventListener("submit", enviarFormulario)