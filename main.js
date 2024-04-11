$(document).ready(function() {
    // Evento de clique no botão "Adicionar"
    $('button').click(function() {
        // Obter os valores dos campos de entrada
        var dataTarefa = $('#data-da-tarefa').val();
        var descricaoTarefa = $('#descreva-a-tarefa').val();
        
        // Verificar se a descrição da tarefa não está vazia
        if (descricaoTarefa.trim() !== '') {
            // Construir o HTML para a nova tarefa
            var novaTarefa = '<li><h3>' + descricaoTarefa + '</h3><p>Data: ' + dataTarefa + '</p></li>';
            
            // Adicionar a nova tarefa à lista
            $('ul').append(novaTarefa);
            
            // Limpar os campos de entrada após adicionar a tarefa
            $('#data-da-tarefa').val('');
            $('#descreva-a-tarefa').val('');
        }
    });

    // Evento de clique em um item da lista para aplicar o efeito
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

const itens = document.querySelectorAll('ul#lista li');

// Adiciona um event listener a cada item da lista
itens.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle da classe 'completed' para aplicar ou remover o estilo de linha
        item.classList.toggle('completed');
    });
});
