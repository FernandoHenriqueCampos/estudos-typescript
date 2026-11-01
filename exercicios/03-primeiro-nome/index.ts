function primeiroNome(allNames: string[]): string{
    return allNames[0].split(" ")[0]
}

const names: string[] = ["Ana Luiza", "Rui"]

console.log(primeiroNome(names))
