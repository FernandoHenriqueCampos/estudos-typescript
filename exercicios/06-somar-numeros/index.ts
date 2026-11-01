function somarNumeros(allNumbers: number[]): number{
    let numbersSum: number = 0;
    for(let i: number = 0; i < allNumbers.length; i++){
        numbersSum += allNumbers[i];
    }
    return numbersSum;
}

const inputNumbers: number[] = [4, -2, 0, 7];

console.log(somarNumeros(inputNumbers))