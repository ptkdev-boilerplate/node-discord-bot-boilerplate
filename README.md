# 🤖 node-discord-bot-boilerplate

<!-- all-shields/header-badges:START -->
[![v1.0.20210406](https://img.shields.io/badge/version-v1.0.20210406-lightgray.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/CHANGELOG.md) [![](https://img.shields.io/npm/v/@ptkdev/node-discord-bot-boilerplate?color=CC3534&logo=npm)](https://www.npmjs.com/package/@ptkdev/node-discord-bot-boilerplate) [![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat&logo=license)](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/blob/main/LICENSE.md) [![Language: TypeScript](https://img.shields.io/badge/language-typescript-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/) [![ECMAScript: 2019](https://img.shields.io/badge/ES-9-F7DF1E.svg?style=flat&logo=javascript)](https://github.com/tc39/ecma262) [![Discord Server](https://discordapp.com/api/guilds/383373985666301975/embed.png)](https://discord.ptkdev.io) 
<!-- all-shields/header-badges:END -->

Create your discord bot with this friendly boilerplate. Use this repository as template for your bot

This is a [github template](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/), you can fork it or [use as template](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/generate) for start new project with this repository as hello-world. I hate start new project with empty template, often i missing correct configuration, readme instruction or i need of samples of code. Use this repository as template solve this problem.

## 🎁 Support: Donate

> This project is **free**, **open source** and I try to provide excellent **free support**. Why donate? I work on this project several hours in my spare time and try to keep it up to date and working. **THANK YOU!**

<!-- all-shields/sponsors-badges:START -->
[![Donate Paypal](https://img.shields.io/badge/donate-paypal-005EA6.svg?style=for-the-badge&logo=paypal)](https://www.paypal.me/ptkdev) [![Donate Ko-Fi](https://img.shields.io/badge/donate-ko--fi-29abe0.svg?style=for-the-badge&logo=ko-fi)](https://ko-fi.com/ptkdev) [![Donate Github Sponsors](https://img.shields.io/badge/donate-sponsors-ea4aaa.svg?style=for-the-badge&logo=github)](https://github.com/sponsors/ptkdev) [![Donate Patreon](https://img.shields.io/badge/donate-patreon-F87668.svg?style=for-the-badge&logo=patreon)](https://www.patreon.com/join/ptkdev) [![Donate Bitcoin](https://img.shields.io/badge/BTC-35jQmZCy4nsxoMM3QPFrnZePDVhdKaHMRH-E38B29.svg?style=flat-square&logo=bitcoin)](https://ptk.dev/img/icons/menu/bitcoin_wallet.png) [![Donate Ethereum](https://img.shields.io/badge/ETH-0x8b8171661bEb032828e82baBb0B5B98Ba8fBEBFc-4E8EE9.svg?style=flat-square&logo=ethereum)](https://ptk.dev/img/icons/menu/ethereum_wallet.png) 
<!-- all-shields/sponsors-badges:END -->

## 📎 Menu

-   💡 [Features](#-features)
-   🚀 [How to use](#-usage-deploy)
-   📚 [Documentation](#-documentation)
-   🔨 [Developer Mode](#-developer-mode)
-   -   🏁 [Run Project](#-run-project)
-   -   💾 [Setup Project](#-setup-project)
-   -   🚀 [Deploy](#-deploy)
-   👨‍💻 [Contributing](#-contributing)
-   🐛 [Known Bugs](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
-   🍻 Community:
    -   <img src="https://raw.githubusercontent.com/ptkdev-boilerplate/node-discord-bot-boilerplate/main/.github/assets/social_discord.png" height="18px"> [Discord](http://discord.ptkdev.io) ([🇬🇧 English Channel](https://discord.gg/jqUSGPKdmA) | [🇮🇹 Italian Channel](https://discord.gg/SJFcbvG6RU) | [🇵🇱 Polish Channel](https://discord.gg/25vg4VFhb7))

## 💡 Features

-   [✔️] Easy to use
-   [✔️] MIT License
-   [✔️] Make discord bot with node
-   [✔️] Friendly boilerplate + Github templates
-   [✔️] Typescript + TSPaths preconfigured
-   [✔️] Userfriendly folders tree
-   [✔️] Prettiers and ESLint preconfigured
-   [✔️] all-contributors-cli and all-shields-cli preconfigured
-   [✔️] JEST Test preconfigured
-   [✔️] Full async code
-   [✔️] Github and Vscode dotfiles preconfigured
-   [✔️] Translations: 🇬🇧 🇮🇹 🇵🇱 (Help me ❤️)

## 🚀 Usage: Deploy

1. Clone this repository or download [nightly](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/archive/nightly.zip), [beta](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/archive/beta.zip) or [stable](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/archive/main.zip).
2. Create new application on [discord developer page](https://discord.com/developers/applications):

-   A. Click "Bot" on left menu, generate new bot and save token for step 3
-   B. Click "oAuth2" on left menu, go to bottom and set `scope` as `BOT` and check all write permissions. Copy generated link and invite bot to your server.

3. Run with correct values: `npm run init:token --token asdfghjkl`
4. Run `npm run init`
5. Run `npm run start-pm2`
6. Write `/start` on discord bot.

## 🔨 Developer Mode

#### 🏁 Run Project

1. Clone this repository or download [nightly](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/archive/nightly.zip), [beta](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/archive/beta.zip) or [stable](https://github.com/ptkdev-boilerplate/node-discord-bot-boilerplate/archive/main.zip).
2. Create new application on [discord developer page](https://discord.com/developers/applications):

-   A. Click "Bot" on left menu, generate new bot and save token for step 3
-   B. Click "oAuth2" on left menu, go to bottom and set `scope` as `BOT` and check all write permissions. Copy generated link and invite bot to your server.

3. Run with correct values: `npm run init:token --token asdfghjkl`
4. Run `npm run init`
5. Run `npm run dev`
6. Write `/start` on discord bot.

#### 💾 Setup Project

If you want replace all strings (example: package name, author, urls, etc...) in markdown file, source files and others files of this project you need edit `setup.json` with correct values and run `npm run setup`.

#### 🚀 Deploy

Deploy bot to your server and:

1. Run with correct values: `npm run init:token --token asdfghjkl`
2. Run init `npm run init`
3. Generate release `npm run release`
4. Start bot `npm run start-pm2`

## 📚 Documentation

Run `npm run docs`

## 👑 Backers and Sponsors

Thanks to all our backers! 🙏 Donate 3$ or more on [paypal](https://www.paypal.me/ptkdev), [ko-fi](https://ko-fi.com/ptkdev), [github](https://github.com/sponsors/ptkdev) or [patreon](https://www.patreon.com/join/ptkdev) and send me [email](mailto:support@ptkdev.io) with your avatar and url.

[![](https://api.ptkdev.io/backers/sponsor1.png?)](https://api.ptkdev.io/backers/sponsor1.html) [![](https://api.ptkdev.io/backers/sponsor2.png?)](https://api.ptkdev.io/backers/sponsor2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi1.png?)](https://api.ptkdev.io/backers/sponsor-kofi1.html) [![](https://api.ptkdev.io/backers/sponsor-kofi2.png?)](https://api.ptkdev.io/backers/sponsor-kofi2.html) [![](https://api.ptkdev.io/backers/sponsor-kofi3.png?)](https://api.ptkdev.io/backers/sponsor-kofi3.html) [![](https://api.ptkdev.io/backers/sponsor3.png?)](https://api.ptkdev.io/backers/sponsor3.html) [![](https://api.ptkdev.io/backers/sponsor4.png?)](https://api.ptkdev.io/backers/sponsor4.html) [![](https://api.ptkdev.io/backers/sponsor5.png?)](https://api.ptkdev.io/backers/sponsor5.html) [![](https://api.ptkdev.io/backers/sponsor6.png?)](https://api.ptkdev.io/backers/sponsor6.html) [![](https://api.ptkdev.io/backers/sponsor7.png?)](https://api.ptkdev.io/backers/sponsor7.html) [![](https://api.ptkdev.io/backers/sponsor8.png?)](https://api.ptkdev.io/backers/sponsor8.html) [![](https://api.ptkdev.io/backers/sponsor9.png?)](https://api.ptkdev.io/backers/sponsor9.html) [![](https://api.ptkdev.io/backers/sponsor10.png?)](https://api.ptkdev.io/backers/sponsor10.html) [![](https://api.ptkdev.io/backers/sponsor11.png?)](https://api.ptkdev.io/backers/sponsor11.html) [![](https://api.ptkdev.io/backers/sponsor12.png?)](https://api.ptkdev.io/backers/sponsor12.html) [![](https://api.ptkdev.io/backers/sponsor13.png?)](https://api.ptkdev.io/backers/sponsor13.html) [![](https://api.ptkdev.io/backers/sponsor14.png?)](https://api.ptkdev.io/backers/sponsor14.html) [![](https://api.ptkdev.io/backers/sponsor15.png?)](https://api.ptkdev.io/backers/sponsor15.html) [![](https://api.ptkdev.io/backers/backer1.png?)](https://api.ptkdev.io/backers/backer1.html) [![](https://api.ptkdev.io/backers/backer2.png?)](https://api.ptkdev.io/backers/backer2.html) [![](https://api.ptkdev.io/backers/backer3.png?)](https://api.ptkdev.io/backers/backer3.html) [![](https://api.ptkdev.io/backers/backer4.png?)](https://api.ptkdev.io/backers/backer4.html) [![](https://api.ptkdev.io/backers/backer5.png?)](https://api.ptkdev.io/backers/backer5.html) [![](https://api.ptkdev.io/backers/backer6.png?)](https://api.ptkdev.io/backers/backer6.html) [![](https://api.ptkdev.io/backers/backer7.png?)](https://api.ptkdev.io/backers/backer7.html) [![](https://api.ptkdev.io/backers/backer8.png?)](https://api.ptkdev.io/backers/backer8.html) [![](https://api.ptkdev.io/backers/backer9.png?)](https://api.ptkdev.io/backers/backer9.html) [![](https://api.ptkdev.io/backers/backer10.png?)](https://api.ptkdev.io/backers/backer10.html) [![](https://api.ptkdev.io/backers/backer11.png?)](https://api.ptkdev.io/backers/backer11.html) [![](https://api.ptkdev.io/backers/backer12.png?)](https://api.ptkdev.io/backers/backer12.html) [![](https://api.ptkdev.io/backers/backer13.png?)](https://api.ptkdev.io/backers/backer13.html) [![](https://api.ptkdev.io/backers/backer14.png?)](https://api.ptkdev.io/backers/backer14.html) [![](https://api.ptkdev.io/backers/backer15.png?)](https://api.ptkdev.io/backers/backer15.html) [![](https://api.ptkdev.io/backers/backer16.png?)](https://api.ptkdev.io/backers/backer16.html) [![](https://api.ptkdev.io/backers/backer17.png?)](https://api.ptkdev.io/backers/backer17.html) [![](https://api.ptkdev.io/backers/backer18.png?)](https://api.ptkdev.io/backers/backer18.html) [![](https://api.ptkdev.io/backers/backer19.png?)](https://api.ptkdev.io/backers/backer19.html) [![](https://api.ptkdev.io/backers/backer20.png?)](https://api.ptkdev.io/backers/backer20.html) [![](https://api.ptkdev.io/backers/backer21.png?)](https://api.ptkdev.io/backers/backer21.html) [![](https://api.ptkdev.io/backers/backer22.png?)](https://api.ptkdev.io/backers/backer22.html) [![](https://api.ptkdev.io/backers/backer23.png?)](https://api.ptkdev.io/backers/backer23.html) [![](https://api.ptkdev.io/backers/backer24.png?)](https://api.ptkdev.io/backers/backer24.html) [![](https://api.ptkdev.io/backers/backer25.png?)](https://api.ptkdev.io/backers/backer25.html) [![](https://api.ptkdev.io/backers/backer26.png?)](https://api.ptkdev.io/backers/backer26.html) [![](https://api.ptkdev.io/backers/backer27.png?)](https://api.ptkdev.io/backers/backer27.html) [![](https://api.ptkdev.io/backers/backer28.png?)](https://api.ptkdev.io/backers/backer28.html) [![](https://api.ptkdev.io/backers/backer29.png?)](https://api.ptkdev.io/backers/backer29.html)

## 👨‍💻 Contributing

I ❤️ contributions! I will happily accept your pull request! Translations, grammatical corrections (GrammarNazi you are welcome! Yes my English is bad, sorry), etc... Do not be afraid, if the code is not perfect we will work together 👯 and remember to insert your name in `.all-contributorsrc` and `package.json` file.

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://ptk.dev"><img src="https://avatars1.githubusercontent.com/u/442844?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Patryk Rzucidło</b></sub></a><br /><a href="https://github.com/ptkdev/ptkdev-boilerplate/node-discord-bot-boilerplate/commits?author=ptkdev" title="Code">💻</a> <a href="#translation-ptkdev" title="Translation">🌍</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/node-discord-bot-boilerplate/commits?author=ptkdev" title="Documentation">📖</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/node-discord-bot-boilerplate/issues?q=author%3Aptkdev" title="Bug reports">🐛</a></td>
    <td align="center"><img src="https://avatars1.githubusercontent.com/u/50172746?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alì Shadman</b></sub><br /><a href="https://github.com/ptkdev/ptkdev-boilerplate/node-discord-bot-boilerplate/commits?author=AliShadman95" title="Code">💻</a> <a href="#translation-AliShadman95" title="Translation">🌍</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/node-discord-bot-boilerplate/commits?author=AliShadman95" title="Documentation">📖</a> <a href="https://github.com/ptkdev/ptkdev-boilerplate/node-discord-bot-boilerplate/issues?q=author%3AAliShadman95" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

> 💰 In the future, if the donations allow it, I would like to share some of the success with those who helped me the most. For me open source is share of code, share development knowledges and share donations!

## 🦄 Other Projects

<!-- all-shields/projects-badges1:START -->
[![](https://img.shields.io/badge/💻%20My-Portfolio-3498db.svg?style=flat&logo=)](https://ptk.dev/) 
<!-- all-shields/projects-badges1:END -->

<!-- all-shields/projects-badges2:START -->
[![](https://img.shields.io/badge/🦒%20Tools-Node%20Logger-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/ptkdev-logger) [![](https://img.shields.io/badge/🦌%20Tools-All%20Shields%20CLI-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/all-shields-cli) [![](https://img.shields.io/badge/🖥️%20Tools-Aspect%20Ratio%2021:9-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/chrome-extension-aspectratio219) [![](https://img.shields.io/badge/🛡%20Tools-Badges:%20Available%20on-9b59b6.svg?style=flat&logo=)](https://availableon.badge.ptkdev.io/) [![](https://img.shields.io/badge/🐾%20Tools-JSON%20Token%20Replace-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/json-token-replace) [![](https://img.shields.io/badge/🐍%20Tools-ESLint:%20snakecasejs-9b59b6.svg?style=flat&logo=)](https://github.com/ptkdev/eslint-plugin-snakecasejs) 
<!-- all-shields/projects-badges2:END -->

<!-- all-shields/projects-badges3:START -->
[![](https://img.shields.io/badge/📸%20WebComponent-Instagram%20Widget-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components/webcomponent-instagram-widget) [![](https://img.shields.io/badge/👑%20WebComponent-My%20Patreon%20Box-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components/webcomponent-patreon-box) [![](https://img.shields.io/badge/🏞%20WebComponent-Carousel%20Slideshow-e74c3c.svg?style=flat&logo=)](https://github.com/ptkdev-components/webcomponent-carousel-slideshow) 
<!-- all-shields/projects-badges3:END -->

<!-- all-shields/projects-badges4:START -->
[![](https://img.shields.io/badge/🎨%20Themes-VSCode-f1c40f.svg?style=flat&logo=)](https://github.com/ptkdev/vscode-theme-dark-blood) [![](https://img.shields.io/badge/📚%20Bot-GameBookChat-34495e.svg?style=flat&logo=)](https://t.me/gamebookchatbot) [![](https://img.shields.io/badge/👔%20Boilerplate-Svelte-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=svelte) [![](https://img.shields.io/badge/👔%20Boilerplate-WebComponents-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=webcomponent) [![](https://img.shields.io/badge/👔%20Boilerplate-BOT-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=bot) [![](https://img.shields.io/badge/👔%20Boilerplate-Node-f368e0.svg?style=flat&logo=)](https://github.com/ptkdev-boilerplate?q=node) [![](https://img.shields.io/badge/💅%20App-Me%20in%20Gifs-2ecc71.svg?style=flat&logo=)](https://meingifs.pics/) [![](https://img.shields.io/badge/📱%20App-Stickers-2ecc71.svg?style=flat&logo=)](https://github.com/ptkdev/ptkdev-stickers#-install-free) 
<!-- all-shields/projects-badges4:END -->

## 💫 License

-   Code and Contributions have **MIT License**
-   Images and logos have **CC BY-NC 4.0 License**
-   Documentations and Translations have **CC BY 4.0 License**

###### Copyleft (c) 2021 [Patryk Rzucidło](https://ptk.dev) ([@PTKDev](https://twitter.com/ptkdev)) <[support@ptkdev.io](mailto:support@ptkdev.io)>
