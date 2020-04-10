export class Calculator{
    public add(a: number, b: number){
        return a + b;
    }
    private subtract(a: number, b: number){
        return a - b;
    }
}

const calculator = new Calculator();

console.log(calculator.add(1, 2));