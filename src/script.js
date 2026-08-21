const formulario = document.querySelector("#form-tarefa");
const campoTarefa = document.querySelector("#campo-tarefa");
const listaTarefas = document.querySelector("#lista-tarefas");
const mensagemVazia = document.querySelector("#mensagem-vazia");
const contador = document.querySelector("#contador");

let tarefas = JSON.parse(
    localStorage.getItem("codefactory-tarefas")
) || [];

function salvarTarefas() {
    localStorage.setItem(
        "codefactory-tarefas",
        JSON.stringify(tarefas)
    );
}

function atualizarContador() {
    const quantidade = tarefas.length;

    contador.textContent =
        quantidade === 1
            ? "1 tarefa"
            : `${quantidade} tarefas`;
}

function renderizarTarefas() {
    listaTarefas.innerHTML = "";

    mensagemVazia.hidden = tarefas.length > 0;

    tarefas.forEach((tarefa) => {
        const item = document.createElement("li");
        item.classList.add("tarefa");

        if (tarefa.concluida) {
            item.classList.add("concluida");
        }

        const caixaSelecao = document.createElement("input");
        caixaSelecao.type = "checkbox";
        caixaSelecao.checked = tarefa.concluida;

        caixaSelecao.addEventListener("change", () => {
            tarefa.concluida = caixaSelecao.checked;
            salvarTarefas();
            renderizarTarefas();
        });

        const texto = document.createElement("span");
        texto.textContent = tarefa.titulo;

        const botaoExcluir = document.createElement("button");
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("botao-excluir");

        botaoExcluir.addEventListener("click", () => {
            tarefas = tarefas.filter(
                (itemAtual) => itemAtual.id !== tarefa.id
            );

            salvarTarefas();
            renderizarTarefas();
        });

        item.append(
            caixaSelecao,
            texto,
            botaoExcluir
        );

        listaTarefas.appendChild(item);
    });

    atualizarContador();
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titulo = campoTarefa.value.trim();

    if (!titulo) {
        return;
    }

    tarefas.push({
        id: Date.now(),
        titulo,
        concluida: false
    });

    salvarTarefas();
    renderizarTarefas();

    formulario.reset();
    campoTarefa.focus();
});

renderizarTarefas();