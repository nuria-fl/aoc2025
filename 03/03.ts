import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const banks = parseInput(file);

	console.log(banks);

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
