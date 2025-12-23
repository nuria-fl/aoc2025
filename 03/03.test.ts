import { describe, it, expect } from "vitest";
import { getVoltage, part1, part2 } from "./03";

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
	describe("part 2", () => {
		it("should get voltage", () => {
			const result = getVoltage("811111111111119");

			expect(result).toBe("811111111119");
		});
		it("should solve part 2 with input", () => {
			const result = part2("03/input-example.txt");

			expect(result).toBe(3121910778619);
		});

		it("should solve part 2 with input", () => {
			const result = part2("03/input.txt");

			expect(result).toBe(171039099596062);
		});
	});
});
