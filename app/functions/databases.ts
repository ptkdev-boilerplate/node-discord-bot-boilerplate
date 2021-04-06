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

import type { DiscordUserInterface } from "@app/types/databases.type";

const databases = { users: null };

databases.users = lowdb(new lowdbFileSync(configs.databases.users));
databases.users.defaults({ users: [] }).write();

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

	const user_id = databases.users.get("users").find({ id: json.id }).value();

	if (user_id) {
		databases.users.get("users").find({ id: user_id.id }).assign(json).write();
	} else {
		databases.users.get("users").push(json).write();
	}

};

export { databases, writeUser };
export default databases;
