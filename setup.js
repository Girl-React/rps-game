import { Game as Game } from "./game.js";
import { Computer as Computer } from "./js/computer.js";
import { Player as Player } from "./js/player.js";

const player1 = new Player('nemo', null, 0, 0, 0)
const computer = new Computer('dory', null, 0, 0, 0)

const app = new Game()

const botaoPedra = document.getElementById('botaoPedra')
const botaoPapel = document.getElementById('botaoPapel')
const botaoTesoura = document.getElementById('botaoTesoura')
const botaoReiniciar = document.getElementById('reiniciar')

app.renderizar(player1, computer)

botaoPedra.addEventListener('click', ()=>{

    player1.escolherMao('pedra')
    computer.escolherMao()

    app.gerenciarRound(player1, computer)

})

botaoPapel.addEventListener('click', ()=>{

    player1.escolherMao('papel')
    computer.escolherMao()

    app.gerenciarRound(player1, computer)

})

botaoTesoura.addEventListener('click', ()=>{

    player1.escolherMao('tesoura')
    computer.escolherMao()
    
    app.gerenciarRound(player1, computer)

})

botaoReiniciar.addEventListener('click', ()=>{

    app.reiniciar(player1, computer)

})