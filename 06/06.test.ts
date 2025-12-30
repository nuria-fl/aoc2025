import { describe, it, expect } from "vitest";
import { part1, part2 } from "./06";

describe("Day 06", () => {
	describe("part 1", () => {
		it("should solve part 1 with example input", () => {
			const result = part1("06/input-example.txt");

			expect(result).toBe(4277556);
		});
		it("should solve part 1 with input", () => {
			const result = part1("06/input.txt");

			expect(result).toBe(3968933219902);
		});
	});

	describe("part 2", () => {
		it("should solve part 2 with example input", () => {
			const result = part2("06/input-example.txt");

			expect(result).toBe(3263827);
		});

		it("should solve part 2 with input", () => {
			const result = part2("06/input.txt");

			expect(result).toBe(6019576291014);
		});
	});
});
