import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const data = parseInput(file);
	const separator = data.findIndex((line) => line === "");
	const ranges = data
		.slice(0, separator)
		.map((range) => range.split("-").map((num) => parseInt(num, 10)));
	const ids = data.slice(separator + 1).map((id) => parseInt(id, 10));

	const freshIds = ids.filter((id) => {
		const isFresh = ranges.some(([start, end]) => id >= start && id <= end);

		return isFresh;
	});

	return freshIds.length;
}
