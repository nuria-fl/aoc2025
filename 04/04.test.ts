import { describe, it, expect } from "vitest";
import { part1 } from "./04";

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
});
