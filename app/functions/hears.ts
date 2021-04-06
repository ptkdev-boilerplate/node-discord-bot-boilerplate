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
import bot from "@app/functions/discord";

/**
 * hears: any taxt
 * =====================
 * Listen any text user write
 *
 */
const text = async (): Promise<void> => {
	bot.on("message", (ctx) => {
		if (ctx.content === "ciao") {
			ctx.reply(ctx.content);
		}

	});
};

export { text };
export default text;
