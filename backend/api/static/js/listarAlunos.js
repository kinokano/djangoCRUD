
async function deletar(id){
    const csrf = document.querySelector("[name=csrfmiddlewaretoken]").value
    const resposta = await apiRequest(`/api/user/${id}`, "DELETE",null, { "X-CSRFToken": csrf })

    if(resposta.status == 200){
        var linhaAluno = document.getElementById(`user-${id}`)
        linhaAluno.remove()
    }

}

function editar(id){
    window.location.href = "/cadastro/"+id
}



