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
import { Message } from "discord.js";
import bot from "@app/functions/discord";
import configs from "@configs/config";
import * as databases from "@app/functions/databases";

/**
 * command: !join
 * =====================
 * Send commands list
 *
 */
const join = async (): Promise<void> => {
	bot.on("message", (message: Message) => {
		if (message.content === "!join") {
			const { voice } = message.member;
			if (!voice.channel) {
				return message.reply("Please join a voice channel first!");
			}
			voice.channel.join();
		}

	});
};
/**
 * command: !create
 * =====================
 * Create command
 *
 */
const create = async (): Promise<void> => {
	bot.on("message", async (message: Message) => {
		if (message.author.bot) {  // If incoming message is from the bot
			return;
		}

		if (!message.member.hasPermission("ADMINISTRATOR")) { // if message author is an admin
			message.reply("You must be an admin");
			return;
		}
		if (message.content === "!create") {
			const filter = (m: Message) => m.author.id === message.author.id;

			await message.reply(`Hi, type the command name without the "!"`);
			try {

				const botName = await message.channel.awaitMessages(filter, {
					max: 1,
					time: 15000,
					errors: ["time"]
				});

				const command = await databases.getSingleCommand({ title: `!${botName.first().content}` });

				if (typeof command === "undefined") {
					await message.reply(`Ok, tell me what you want it to say.`);
					try {
						const botMessage = await message.channel.awaitMessages(filter, {
							max: 1,
							time: 15000,
							errors: ["time"]
						});

						databases.writeCommand({ title: `!${botName.first().content}`, response: botMessage.first().content, isCustomCommand: true });
						await message.reply(`Ok, bot created. Try !${botName.first().content}`);

					} catch (collected) {
						message.reply("You did not tell me what you want it to say. Ending the creation.");
					}
				} else {
					message.reply(`The command **!${botName.first().content}** already exist, try again!`);
				}

			} catch (collected) {
				message.reply("You did not tell me the name. Ending the creation.");
			}

		}
	});
};


/**
 * command: !photo
 * =====================
 * Send photo from picsum to chat
 *
 */
const photo = async (): Promise<void> => {
	bot.on("message", (message: Message) => {
		if (message.content === "!photo") {
			message.reply({
				embed: {
					"image": {
						"url": "https://picsum.photos/200/300/"
					}
				}
			});
		}

	});

};

/**
 * command: !start
 * =====================
 * Send welcome message
 *
 */
const start = async (): Promise<void> => {
	bot.on("message", (message: Message) => {
		if (message.content === "!start") {
			message.reply(`Welcome! Try send !photo command or write any text`);
		}

	});
};


/**
 * Run bot
 * =====================
 * Send welcome message
 *
 */
const launch = async (): Promise<void> => {
	bot.login(configs.discord.token);
};

export { launch, start, photo, join, create };
export default launch;
