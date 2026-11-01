// Implemente aqui a função descrita no README deste exercício.

function classificarNumero(userNumber:number):string {
    if(Number.isFinite(userNumber)){
        if(userNumber < 0){
            return "negativo";
        } else if(userNumber > 0) {
            return "positivo"
        } else if(userNumber === 0){
            return "zero"
        }
    }
    return "Inválido"
}

const inputNumber: number = -Infinity

console.log(classificarNumero(inputNumber))