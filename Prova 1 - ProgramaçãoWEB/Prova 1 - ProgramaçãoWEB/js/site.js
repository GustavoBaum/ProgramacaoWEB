const registrationForm = document.getElementById("registration_form");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    const name = document.getElementById("IDname").value;
    const email = document.getElementById("IDemail").value;
    const birthdaydate = document.getElementById("IDdataNascimento").value;
    const login = document.getElementById("IDlogin").value;
    const password = document.getElementById("IDpassword").value;

    if (password.length < 8) {
        message.textContent = "Senha deve ter pelo menos 8 elementos";
        message.style.color = "red";
        return;
    }

    const userData = { name, email, birthdaydate, login, password};
    console.log(userData);

    message.textContent = "Cadastro realizado com sucesso";
    message.style.color = "green";
    registrationForm.reset();
} )