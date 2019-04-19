export interface DaoInterface<T> {
    nomeTabela: string

    inserir(obeject: T): boolean
    atualizar(obeject: T): boolean
    remover(id: number): T
    selecionar(id: number): T
    selecionarTodos(): [T]
}