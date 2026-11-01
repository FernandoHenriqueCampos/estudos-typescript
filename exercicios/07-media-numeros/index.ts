function calcularMedia(allNumbers: number[]):number {
    let media: number = 0;
    for(let i:number = 0; i < allNumbers.length; i++) {
        media += allNumbers[i];
    }
    return media = media / allNumbers.length;
}

const inputNumbers: number[] = [4, 6, 8];

console.log(calcularMedia(inputNumbers));