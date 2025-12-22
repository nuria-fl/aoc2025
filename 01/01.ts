import { parseInput } from "../parseInput";

export function turnDialToPosition(
	instruction: string,
	currentPosition: number
): { nextPosition: number; timesTurned: number } {
	const direction = instruction.charAt(0) as "L" | "R";
	const steps = parseInt(instruction.slice(1));
	let nextPosition = currentPosition;
	let timesTurned = 0;

	for (let i = 0; i < steps; i++) {
		if (nextPosition === 0) {
			timesTurned += 1;
		}
		if (direction === "L") {
			nextPosition -= 1;
		} else {
			nextPosition += 1;
		}

		if (nextPosition < 0) {
			nextPosition = 99;
		}
		if (nextPosition >= 100) {
			nextPosition = 0;
		}
	}

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
