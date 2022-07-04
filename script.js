const main = document.getElementById('main');
const botaoDoLogin = document.getElementById('button-login');
const checkboxEnviar = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const evaluationForm = document.getElementById('evaluation-form');
const botaoEnviar = document.getElementById('submit-btn');

const firstName = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const radios = document.getElementsByName('family');
const subjects = document.getElementsByName('subject');
const rate = document.getElementsByName('rate');
const title = document.getElementById('title');

window.onload = () => {
  botaoEnviar.disabled = true;
};

botaoDoLogin.addEventListener('click', () => {
  const email = document.getElementById('email');
  const senha = document.getElementById('input-password');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

textArea.addEventListener('keyup', () => {
  const contadorSpan = document.getElementById('counter');
  const valorText = textArea.value.length;
  const valorSubtracao = 500 - valorText;
  contadorSpan.innerText = valorSubtracao;
});

checkboxEnviar.addEventListener('change', () => {
  const value = checkboxEnviar.checked;
  if (value) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
});

function SelectedRadios() {
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
}

function SelectedSubjects() {
  const selectedSubjects = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      selectedSubjects.push(subjects[index].value);
    }
  }
  return selectedSubjects.join(', ');
}

function SelectedRate() {
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      return rate[index].value;
    }
  }
}

function getFormData() {
  const formData = {
    name: firstName.value,
    lastname: lastName.value,
    email: inputEmail.value,
    house: house.value,
    family: SelectedRadios(),
    subjects: SelectedSubjects(),
    rate: SelectedRate(),
    textarea: textArea.value,
  };
  return formData;
}

function newForm(obj) {
  title.remove();
  evaluationForm.style.display = 'none';
  const formData = document.createElement('section');
  formData.id = 'form-data';
  formData.innerHTML = `
    <h1>Dados do formulário</h1>
    <p>Nome: ${obj.name} ${obj.lastname}</p>
    <p>Email: ${obj.email}</p>
    <p>Casa: ${obj.house}</p>
    <p>Família: ${obj.family}</p>
    <p>Matérias: ${obj.subjects}</p>
    <p>Avaliação: ${obj.rate}</p>
    <p>Observações: ${obj.textarea}</p>
  `;
  main.appendChild(formData);
}

botaoEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = getFormData();
  newForm(formData);
});
