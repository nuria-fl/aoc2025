import { describe, it, expect } from "vitest";
import { isInvalidId, isInvalidId2, part1, part2 } from "./02";

describe("Day 02", () => {
	describe("part 1", () => {
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

	describe("part 2", () => {
		it("should check if an id is invalid", () => {
			expect(isInvalidId2("11")).toBe(true);
			expect(isInvalidId2("12")).toBe(false);
			expect(isInvalidId2("999")).toBe(true);
			expect(isInvalidId2("1010")).toBe(true);
			expect(isInvalidId2("1188511885")).toBe(true);
			expect(isInvalidId2("222222")).toBe(true);
			expect(isInvalidId2("446446")).toBe(true);
			expect(isInvalidId2("38593859")).toBe(true);
			expect(isInvalidId2("565656")).toBe(true);
			expect(isInvalidId2("824824824")).toBe(true);
			expect(isInvalidId2("2121212121")).toBe(true);
		});

		it("should solve part 1 with example input", () => {
			const result = part2("02/input-example.txt");

			expect(result).toBe(4174379265);
		});

		it("should solve part 2 with input", () => {
			const result = part2("02/input.txt");

			expect(result).toBe(40028128307);
		});
	});
});
