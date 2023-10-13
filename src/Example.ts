export class Example {
    public addSquares(a: number, b: number): number {
        return this.square(a) + this.square(b);
    }

    private square(n: number): number {
        return n ** 2;
    }
}
