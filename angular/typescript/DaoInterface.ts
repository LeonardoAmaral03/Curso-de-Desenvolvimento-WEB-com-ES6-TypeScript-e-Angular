export interface DaoInterface {
    nomeTabela: string

    inserir(obeject: any): boolean
    atualizar(obeject: any): boolean
    remover(id: number): any
    selecionar(id: number): any
    selecionarTodos(): [any]
}