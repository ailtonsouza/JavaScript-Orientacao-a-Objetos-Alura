import { Conta } from './Conta.js';
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo", 1112121212);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupancaRicardo = new ContaPoupanca(50, cliente1, 1001);
contaPoupancaRicardo.sacar(10);

console.log(contaCorrenteRicardo);
console.log(contaPoupancaRicardo);