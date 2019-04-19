"use strict";
//import { ConcessionariaDao } from './ConcessionariaDao'
//import { PessoaDao } from './PessoaDao'
//import { CarroDao } from './CarroDao'
//import { MotoDao } from './MotoDao'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//let dao3: CarroDao = new CarroDao()
//let dao4: MotoDao = new MotoDao()
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.default('', '');
var carro = new Carro_1.default('', 0);
var moto = new Moto_1.default();
var dao5 = new Dao_1.Dao();
var dao6 = new Dao_1.Dao();
dao5.inserir(concessionaria);
dao6.remover(5);
