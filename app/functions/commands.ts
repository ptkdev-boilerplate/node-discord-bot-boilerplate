/**
 * Discord Commands
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import bot from "@app/functions/discord";
import configs from "@configs/config";
import * as databases from "@app/functions/databases";

/**
 * Run bot
 * =====================
 * Send welcome message
 *
 */
const launch = async (): Promise<void> => {
	bot.login(configs.discord.token);
};

export { launch };
export default launch;
