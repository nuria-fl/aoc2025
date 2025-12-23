import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const banks = parseInput(file);

	const voltagePerBank = banks
		.map((bank) => {
			const numbers = bank.split("").map((digit) => parseInt(digit));

			let maxDigit = numbers[0];
			let maxIndex = 0;
			for (let i = 1; i < numbers.length; i++) {
				if (numbers[i] > maxDigit) {
					maxDigit = numbers[i];
					maxIndex = i;
				}
			}

			const isHighestDigitAtTheEnd = maxIndex === numbers.length - 1;

			let highestDigitIndex: number;
			if (isHighestDigitAtTheEnd) {
				let secondMax = -1;
				let secondMaxIndex = -1;
				for (let i = 0; i < numbers.length - 1; i++) {
					if (numbers[i] > secondMax) {
						secondMax = numbers[i];
						secondMaxIndex = i;
					}
				}
				highestDigitIndex = secondMaxIndex;
			} else {
				highestDigitIndex = maxIndex;
			}

			const remainingStart = highestDigitIndex + 1;
			let remainingMax = numbers[remainingStart];
			for (let i = remainingStart + 1; i < numbers.length; i++) {
				if (numbers[i] > remainingMax) {
					remainingMax = numbers[i];
				}
			}

			return `${numbers[highestDigitIndex]}${remainingMax}`;
		})
		.reduce((acc, curr) => acc + parseInt(curr), 0);

	return voltagePerBank;
}

export function getVoltage(bank: string): string {
	const numbers = bank.split("").map((digit) => parseInt(digit));
	let voltage = "";
	let startIndex = 0;

	for (let i = 12; i > 0; i--) {
		const endIndex = numbers.length - i + 1;

		let maxDigit = numbers[startIndex];
		let maxIndex = startIndex;
		for (let j = startIndex + 1; j < endIndex; j++) {
			if (numbers[j] > maxDigit) {
				maxDigit = numbers[j];
				maxIndex = j;
			}
		}

		voltage += maxDigit.toString();
		startIndex = maxIndex + 1;
	}

	return voltage;
}

export function part2(file: string): number {
	const banks = parseInput(file);

	const voltagePerBank = banks
		.map(getVoltage)
		.reduce((acc, curr) => acc + parseInt(curr), 0);

	return voltagePerBank;
}
