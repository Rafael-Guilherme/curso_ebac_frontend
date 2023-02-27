$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()
        
        const cadastroNovo = $('#cadastro-novo').val()
        const novaTarefa = $('<li></li>')
        const containerTarefa = $(`<div class="tarefa"></div>`).appendTo(novaTarefa)
        $(`<p>${cadastroNovo}</p>`).appendTo(containerTarefa)
        $(novaTarefa).appendTo('ul')
        $('#cadastro-novo').val('')
    });

    $('ul').on('click', 'li p', function() {
        $(this).toggleClass('completada');
    });
});