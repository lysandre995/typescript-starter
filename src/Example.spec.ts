import { describe, beforeEach, expect, jest, test } from "@jest/globals";
import { Example } from "./Example";

describe("Example", () => {
    let example: Example;

    beforeEach(() => {
        example = new Example();
    });

    describe('addSquares', () => {
        test("normal execution", () => {
            (example as any).square = jest.fn(n => {
                if (n === 3) {
                    return 9;
                } else if (n === 4) {
                    return 16;
                }
            });
            const actualResult = example.addSquares(3, 4);
            expect(actualResult).toBe(25);
        });
    });

    describe("square", () => {
        test("normal execution", () => {
            const actualResult = (example as any).square(7);
            expect(actualResult).toBe(49);
        });
    });
});
