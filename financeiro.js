 export function sacar(saldo , saque) {
    saldo-=saque;
    return saldo;
}

export function depositar(saldo, deposito) {
    saldo = saldo + deposito;
    return saldo
}

export function visualizar(saldo) {
    return saldo
}

export function simInv(capitalIni, juros, tempo){
    let retorno = capitalIni * Math.pow((1+ (juros / 100)), tempo)
    return retorno.toFixed(2);
}