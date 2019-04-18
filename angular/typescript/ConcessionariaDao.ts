import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {
    nomeTabela: string = 'tb_concessionaria'

    inserir(obeject: Concessionaria): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(obeject: Concessionaria): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('lógica delete')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('lógica select')
        return new Concessionaria('', [])
    }

    selecionarTodos(): [Concessionaria] {
        console.log('lógica getAll')
        return [new Concessionaria('', [])]
    }
}