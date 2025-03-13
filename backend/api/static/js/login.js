async function Login(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;
    const csrf = document.querySelector("[name=csrfmiddlewaretoken]").value

    const response = await apiRequest("/api/login/", "POST", { nome: nome, senha: senha }, { "X-CSRFToken": csrf })


    if (response.status == 200) {
        window.location.href = "/home";
    } else {
        const msg = document.getElementById("msg")
        msg.innerHTML = 'Login inválido!'
    }
}


document.getElementById("loginForm").addEventListener("submit", Login);