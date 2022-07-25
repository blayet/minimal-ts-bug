

export class Math {
    value: number;

    constructor(value: number) {
        this.value = value;
    }

    divide(dividend: number) {
        return this.value / dividend;
    }
}