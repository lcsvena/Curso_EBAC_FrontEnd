$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        const inserirTarefa = $('#novaTarefa').val();
        $(`<li>${inserirTarefa}</li>`).appendTo('ul');
        $('#novaTarefa').val('');
    });

    // Associar o evento de clique à lista <ul> apontando os elementos li separadamente
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    });
});
