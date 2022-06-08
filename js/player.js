
export class Player {

    constructor(apelido, mao, vitorias, derrotas, empates){

        this.apelido = apelido
        this.mao = mao
        this.vitorias = vitorias
        this.derrotas = derrotas
        this.empates = empates

        this.PEDRA = {
            nome: 'pedra',
            forteContra: 'tesoura',
            fracoContra: 'papel'
        }

        this.TESOURA = {
            nome: 'tesoura',
            forteContra: 'papel',
            fracoContra: 'pedra'
        }

        this.PAPEL = {
            nome: 'papel',
            forteContra: 'pedra',
            fracoContra: 'tesoura'
        }

    }

    escolherMao(opcao){
        switch(opcao){

            case 'pedra':
                this.mao = this.PEDRA
                break
            case 'papel':
                this.mao = this.PAPEL
                break
            case 'tesoura':
                this.mao = this.TESOURA
                break
            default:
                this.mao = null

        }
    }

}
