function maiorNumero(allNumbers: number[]): number {
    let highNumber: number = allNumbers[0]
    for(let i:number = 1; i < allNumbers.length; i++) {
        if(allNumbers[i] > highNumber)
            highNumber = allNumbers[i]
    }
    return highNumber
}

const inputNumber: number[] = [4, -2, 0, 7]

console.log(maiorNumero(inputNumber))