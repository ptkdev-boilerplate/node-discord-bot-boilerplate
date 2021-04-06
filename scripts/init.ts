/**
 * Init
 * =====================
 * Configure discord token and username
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import * as fs from "fs";
import * as shell from "shelljs";
import { argv } from "yargs";

declare const __dirname: string;

const path = `${__dirname}/../app/configs/config.js`;

if (fs.existsSync(path)) {
	shell.sed("-i", "BOT_TOKEN", `${argv._[0]}`, path);
}
