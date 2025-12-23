import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const grid = parseInput(file).map((line) => line.split(""));

	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			let adjacentRolls = 0;
			if (grid[i][j] === "@") {
				if (grid[i + 1]?.[j] === "@") {
					adjacentRolls++;
				}
				if (grid[i - 1]?.[j] === "@") {
					adjacentRolls++;
				}
				if (grid[i]?.[j + 1] === "@") {
					adjacentRolls++;
				}
				if (grid[i]?.[j - 1] === "@") {
					adjacentRolls++;
				}
				if (grid[i + 1]?.[j + 1] === "@") {
					adjacentRolls++;
				}
				if (grid[i + 1]?.[j - 1] === "@") {
					adjacentRolls++;
				}
				if (grid[i - 1]?.[j + 1] === "@") {
					adjacentRolls++;
				}
				if (grid[i - 1]?.[j - 1] === "@") {
					adjacentRolls++;
				}
				if (adjacentRolls < 4) {
					count++;
				}
			}
		}
	}

	return count;
}
