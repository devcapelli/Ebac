$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li></li>');
        $(`<img src="$(enderecoDaNovaImagem)" />`).appendTo(novoItem);
        $(
            `<div class="overlay-imagem-link">
            <a href="$("enderecoDaNovaImagem" target="_blank" title="Ver imagem em tamanho real"
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
    })
})