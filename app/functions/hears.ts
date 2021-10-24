/**
 * Discord Hears
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import { Message } from "discord.js";
import bot from "@app/functions/discord";
import * as databases from "@app/functions/databases";
import type { DiscordCommandsInterface } from "@app/types/databases.type";

/**
 * hears: any custom command
 * =====================
 * Listen to any custom command users have created
 *
 */
const customCommands = async (): Promise<void> => {
	bot.on("message", async (message: Message) => {
		if (message.author.bot) {
			return;
		}
		const commandList = await databases.getAllCommands();
		commandList
			.filter((c: DiscordCommandsInterface) => c.isCustomCommand)
			.forEach(async (command: DiscordCommandsInterface) => {
				if (message.content === command.title) {
					message.reply(command.response);
				}
			});
	});
};

export { customCommands };
export default customCommands;
