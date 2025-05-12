// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {

  // Referência no formulário de login e à área que mostra o status da autenticação
  const loginForm = document.getElementById("loginForm");
  const authStatus = document.getElementById("authStatus");

  // Verifica se há um usuário já logado no "localStorage" e atualiza o status na interface
  const loginSalvo = localStorage.getItem("usuarioLogado");
  if (loginSalvo && authStatus) {
    authStatus.innerHTML = `<a href="cadastro.html"><img src="img/user.png" alt="User" style="height: 30px; border-radius: 50%; vertical-align: middle;"></a> ${loginSalvo}`;
  }

  // Configura o evento de envio do formulário de "login"
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita o envio padrão do formulário

      // Captura os valores digitados
      const login = document.getElementById("login").value.trim();
      const senha = document.getElementById("senha").value.trim();

      // Verifica se ambos os campos foram preenchidos
      if (login && senha) {
        // Salva o login no "localStorage" e redireciona para a "página inicial"
        localStorage.setItem("usuarioLogado", login);
        window.location.href = "index.html";
      } else {
        // Alerta caso os campos estejam vazios
        alert("Por favor, preencha os dois campos.");
      }
    });
  }

  // Referência ao seletor de tema e ao formulário de cadastro
  const temaSelect = document.getElementById("tema");
  const form = document.getElementById("cadastroForm");

  // Aplica estilo customizado se o tema "custom" for selecionado
  if (temaSelect && form) {
    temaSelect.addEventListener("change", () => {
      if (temaSelect.value === "custom") {
        // Estilo personalizado para labels e inputs
        form.querySelectorAll("label").forEach(label => {
          label.style.fontFamily = "Courier New, monospace";
        });
        form.querySelectorAll("input").forEach(input => {
          input.style.backgroundColor = "#eef";
        });
      } else {
        // Remove o estilo personalizado
        form.querySelectorAll("label").forEach(label => {
          label.style.fontFamily = "";
        });
        form.querySelectorAll("input").forEach(input => {
          input.style.backgroundColor = "";
        });
      }

      // Remove as classes anteriores e adiciona a classe correspondente ao tema escolhido
      document.body.classList.remove("default");
      document.body.classList.add(temaSelect.value);
    });
  }

});
