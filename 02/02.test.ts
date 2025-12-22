import { describe, it, expect } from "vitest";
import { isInvalidId, part1 } from "./02";

describe("Day 02", () => {
	it("should check if an id is invalid", () => {
		expect(isInvalidId("11")).toBe(true);
		expect(isInvalidId("12")).toBe(false);
		expect(isInvalidId("101")).toBe(false);
		expect(isInvalidId("1010")).toBe(true);
		expect(isInvalidId("1188511885")).toBe(true);
		expect(isInvalidId("222222")).toBe(true);
		expect(isInvalidId("446446")).toBe(true);
		expect(isInvalidId("38593859")).toBe(true);
	});
	it("should solve part 1 with example input", () => {
		const result = part1("02/input-example.txt");

		expect(result).toBe(1227775554);
	});
	it("should solve part 1 with input", () => {
		const result = part1("02/input.txt");

		expect(result).toBe(28146997880);
	});
});
