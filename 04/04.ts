import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const grid = parseInput(file).map((line) => line.split(""));
	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	return grid
		.flatMap((row, i) => row.map((cell, j) => ({ cell, i, j })))
		.filter(({ cell, i, j }) => {
			if (cell !== "@") {
				return false;
			}
			const adjacentRolls = directions.filter(
				([di, dj]) => grid[i + di]?.[j + dj] === "@"
			).length;

			return adjacentRolls < 4;
		}).length;
}

export function part2(file: string): number {
	const grid = parseInput(file).map((line) => line.split(""));
	const directions = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1],
	];

	const copyGrid = grid.map((row) => [...row]);

	let pickedUpRolls = true;

	let count = 0;

	while (pickedUpRolls) {
		const pickedRolls = copyGrid
			.flatMap((row, i) => row.map((cell, j) => ({ cell, i, j })))
			.filter(({ cell, i, j }) => {
				if (cell !== "@") {
					return false;
				}
				const adjacentRolls = directions.filter(
					([di, dj]) => copyGrid[i + di]?.[j + dj] === "@"
				).length;

				const hasPickedRoll = adjacentRolls < 4;

				if (hasPickedRoll) {
					copyGrid[i][j] = ".";
				}

				return hasPickedRoll;
			}).length;

		count += pickedRolls;
		if (pickedRolls === 0) {
			pickedUpRolls = false;
			break;
		}
	}
	return count;
}
