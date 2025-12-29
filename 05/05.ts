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

const mergeRanges = (ranges: number[][]): number[][] => {
	if (ranges.length === 0) {
		return [];
	}

	const merged: number[][] = [];
	let [currentStart, currentEnd] = ranges[0];

	for (let i = 1; i < ranges.length; i++) {
		const [nextStart, nextEnd] = ranges[i];

		if (nextStart <= currentEnd + 1) {
			currentEnd = Math.max(currentEnd, nextEnd);
		} else {
			merged.push([currentStart, currentEnd]);
			currentStart = nextStart;
			currentEnd = nextEnd;
		}
	}

	merged.push([currentStart, currentEnd]);

	return merged;
};

export function part2(file: string): number {
	const data = parseInput(file);
	const separator = data.findIndex((line) => line === "");
	const ranges = data
		.slice(0, separator)
		.map((range) => range.split("-").map((num) => parseInt(num, 10)))
		.sort((a, b) => a[0] - b[0]);

	const mergedRanges = mergeRanges(ranges);

	return mergedRanges.reduce(
		(total, [start, end]) => total + (end - start + 1),
		0
	);
}
