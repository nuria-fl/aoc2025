import { parseInput } from "../parseInput";

export function part1(file: string): number {
	const data = parseInput(file).map((line) => line.split(""));

	const firstPosition = data[0].findIndex((item) => item === "S");
	let splitCount = 0;
	let beamIndexes = [firstPosition];

	for (let i = 1; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === "^" && beamIndexes.includes(j)) {
				splitCount += 1;
				beamIndexes = beamIndexes.filter((index) => index !== j);
				beamIndexes.push(j - 1);
				beamIndexes.push(j + 1);
				// For visual debugging only
				// data[i][j + 1] = "|";
				// data[i][j - 1] = "|";
			}

			// For visual debugging only
			// if (data[i][j] === "." && beamIndexes.includes(j)) {
			// 	data[i][j] = "|";
			// }
		}
	}

	return splitCount;
}
