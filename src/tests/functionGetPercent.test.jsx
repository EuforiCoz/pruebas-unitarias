import { describe, expect, test } from "vitest"
import { getPercent } from "../utils/Utils"

describe("Test function percent", () => {

    test("calculates the correct percentage", () => {
        const result = getPercent(50, 200);
        expect(result).toBe(25.00);
        expect(typeof result).toBe("number");
        expect(typeof result).not.toBe("string");
    })

    test("throws error if value or total is not a number", () => {
        expect(() => getPercent("50", "200")).toThrow('Both value and total must be numbers')
        expect(() => getPercent("50", 200)).toThrow('Both value and total must be numbers')
        expect(() => getPercent(50, "200")).toThrow('Both value and total must be numbers')
        expect(() => getPercent("abc", 200)).toThrow('Both value and total must be numbers')
        expect(() => getPercent("abchgf", "gfhhgf")).toThrow('Both value and total must be numbers')
    })

    test("if total is 0 throw an error", () => {
        expect(() => getPercent(5, 0)).toThrow('Total must not be zero')
        expect(() => getPercent(5, 0)).toThrowError();
    })

    test("if value is null throw an error", () => {
        expect(() => getPercent(null, 200)).toThrow('Both value and total must be numbers')
        expect(() => getPercent(2, null)).toThrow('Both value and total must be numbers')
        expect(() => getPercent(null, null)).toThrow('Both value and total must be numbers')
        expect(() => getPercent(2, null)).toThrowError();
    })

})