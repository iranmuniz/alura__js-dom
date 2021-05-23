// Colocando um botão dentro da Lista <li>
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

// Rabisca o item adicionado na Lista
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConclui