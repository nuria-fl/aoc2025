import { describe, it, expect } from "vitest";
import { part1, part2 } from "./05";

describe("Day 05", () => {
	describe("part 1", () => {
		it("should solve part 1 with example input", () => {
			const result = part1("05/input-example.txt");

			expect(result).toBe(3);
		});

		it("should solve part 1 with  input", () => {
			const result = part1("05/input.txt");

			expect(result).toBe(840);
		});
	});

	describe("part 2", () => {
		it("should solve part 2 with example input", () => {
			const result = part2("05/input-example.txt");

			expect(result).toBe(14);
		});

		it("should solve part 2 with input", () => {
			const result = part2("05/input.txt");

			expect(result).toBe(359913027576322);
		});
	});
});
