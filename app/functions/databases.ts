/**
 * Database: lowdb
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import lowdb from "lowdb";
import lowdbFileSync from "lowdb/adapters/FileSync";
import configs from "@configs/config";

import type { DiscordUserInterface, DiscordCommandsInterface } from "@app/types/databases.type";

const databases = { users: null, commands: null };

databases.users = lowdb(new lowdbFileSync(configs.databases.users));
databases.users.defaults({ users: [] }).write();
databases.commands = lowdb(new lowdbFileSync(configs.databases.commands));
databases.commands
	.defaults({
		commands: [
			{
				title: "!start",
				response: "`Welcome! Try send !photo command or write any text`",
				isCustomCommand: false,
			},
			{ title: "!create", response: "Create command", isCustomCommand: false },
			{ title: "!photo", response: "Send random photo", isCustomCommand: false },
			{ title: "!join", response: "Create command", isCustomCommand: false },
			{ title: "!launch", response: "Launch bot", isCustomCommand: false },
		],
	})
	.write();

/**
 * writeUser()
 * =====================
 * Write user information from discord context to user database
 *
 * @Context: ctx.update.message.from
 *
 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
 *
 * @param { DiscordUserInterface } json - discord user object
 *
 */
const writeUser = async (json: DiscordUserInterface): Promise<void> => {
	const user = databases.users.get("users").find({ id: json.id }).value();

	if (user) {
		databases.users.get("users").find({ id: user.id }).assign(json).write();
	} else {
		databases.users.get("users").push(json).write();
	}
};

const writeCommand = async (json: DiscordCommandsInterface): Promise<void> => {
	databases.commands.get("commands").push(json).write();
};

const getSingleCommand = async (json: DiscordCommandsInterface): Promise<void> => {
	return databases.commands.get("commands").find({ title: json.title }).value();
};

const getAllCommands = async (): Promise<[]> => {
	return databases.commands.get("commands").value();
};

const deleteSingleCommand = async (json: DiscordCommandsInterface): Promise<void> => {
	const command = databases.commands.get("commands").find({ title: json.title }).value();

	if (command) {
		databases.commands.get("commands").remove({ title: json.title }).write();
	}
};
const deleteAllCommands = async (): Promise<void> => {
	databases.commands.get("commands").remove().write();
};

export { databases, writeUser, writeCommand, getSingleCommand, getAllCommands, deleteSingleCommand, deleteAllCommands };
export default databases;
