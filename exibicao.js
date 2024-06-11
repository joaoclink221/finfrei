import {sacar} from "./financeiro.js";
import  {depositar}  from "./financeiro.js";
import  {visualizar}  from "./financeiro.js";
import { simInv } from "./financeiro.js";

import prompt from "prompt-sync"

let ler = prompt();
let alteracao = 0;

export default function exibicao(escolha, saldo) {

    switch (escolha) {
        case '1':
            console.log("Qual o valor que você quer sacar?");
            alteracao = Number(ler())
            return  sacar(saldo, alteracao)
            
            
        case '2':
            console.log("Qual o valor que você quer depositar?");
            alteracao = Number(ler())
            return depositar(saldo, alteracao) 
            
            
        case '3':
            return visualizar(saldo)
        
        case '4':
            let capitalIni, juros, tempo;

            console.log("Qual o capital inicial do investimento?");
            capitalIni = Number(ler())

            console.log("Qual a taxa de juros?");
            juros = Number(ler())

            console.log("Qual o tempo que o dinheiro ficará rendendo?");
            tempo = Number(ler())

            return simInv(capitalIni, juros, tempo)
    }
}