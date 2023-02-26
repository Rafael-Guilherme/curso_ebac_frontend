const form = document.getElementById('form-cadastro')
const numA = document.getElementById('numA')
const numB = document.getElementById('numB')
const sucesso = document.querySelector('#sucesso')
//const campoNascimento = document.querySelector('#campo_nascimento')
//const msgError = document.getElementById('mensagem-erro')
const numAError = document.getElementById('erro-numA')
//const currentYear = new Date().getFullYear();


form.addEventListener('submit', function(e) {
  e.preventDefault()

  if (Number(numA.value) < Number(numB.value)) {
    //validar()
    numAError.style.display = 'none'
    numA.style.border = ''

    sucesso.style.display = 'block'
    numA.value = ''
    numB.value = ''
    //campoNascimento.style.display = 'none'
  } else {
    numAError.style.display = 'block'
    numA.style.border = '1px solid red'
    sucesso.style.display = 'none'
    //msgError.style.display = 'none'
    //nascimento.style.border = ''
  }
})

//Função para validar que o ano tem 4 dígitos
//e que a idade e o ano são correspondentes.
//Estando correta, já temos a segunda validação,
//afinal o ano será sempre maior que a idade.
// function validateCampoNascimento() {
//   const nascimentoValue = nascimento.value;

//   if (nascimentoValue.length !== 4) {
//     msgError.style.display = 'block'
//     nascimento.style.border = '1px solid red'
//     return false;
//   }

//   const idadeValue = currentYear - nascimentoValue;
  
//   if (idade.value !== idadeValue.toString()) {
//     msgError.style.display = 'block'
//     nascimento.style.border = '1px solid red'
//     return false;
//   }

//   msgError.style.display = 'none'
//   nascimento.style.border = ''
//   sucesso.style.display = 'none'
//   return true;
// }

// //Evento quando submeter o form previne o reload da página
// //verifica se a função é true or false.
// function validar() {

//     if (validateCampoNascimento()) {
//         sucesso.style.display = 'block'
//         idade.value = ''
//         nascimento.value = ''
//         campoNascimento.style.display = 'none'
//     } else {
//         sucesso.style.display = 'none'
//         nascimento.style.border = '1px solid red'
//         campoNascimento.style.display = 'block'
//     }
// }