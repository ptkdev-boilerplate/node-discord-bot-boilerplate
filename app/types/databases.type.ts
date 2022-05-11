/**
 * Databases Interfaces
 * =====================
 *
 * Create your discord bot with this user friendly boilerplate. Use this repository as template for your bot
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
 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
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
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { number } id - discord
	 *
	 */
	id: number;
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { boolean } is_bot - is user a bot
	 *
	 */
	is_bot?: boolean;
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { string } first_name - user name from discord
	 *
	 */
	first_name?: string;
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { string } username - user username from discord
	 *
	 */
	username?: string;
	/**
	 * User Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { string } language_code - user code language from OS
	 *
	 */
	language_code?: string;
}

/**
 * Discord Commands Interface
 * =====================
 *
 * @Context: ctx.update.message.from
 *
 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
 *
 * @param { string } title - command title
 * @param { string } response - bot response
 * @param { boolean } isCustomCommand - is custom command
 *
 */
export interface DiscordCommandsInterface {
	/**
	 * Commands Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { string } title - command title
	 *
	 */
	title?: string;
	/**
	 * Commands Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { string } response - bot response
	 *
	 */
	response?: string;
	/**
	 * Commands Interface
	 * =====================
	 *
	 * @interface [DiscordUserInterface](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/app/webcomponent/types/databases.interfaces.ts)
	 *
	 * @param { boolean } isCustomCommand - is custom command
	 *
	 */
	isCustomCommand?: boolean;
}
