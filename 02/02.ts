import { parseInput } from "../parseInput";

export function isInvalidId(num: string): boolean {
	if (num.length % 2 !== 0) {
		return false;
	}

	const halfLength = num.length / 2;
	const firstHalf = num.slice(0, halfLength);
	const secondHalf = num.slice(halfLength);

	return firstHalf.split("").every((char, index) => char === secondHalf[index]);
}

export function part1(file: string): number {
	const data = parseInput(file)[0].split(",");

	let invalidIds = 0;

	data.forEach((entry) => {
		const [start, end] = entry.split("-");

		for (let i = parseInt(start); i <= parseInt(end); i++) {
			if (isInvalidId(i.toString())) {
				invalidIds += i;
			}
		}
	});

	return invalidIds;
}

export function isInvalidId2(num: string): boolean {
	if (num.length <= 1) {
		return false;
	}

	const halfLength = Math.floor(num.length / 2);

	for (let i = 1; i <= halfLength; i += 1) {
		if (new RegExp(`^(.{${i}})\\1+$`).test(num)) {
			return true;
		}
	}

	return false;
}

export function part2(file: string): number {
	const data = parseInput(file)[0].split(",");

	let invalidIds = 0;

	data.forEach((entry) => {
		const [start, end] = entry.split("-");

		for (let i = parseInt(start); i <= parseInt(end); i++) {
			if (isInvalidId2(i.toString())) {
				invalidIds += i;
			}
		}
	});

	return invalidIds;
}
