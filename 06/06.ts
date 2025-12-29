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
