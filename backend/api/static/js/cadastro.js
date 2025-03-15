async function Cadastro(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const csrf = document.querySelector("[name=csrfmiddlewaretoken]").value
    const url = window.location.pathname
    const parts = url.split("/")
    const id = parts[parts.length - 1]
    let response

    if(id){
        response = await apiRequest(`/api/user/${id}`, "PUT", { nome: nome, senha: senha }, { "X-CSRFToken": csrf })
        console.log(response.status)
    }
    else{

    response = await apiRequest("/api/user/", "POST", { nome: nome, senha: senha }, { "X-CSRFToken": csrf })



}
if (response.status == 201 || response.status == 200) {
    window.location.href = "/home";

} else {
    console.log(response)
    const msg = document.getElementById("msg")
    msg.innerHTML = 'Cadastro inválido!'
}


}


document.getElementById("cadastroForm").addEventListener("submit", Cadastro);