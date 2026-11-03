function somarMaioresQue(allNumber: number[], limit: number): number {
    let sum: number = 0
    for(let i: number = 0; i < allNumber.length; i++){
        if(allNumber[i] > limit)
            sum += allNumber[i]
    }
    return sum
}

const inputNumber: number[] = [4, 9, 2, 7]
const inputLimit: number = 5

console.log(somarMaioresQue(inputNumber,inputLimit))