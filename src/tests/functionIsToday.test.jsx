import { describe, expect, test } from "vitest"
import { isToday } from "../utils/Utils"

describe("test isToday", () => {

    test("should the return true for todays date", () => {
        const now = new Date();
        expect(isToday(now)).toBe(true);
        expect(isToday("2024-06-20")).toBe(true);
    })

    test("isToday function should the return false for a past day", () => {
        const pastDate = new Date("2010-01-01")
        expect(isToday(pastDate)).toBe(false);
    })

    test("isToday function should the return false for a future day", () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1);
        expect(isToday(futureDate)).toBe(false);
    })

    test("throw an error for an invalid date string", () => {
        expect(() => {
            isToday("Daniel")
        }).toThrow("Invalid date")
    })

    test("throw an error for an invalid date object", () => {
        expect(() => {
            isToday({})
        }).toThrow("Invalid date")
    })

    test("throw an error for an invalid date null", () => {
        expect(() => {
            isToday(null)
        }).toThrow("Invalid date")
    })

    test("throw an error for an invalid date undefined", () => {
        expect(() => {
            isToday(undefined)
        }).toThrow("Invalid date")
    })

    test("throw an error for a number", () => {
        expect(() => {
            isToday(342)
        }).toThrow("Invalid date")
    })
})