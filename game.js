
export class Game {

    constructor() {

        this.rounds = 0
        this.quemVenceu = null

    }

    condicaoVitoria(player1, player2) {

        if (player1.vitorias >= 10) {
            console.log('player 1 venceu')
            return player1
        }

        if (player2.vitorias >= 10) {
            console.log('player 2 venceu')
            return player2
        }

        return null

    }

    gerenciarRound(player1, player2) {

        //colocar um impedimento se this.quemVenceu != null

        if(this.quemVenceu != null){
            return
        }

        let descricao

        if (player1.mao.forteContra == player2.mao.nome) {

            descricao = 
                player1.apelido+' usou '+
                player1.mao.nome + ' ----- ' + player2.apelido + ' usou '+
                player2.mao.nome + ' e resultou em vitória de ' +
                player1.apelido

            player1.vitorias++
            player2.derrotas++

        }

        else if (player2.mao.forteContra == player1.mao.nome) {

            descricao = 
                player1.apelido+' usou '+
                player1.mao.nome + ' ----- ' + player2.apelido + ' usou '+
                player2.mao.nome + ' e resultou em vitória de ' +
                player2.apelido

            player1.derrotas++
            player2.vitorias++

        }

        else {

            descricao =
                player1.apelido+' usou '+
                player1.mao.nome + ' ----- ' + player2.apelido + ' usou '+
                player2.mao.nome + ' e resultou em empate'

            player1.empates++
            player2.empates++

        }

        this.rounds++

        this.quemVenceu = this.condicaoVitoria(player1, player2)

        this.renderizar(player1, player2, descricao)

    }

    renderizar(player1, player2, descricao) {

        document.getElementById('apelido1').textContent = 'Apelido: '+player1.apelido
        document.getElementById('vitorias1').textContent = 'Vitórias: '+player1.vitorias
        document.getElementById('derrotas1').textContent = 'Derrotas: '+player1.derrotas
        document.getElementById('empates1').textContent = 'Empates: '+player1.empates
        
        document.getElementById('apelido2').textContent = 'Apelido: '+player2.apelido
        document.getElementById('vitorias2').textContent = 'Vitórias: '+player2.vitorias
        document.getElementById('derrotas2').textContent = 'Derrotas: '+player2.derrotas
        document.getElementById('empates2').textContent = 'Empates: '+player2.empates

        document.getElementById('descricao').textContent = descricao

        document.getElementById('quantidadeRounds').textContent = 'Quantidade de Rounds: '+this.rounds

    }

    reiniciar(player1, player2) {

        this.rounds = 0
        this.quemVenceu = null

        player1.mao = null
        player1.vitorias = 0
        player1.derrotas = 0
        player1.empates = 0

        player2.mao = null
        player2.vitorias = 0
        player2.derrotas = 0
        player2.empates = 0

        this.renderizar(player1, player2, null)

    }

}