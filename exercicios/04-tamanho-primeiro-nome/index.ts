function tamanhoPrimeiroNome(allNames: string[]): number{
    return allNames[0].split(" ")[0].length
}

const inputNames: string[] = ["Ana Luiza", "Rui"]

console.log("O primeiro nome tem " + tamanhoPrimeiroNome(inputNames) + " letras")