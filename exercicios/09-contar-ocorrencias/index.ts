function contarOcorrencias(allNumbers: number[], targetNumber: number): number {
    let targetOcurrency: number = 0
    for(let i: number = 0; i < allNumbers.length; i++){
        if(allNumbers[i] === targetNumber) 
            targetOcurrency++
    }
    return targetOcurrency
}

const inputTarget: number = 2
const inputNumbers: number[] = [2, 5, 2, 2, 8]

console.log(contarOcorrencias(inputNumbers,inputTarget))