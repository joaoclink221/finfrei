// Importa a função exibicao do módulo exibicao.js
import exibicao from "./exibicao.js";

// Importa o módulo prompt-sync para capturar entradas do usuário via terminal
import prompt from "prompt-sync";
let ler = prompt();

// Exporta a função menu para ser utilizada em outros módulos
export function menu() {

    let escolha; // Variável para armazenar a escolha do usuário

    // Solicita ao usuário o saldo inicial da conta
    console.log("Qual o saldo da sua conta? ");
    let saldo = Number(ler()); // Converte a entrada do usuário para um número

    // Inicia um loop do-while para exibir o menu de opções até que o usuário escolha sair
    do {
        // Exibe as opções do menu
        console.log(
            `Digite 1 para sacar  
            Digite 2 para depositar 
            Digite 3 para checar o saldo
            Digite 4 para simular um investimento
            Digite 5 para fechar o sistema`
        );
        
        escolha = ler(); // Lê a escolha do usuário

        // Chama a função exibicao com a escolha do usuário e o saldo atual
        // Atualiza o saldo com o valor retornado pela função exibicao
        saldo = exibicao(escolha, saldo);
        
        // Exibe o saldo atualizado
        console.log(saldo);
        
    } while (escolha != '5'); // Continua exibindo o menu até que o usuário escolha '5' para sair
}
