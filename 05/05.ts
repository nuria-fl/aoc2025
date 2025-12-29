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

const isInAnyRange = (ranges: number[][], currentRange: number[]): boolean => {
	return ranges.some(
		([start, end]) => currentRange[0] >= start && currentRange[1] <= end
	);
};

const isPartiallyOverlappingWithAnyRange = (
	ranges: number[][],
	currentRange: number[]
): boolean => {
	return ranges.some(
		([start, end]) => currentRange[0] <= end || currentRange[1] >= start
	);
};

const mergeRanges = (ranges: number[][]): number[][] => {
	let mergedRanges = [];

	for (let i = 0; i < ranges.length; i++) {
		const currentRange = ranges[i];
		if (isInAnyRange(mergedRanges, currentRange)) {
			// do nothing
			continue;
		}

		if (isPartiallyOverlappingWithAnyRange(mergedRanges, currentRange)) {
			let hasMerged = false;
			for (let j: number = mergedRanges.length - 1; j >= 0; j--) {
				const prevRange: number[] = mergedRanges[j];

				if (
					currentRange[1] >= prevRange[0] &&
					currentRange[0] <= prevRange[1]
				) {
					mergedRanges[j] = [prevRange[0], currentRange[1]];
					hasMerged = true;
					break;
				}
			}
			if (hasMerged) {
				continue;
			}
		}

		let last = currentRange[1];

		for (let j = i + 1; j < ranges.length; j++) {
			const nextRange = ranges[j];

			const isOverlapping =
				currentRange[1] >= nextRange[0] && currentRange[0] <= nextRange[1];

			if (nextRange && isOverlapping && last <= nextRange[1]) {
				last = nextRange[1];
			}
		}

		mergedRanges.push([currentRange[0], last]);
	}

	return mergedRanges;
};

export function part2(file: string): number {
	const data = parseInput(file);
	const separator = data.findIndex((line) => line === "");
	const ranges = data
		.slice(0, separator)
		.map((range) => range.split("-").map((num) => parseInt(num, 10)))
		.sort((a, b) => a[0] - b[0]);

	let mergedRanges = mergeRanges(ranges);

	let count = 0;
	mergedRanges.forEach((range) => {
		count += range[1] - range[0] + 1;
	});

	return count;
}
