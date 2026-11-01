function contarPositivos(allNumbers: number[]): number {
    let positiveNumbers: number = 0
    for(let i: number = 0; i < allNumbers.length; i ++) {
        if(allNumbers[i] > 0)
            positiveNumbers++
    }
    return positiveNumbers
}

const inputNumbers: number[] = [4, -2, 0, 7]

console.log(contarPositivos(inputNumbers))