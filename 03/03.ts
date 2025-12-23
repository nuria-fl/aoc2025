import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const banks = parseInput(file);

	const voltagePerBank = banks
		.map((bank) => {
			const numbers = bank.split("").map((digit) => parseInt(digit));
			const sortedDigits = [...numbers].sort((a, b) => b - a);

			const isHighestDigitAtTheEnd =
				numbers.indexOf(sortedDigits[0]) === numbers.length - 1;

			const highestDigitIndex = isHighestDigitAtTheEnd
				? numbers.indexOf(sortedDigits[1])
				: numbers.indexOf(sortedDigits[0]);

			const remainingNumbers = numbers.slice(highestDigitIndex + 1);
			const remainingNumbersSorted = [...remainingNumbers].sort(
				(a, b) => b - a
			);

			return `${numbers[
				highestDigitIndex
			].toString()}${remainingNumbersSorted[0].toString()}`;
		})
		.reduce((acc, curr) => acc + parseInt(curr), 0);

	return voltagePerBank;
}

export function getVoltage(bank: string): string {
	const numbers = bank.split("").map((digit) => parseInt(digit));
	let voltage = "";
	let remainingNumbers = [...numbers];

	for (let i = 12; i > 0; i--) {
		const slicedNumbers = remainingNumbers.slice(
			0,
			remainingNumbers.length - i + 1
		);
		const sortedDigits = [...slicedNumbers].sort((a, b) => b - a);
		const highestDigitIndex = remainingNumbers.indexOf(sortedDigits[0]);

		remainingNumbers = remainingNumbers.slice(highestDigitIndex + 1);

		voltage = `${voltage}${sortedDigits[0].toString()}`;
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
