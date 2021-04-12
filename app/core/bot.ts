/**
 * Start bot
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import * as command from "@app/functions/commands";
import * as hears from "@app/functions/hears";

(async () => {
	await hears.customCommands();
	await command.launch();
	await command.start();
	await command.photo();
	await command.join();
	await command.create();
})();
