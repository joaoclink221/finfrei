// Função para sacar um valor do saldo
// Parâmetros:
// - saldo: o saldo atual da conta
// - saque: o valor a ser sacado
// Retorna o saldo atualizado após o saque
export function sacar(saldo , saque) {
    saldo -= saque; // Subtrai o valor do saque do saldo
    return saldo; // Retorna o saldo atualizado
}

// Função para depositar um valor no saldo
// Parâmetros:
// - saldo: o saldo atual da conta
// - deposito: o valor a ser depositado
// Retorna o saldo atualizado após o depósito
export function depositar(saldo, deposito) {
    saldo = saldo + deposito; // Adiciona o valor do depósito ao saldo
    return saldo; // Retorna o saldo atualizado
}

// Função para visualizar o saldo
// Parâmetros:
// - saldo: o saldo atual da conta
// Retorna o saldo atual
export function visualizar(saldo) {
    return saldo; // Retorna o saldo atual
}

// Função para simular um investimento
// Parâmetros:
// - capitalIni: o capital inicial investido
// - juros: a taxa de juros anual em porcentagem
// - tempo: o tempo do investimento em anos
// Retorna o valor final do investimento após o período especificado, formatado com duas casas decimais
export function simInv(capitalIni, juros, tempo) {
    let retorno = capitalIni * Math.pow((1 + (juros / 100)), tempo); // Calcula o valor final do investimento usando a fórmula de juros compostos
    return retorno.toFixed(2); // Retorna o valor final formatado com duas casas decimais
}
