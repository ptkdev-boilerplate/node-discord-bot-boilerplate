/**
 * Jest Tests
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *                Alì Shadman [@AliShadman95]
 *
 * @license: MIT License
 *
 */
import m from "@app/functions/module";

test("show hello world", async () => {
	const { app } = await m({ text: "hello-world" });
	expect(app()).toBe("hello-world");
});
