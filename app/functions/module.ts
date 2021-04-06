/**
 * Node Module
 * =====================
 *
 * Show hello world text
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import type { ModuleInterface, ModuleResponseInterface } from "@app/types/module.type";

/**
 * Hello World
 * =====================
 *
 * Print hello-world
 *
 * @interface [ModuleInterface ModuleResponseInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/types/module.type.ts)
 *
 * @param {string} {text} - input string
 *
 * @return {Promise<ModuleResponseInterface>} (async) app() function that return string
 *
 */
const m = async ({ text }: ModuleInterface): Promise<ModuleResponseInterface> => {
	const app = () => text;

	return {
		app
	};
};

export default m;
