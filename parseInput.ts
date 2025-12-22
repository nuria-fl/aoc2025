import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function parseInput(file: string): string[] {
  const input = fs.readFileSync(path.join(__dirname, file)).toString();

  return input.split("\n").map((entry: string) => entry.trim());
}

export function parseInputToString(file: string): string {
  return fs.readFileSync(path.join(__dirname, file)).toString();
}