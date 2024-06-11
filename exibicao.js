// Importa as funções do módulo financeiro.js
import { sacar } from "./financeiro.js";
import { depositar } from "./financeiro.js";
import { visualizar } from "./financeiro.js";
import { simInv } from "./financeiro.js";

// Importa o módulo prompt-sync para capturar entradas do usuário via terminal
import prompt from "prompt-sync";
let ler = prompt(); // Associa a função de leitura à variável ler
let alteracao = 0; // Variável para armazenar valores de saque ou depósito

// Exporta a função exibicao como padrão
export default function exibicao(escolha, saldo) {
    // Executa diferentes ações baseadas na escolha do usuário
    switch (escolha) {
        case '1':
            // Caso a escolha seja '1', solicita o valor do saque
            console.log("Qual o valor que você quer sacar?");
            alteracao = Number(ler()); // Converte a entrada do usuário para número
            return sacar(saldo, alteracao); // Chama a função sacar e retorna o saldo atualizado
            
        case '2':
            // Caso a escolha seja '2', solicita o valor do depósito
            console.log("Qual o valor que você quer depositar?");
            alteracao = Number(ler()); // Converte a entrada do usuário para número
            return depositar(saldo, alteracao); // Chama a função depositar e retorna o saldo atualizado
            
        case '3':
            // Caso a escolha seja '3', exibe o saldo atual
            return visualizar(saldo); // Chama a função visualizar e retorna o saldo atual
        
        case '4':
            // Caso a escolha seja '4', solicita os parâmetros para a simulação de investimento
            let capitalIni, juros, tempo;

            console.log("Qual o capital inicial do investimento?");
            capitalIni = Number(ler()); // Converte a entrada do usuário para número

            console.log("Qual a taxa de juros?");
            juros = Number(ler()); // Converte a entrada do usuário para número

            console.log("Qual o tempo que o dinheiro ficará rendendo?");
            tempo = Number(ler()); // Converte a entrada do usuário para número

            return simInv(capitalIni, juros, tempo); // Chama a função simInv e retorna o valor do investimento simulado

        default:
            // Caso a escolha não seja reconhecida, retorna o saldo sem alterações
            return saldo;
    }
}
