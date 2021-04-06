/**
 * Databases Interfaces
 * =====================
 *
 * Create your discord bot with this friendly boilerplate. Use this repository as template for your bot
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */

/**
 * Discord User Interface
 * =====================
 *
 * @Context: ctx.update.message.from
 *
 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
 *
 * @param { number } id - discord
 * @param { boolean } is_bot - is user a bot
 * @param { string } first_name - user name from discord
 * @param { string } username - user username from discord
 * @param { string } language_code - user code language from OS
 *
 */
export interface DiscordUserInterface {
	/**
	 * Discord User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
	 *
	 * @param { number } id - discord
	 *
	 */
	id: number,
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
	 *
	 * @param { boolean } is_bot - is user a bot
	 *
	 */
	is_bot?: boolean,
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
	 *
	 * @param { string } first_name - user name from discord
	 *
	 */
	first_name?: string,
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
	 *
	 * @param { string } username - user username from discord
	 *
	 */
	username?: string,
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.type.ts)
	 *
	 * @param { string } language_code - user code language from OS
	 *
	 */
	language_code?: string,
}
