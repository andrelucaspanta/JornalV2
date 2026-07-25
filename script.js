// Alternar tema escuro com persistência
const btnTema = document.getElementById("btnTema");

// Verifica se já existe preferência salva
if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark-theme");
}

if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark-theme");
  btnTema.textContent = "🌙";
} else {
  btnTema.textContent = "🌞";
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("tema", "escuro");
      btnTema.textContent = "🌙"; // muda para lua
    } else {
      localStorage.setItem("tema", "claro");
      btnTema.textContent = "🌞"; // muda para sol
    }
  });
}

// Feedback visual no formulário de contato
const formContato = document.getElementById("formContato");

if (formContato) {
  formContato.addEventListener("submit", (e) => {
    e.preventDefault();

    let msg = document.getElementById("formMsg");
    if (!msg) {
      msg = document.createElement("p");
      msg.id = "formMsg";
      formContato.insertAdjacentElement("afterend", msg);
    }
    msg.textContent = "✅ Mensagem enviada! Em breve entraremos em contato.";

    formContato.reset();
  });
}

// Menu hambúrguer
const menuToggle = document.getElementById("menuToggle");
const menuLinks = document.getElementById("menuLinks");

if (menuToggle && menuLinks) {
  menuToggle.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
  });
}