import exibicao from "./exibicao.js";

import prompt from "prompt-sync"
let ler = prompt();

export function menu(){

let escolha;

console.log("Qual o saldo da sua conta? ");

let saldo = Number(ler());

do {
    console.log(
    `digite 1 para sacar  
    digite 2 para depositar 
    digite 3 para checar o saldo
    digite 4 para simular um investimento
    digite 5 para fechar o sistema`);
     escolha = ler();

    saldo = exibicao(escolha, saldo);
    console.log(saldo);
    
    
} while (escolha != '5');
}