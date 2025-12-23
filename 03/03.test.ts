import { describe, it, expect } from "vitest";
import { part1 } from "./03";

describe("Day 03", () => {
	describe("part 1", () => {
		it("should solve part 1 with example input", () => {
			const result = part1("03/input-example.txt");

			expect(result).toBe(357);
		});

		it("should solve part 1 with input", () => {
			const result = part1("03/input.txt");

			expect(result).toBe(17196);
		});
	});
});
