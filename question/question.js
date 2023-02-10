import readline from "readline/promises";
import { stdin as input, stdout as output } from "process"

const rl = readline.createInterface({ input, output });

export const nama = await rl.question("Masukan nama panggilan kamu : ");
export const umur = parseInt(await rl.question("Masukan umur kamu saat ini : "));
rl.close();
