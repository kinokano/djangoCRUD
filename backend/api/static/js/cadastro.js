async function Cadastro(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const csrf = document.querySelector("[name=csrfmiddlewaretoken]").value

    const response = await apiRequest("/api/user/", "POST", { nome: nome, senha: senha }, { "X-CSRFToken": csrf })


    if (response.status == 201) {
        const login = await apiRequest("/api/login/", "POST", { nome: nome, senha: senha }, { "X-CSRFToken": csrf })
        if (login.status == 200) {
            window.location.href = "/home";
            console.log('sessao')
        }
    } else {
        console.log(response)
        const msg = document.getElementById("msg")
        msg.innerHTML = 'Cadastro inválido!'
    }
}


document.getElementById("cadastroForm").addEventListener("submit", Cadastro);