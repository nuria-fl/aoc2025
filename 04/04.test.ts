import { describe, it, expect } from "vitest";
import { part1, part2 } from "./04";

describe("Day 04", () => {
	describe("part 1", () => {
		it("should solve part 1 with example input", () => {
			const result = part1("04/input-example.txt");

			expect(result).toBe(13);
		});

		it("should solve part 1 with input", () => {
			const result = part1("04/input.txt");

			expect(result).toBe(1493);
		});
	});
	describe("part 2", () => {
		it("should solve part 2 with example input", () => {
			const result = part2("04/input-example.txt");

			expect(result).toBe(43);
		});
		it("should solve part 2 with input", () => {
			const result = part2("04/input.txt");

			expect(result).toBe(9194);
		});
	});
});
