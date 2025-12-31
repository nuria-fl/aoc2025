import { describe, it, expect } from "vitest";
import { part1 } from "./07";

describe("Day 06", () => {
	describe("part 1", () => {
		it("should solve part 1 with example input", () => {
			const result = part1("07/input-example.txt");

			expect(result).toBe(21);
		});
		it("should solve part 1 with input", () => {
			const result = part1("07/input.txt");

			expect(result).toBe(1609);
		});
	});
});
