import { describe, expect, test } from "vitest"
import {intValue } from "../utils/Utils"

describe("test intValue", () => {

    test("should return true for a value integer string", () => {
        expect(intValue("123")).toBe(true);
        expect(intValue("0")).toBe(true);
    })

    test("should return false for a not value integer", () => {
        expect(intValue("camila")).toBe(false);
        expect(intValue(null)).toBe(false);
        expect(intValue(undefined)).toBe(false);
        expect(intValue("0.5")).toBe(false);
    })

    test("should return false for an empty value or empty space", () => {
        expect(intValue("6543 ")).toBe(false);
        expect(intValue("")).toBe(false);
        expect(intValue("unde fined")).toBe(false);
    })

    test("should return false for a negative value", () => {
        expect(intValue("-6543")).toBe(false);
        expect(intValue("-5.5")).toBe(false);
        expect(intValue("-10.5")).toBe(false);
    })
})