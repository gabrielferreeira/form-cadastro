const form = document.getElementById("form");
const user = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
});

// FUNÇÃO PARA OCUTAR O ERRO APÓS CLICAR FORA DO INPUT
user.addEventListener("blur", () => {
  checkUser();
});

email.addEventListener("blur", () => {
  checkEmail();
});

password.addEventListener("blur", () => {
  checkPassword();
});

confirmPassword.addEventListener("blur", () => {
  checkConfirmPassword();
});

// FUNÇÃO PARA CHECAR O CAMPO DE USUÁRIO
function checkUser() {
  const userValue = user.value;

  if (userValue === "") {
    inputError(user, "O campo usuário é obrigatório.");
  } else {
    const formItem = user.parentElement.parentElement;
    formItem.className = "form-control";
  }
}

// FUNÇÃO PARA CHECAR O CAMPO DE E-MAIL
function checkEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    inputError(email, "O campo e-mail é obrigatório.");
  } else {
    const formItem = email.parentElement.parentElement;
    formItem.className = "form-control";
  }
}

// FUNÇÃO PARA CHECAR O CAMPO DE SENHA
function checkPassword() {
  const passwordValue = password.value;

  if (passwordValue === "") {
    inputError(password, "O campo de senha é obrigatório.");
  } else if (passwordValue.length < 6) {
    inputError(password, "A senha precisa ter no mínimo 6 caracteres.");
  } else {
    const formItem = password.parentElement.parentElement;
    formItem.className = "form-control";
  }
}

// FUNÇÃO PARA CHECAR O CAMPO DE CONFIRMAR SENHA
function checkConfirmPassword() {
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  if (confirmPasswordValue === "") {
    inputError(confirmPassword, "O campo de confirmação é obrigatório.");
  } else if (confirmPasswordValue !== passwordValue) {
    inputError(confirmPassword, "As senhas não conferem.");
  } else {
    const formItem = confirmPassword.parentElement.parentElement;
    formItem.className = "form-control";
  }
}

// FUNÇÃO PARA CHECAR OS CAMPOS DO FORMULÁRIO
function checkForm() {
  checkUser();
  checkEmail();
  checkPassword();
  checkConfirmPassword();

  const formItens = form.querySelectorAll(".form-control");

  const validate = [...formItens].every((item) => {
    return item.className === "form-control";
  });

  if (validate) {
    alert("Usuário cadastrado com sucesso.");
    clearInputs();
  } else {
    alert("Preencha as informações corretamentes.");
  }
}

// FUNÇÃO PARA LIMPAR OS CAMPOS APÓS ENVIAR AS INFORMAÇÕES CORRETAS
function clearInputs() {
  user.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
}

// FUNÇÃO PARA EXIBIR ERRO NOS CAMPOS DE INPUTS
function inputError(input, message) {
  const formItem = input.parentElement.parentElement;
  const msgItem = formItem.querySelector("span");

  msgItem.innerText = message;
  formItem.className = "form-control error";
}
