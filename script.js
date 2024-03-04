$(document).ready(function () {
    const formTarefas = $('#form-tarefa');
    const listaTarefas = $('#lista-tarefas');

    formTarefas.on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#input-tarefa').val();
        $(`<li> ${novaTarefa} </li>`).appendTo(listaTarefas);
        $('#input-tarefa').val('');
    });

    listaTarefas.on('click', 'li', function () {
        $(this).toggleClass('completed');
    });
});

