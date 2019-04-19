//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
//import { CarroDao } from './CarroDao'
//import { MotoDao } from './MotoDao'

import { Dao } from './Dao';

import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import Carro from './Carro'
import Moto from './Moto'

//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//let dao3: CarroDao = new CarroDao()
//let dao4: MotoDao = new MotoDao()

let concessionaria = new Concessionaria('', [])
let pessoa: Pessoa = new Pessoa('', '')
let carro: Carro = new Carro('', 0)
let moto: Moto = new Moto()

let dao5: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao6: Dao<Pessoa> = new Dao<Pessoa>()

dao5.inserir(concessionaria)

dao6.remover(5)