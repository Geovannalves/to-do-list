// Adiciona um evento de envio ao formulário
formTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o envio padrão do formulário
    const textoTarefa = entradaTarefa.value.trim();
    if (textoTarefa !== '') {
        adicionarTarefa(textoTarefa);
        entradaTarefa.value = ''; // Limpa o campo de entrada
    }
});

function adicionarTarefa(texto) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.className = 'complete';
    botaoConcluir.addEventListener('click', () => {
        moverParaConcluidas(li, span);
    });

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'remove';
    botaoRemover.addEventListener('click', () => {
        listaTarefas.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(botaoConcluir);
    li.appendChild(botaoRemover);
    listaTarefas.appendChild(li);
}

function moverParaConcluidas(tarefa, span) {
    // emove a tarefa da lista de pendentes
    listaTarefas.removeChild(tarefa);

    // Cria um novo item de lista para as tarefas concluídas
    const liConcluida = document.createElement('li');
    liConcluida.classList.add('completed');

    const spanConcluido = document.createElement('span');
    spanConcluido.textContent = span.textContent;

    const botaoRemoverConcluida = document.createElement('button');
    botaoRemoverConcluida.textContent = 'Remover';
    botaoRemoverConcluida.className = 'remove';
    botaoRemoverConcluida.addEventListener('click', () => {
        listaConcluidas.removeChild(liConcluida);
    });

    liConcluida.appendChild(spanConcluido);
    liConcluida.appendChild(botaoRemoverConcluida);
    listaConcluidas.appendChild(liConcluida);
}
