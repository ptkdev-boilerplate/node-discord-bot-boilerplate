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
	bot.on("message", (ctx) => {
		if (ctx.content === "!join") {
			const { voice } = ctx.member;
			if (!voice.channel) {
				return ctx.reply("Please join a voice channel first!");
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
	bot.on("message", async (ctx) => {
		if (ctx.content === "!create") {
			const filter = (m: { author: { id: string; }; }) => m.author.id === ctx.author.id;
			await ctx.reply(`Hi, type the command name without the "!"`);
			try {

				const botName = await ctx.channel.awaitMessages(filter, {
					max: 1,
					time: 15000,
					errors: ["time"]
				});

				const command = await databases.getSingleCommand({ title: botName.first().content });

				if (typeof command === "undefined") {
					await ctx.reply(`Ok, tell me what you want it to say.`);
					try {
						const botMessage = await ctx.channel.awaitMessages(filter, {
							max: 1,
							time: 15000,
							errors: ["time"]
						});

						databases.writeCommand({ title: botName.first().content, response: botMessage.first().content });
						await ctx.reply(`Ok, bot created. Try !${botName.first().content}`);

					} catch (collected) {
						ctx.reply("You did not tell me what you want it to say. Ending the creation.");
					}
				} else {
					ctx.reply(`The command **!${botName.first().content}** already exist, try again!`);
				}

			} catch (collected) {
				ctx.reply("You did not tell me the name. Ending the creation.");
			}

		}
	});
};


/**
 * command: !photo
 * =====================
 * Send photo from picsum to chat
 *
 * @param message
 */
const photo = async (message: Message): Promise<void> => {
	message.reply({
		embed: {
			"image": {
				"url": "https://picsum.photos/200/300/"
			}
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
	bot.on("message", (ctx) => {
		if (ctx.content === "!start") {
			ctx.reply(`Welcome! Try send !photo command or write any text`);
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
	databases.deleteAllCommands();
	bot.login(configs.discord.token);
};

export { launch, start, photo, join, create };
export default launch;
