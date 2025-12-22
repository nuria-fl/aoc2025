import { describe, it, expect } from "vitest";
import { part1, part2, turnDialToPosition } from "./01.js";

describe("Day 01", () => {
	it("should turn dial to position left", () => {
		const { nextPosition } = turnDialToPosition("L10", 5);
		expect(nextPosition).toBe(95);
	});

	it("should turn dial to position right", () => {
		const { nextPosition } = turnDialToPosition("R5", 95);
		expect(nextPosition).toBe(0);
	});

	it("should count the times we passed through 0 when turning left", () => {
		const { timesTurned } = turnDialToPosition("L10", 5);
		expect(timesTurned).toBe(1);
	});

	it("should count the times we passed through 0 when turning right", () => {
		const { timesTurned } = turnDialToPosition("R10", 95);
		expect(timesTurned).toBe(1);
	});

	it("should solve part 1 with example input", () => {
		const result = part1("01/input-example.txt");

		expect(result).toBe(3);
	});

	it("should solve part 1 with input", () => {
		const result = part1("01/input.txt");
		expect(result).toBe(1195);
	});

	it("should solve part 2 with example input", () => {
		const result = part2("01/input-example.txt");

		expect(result).toBe(6);
	});

	it("should solve part 2 with input", () => {
		const result = part2("01/input.txt");
		expect(result).toBe(6770);
	});
});
