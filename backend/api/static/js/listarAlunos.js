
async function deletar(id){
    
    const resposta = await apiRequest(`/api/user/${id}`, "DELETE",null)

    if(resposta.status == 200){
        var linhaAluno = document.getElementById(`user-${id}`)
        linhaAluno.remove()
    }

}

function editar(id){
    window.location.href = "/cadastro/"+id
}



