const form = document.getElementById('form-cadastro')
const idade = document.getElementById('idade')
const nascimento = document.getElementById('nascimento')
const sucesso = document.querySelector('#sucesso')
const campoNascimento = document.querySelector('#campo_nascimento')
const msgError = document.getElementById('mensagem-erro')
const currentYear = new Date().getFullYear();

//Função para validar que o ano tem 4 dígitos
//e que a idade e o ano são correspondentes.
//Estando correta, já temos a segunda validação,
//afinal o ano será sempre maior que a idade.
function validateCampoNascimento() {
  const nascimentoValue = nascimento.value;

  if (nascimentoValue.length !== 4) {
    msgError.style.display = 'block';
    nascimento.style.border = '1px solid red';
    return false;
  }

  const idadeValue = currentYear - nascimentoValue;
  
  if (idade.value !== idadeValue.toString()) {
    msgError.style.display = 'block';
    nascimento.style.border = '1px solid red';
    return false;
  }

  msgError.style.display = 'none';
  nascimento.style.border = '';
  return true;
}

//Evento quando submeter o form previne o reload da página
//verifica se a função é true or false.
form.addEventListener('submit', function(e) {
    e.preventDefault()

    if (validateCampoNascimento()) {
        sucesso.style.display = 'block'
        idade.value = ''
        nascimento.value = ''
        campoNascimento.style.display = 'none'
    } else {
        sucesso.style.display = 'none'
        nascimento.style.border = '1px solid red'
        campoNascimento.style.display = 'block'
    }
})