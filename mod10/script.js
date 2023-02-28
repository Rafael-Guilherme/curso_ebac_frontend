$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000', {placeholder:'(99) 98989-9898'})
    $('#cpf').mask('000.000.000-00', {placeholder: '123.456.789-00'})
    $('#cep').mask('00000-000', {placeholder: '12345-678'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            cpf: {
                required: true
            },
            rua: {
                required: true
            },
            bai: {
                required: false
            },
            cid: {
                required: false
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome completo',
            email: 'Por favor, digite seu e-mail',
            cpf: 'Por favor, digite o seu cpf',
            rua: 'Por favor, digite a sua rua',
            cep: 'Por favor, digite o seu cep'
        },
        submitHandler: function(form) {
            
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
});