
import {Player as Player} from './player.js'

export class Computer extends Player {

    escolherMao(){

        let opcoes = [this.PEDRA, this.PAPEL, this.TESOURA]

        this.mao = opcoes[
            Math.floor( Math.random() * (3 - 0 ) )
        ]

    }

}