import { parseInput } from "../parseInput";

export function turnDialToPosition(
	instruction: string,
	currentPosition: number
): { nextPosition: number; timesTurned: number } {
	const direction = instruction.charAt(0) as "L" | "R";
	const steps = parseInt(instruction.slice(1));

	const nextPosition =
		direction === "L"
			? (((currentPosition - steps) % 100) + 100) % 100
			: (currentPosition + steps) % 100;

	const firstZeroAt =
		direction === "L"
			? currentPosition === 0
				? 0
				: currentPosition
			: currentPosition === 0
			? 0
			: 100 - currentPosition;

	const timesTurned =
		firstZeroAt < steps ? 1 + Math.floor((steps - firstZeroAt - 1) / 100) : 0;

	return {
		nextPosition,
		timesTurned,
	};
}

export function part1(file: string): number {
	const initialPosition = 50;
	const data = parseInput(file);

	let currentValue = initialPosition;
	let password = 0;

	for (let instruction of data) {
		const { nextPosition } = turnDialToPosition(instruction, currentValue);
		currentValue = nextPosition;

		if (currentValue === 0) {
			password += 1;
		}
	}

	return password;
}

export function part2(file: string): number {
	const initialPosition = 50;
	const data = parseInput(file);

	let currentValue = initialPosition;
	let password = 0;

	for (let instruction of data) {
		const { nextPosition, timesTurned } = turnDialToPosition(
			instruction,
			currentValue
		);
		currentValue = nextPosition;
		password += timesTurned;
	}

	return password;
}
