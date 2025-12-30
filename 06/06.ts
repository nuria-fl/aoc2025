import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const lines = parseInput(file).map((line) =>
		line.split(" ").filter((item) => item.length > 0)
	);

	const operations = lines[lines.length - 1];
	const numberRows = lines.slice(0, -1);

	const numbers = numberRows.map((row) =>
		row.map((item) => parseInt(item, 10))
	);

	const results = operations.map((operation, colIndex) => {
		const columnValues = numbers.map((row) => row[colIndex]);

		if (operation === "+") {
			return columnValues.reduce((sum, value) => sum + value, 0);
		}

		if (operation === "*") {
			return columnValues.reduce((product, value) => product * value, 1);
		}

		throw new Error(`Unknown operation: ${operation}`);
	});

	return results.reduce((total, result) => total + result, 0);
}

export function part2(file: string): number {
	const lines = parseInput(file, true).map((line) => line.split(""));

	const rearrangedLines: string[][] = [];
	for (let i = 0; i < lines.length; i++) {
		for (let j = 0; j < lines[0].length; j++) {
			if (rearrangedLines[j] === undefined) {
				rearrangedLines[j] = [];
			}
			rearrangedLines[j][i] = lines[i][j];
		}
	}

	const operations = rearrangedLines
		.map((line) => {
			return line.pop() as string;
		})
		.filter((item) => item.trim().length > 0);

	const numbers = rearrangedLines.map((line) => parseInt(line.join(""), 10));

	const groupedNumbers = numbers.reduce((acc, curr) => {
		if (acc.length === 0) {
			acc.push([curr]);
			return acc;
		}
		if (isNaN(curr)) {
			acc.push([]);
			return acc;
		}
		acc[acc.length - 1].push(curr);
		return acc;
	}, [] as number[][]);

	const results = operations.map((operation, colIndex) => {
		const columnValues = groupedNumbers[colIndex];

		if (operation === "+") {
			return columnValues.reduce((sum, value) => sum + value, 0);
		}

		if (operation === "*") {
			return columnValues.reduce((product, value) => product * value, 1);
		}

		throw new Error(`Unknown operation: ${operation}`);
	});

	return results.reduce((total, result) => total + result, 0);
}
