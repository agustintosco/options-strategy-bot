# Auto Retweeter Bot

This project is a Twitter bot that retweets every tweet that includes the hashtag you configured. For this particular case, it's used to share Option Trading Strategies for the Argentinian Stock Market.

___

## Installation

First, just clone the project and install `twit` and `dotenv` packages

```bash
git clone https://github.com/agustintosco/options-strategy-bot.git
```

```bash
npm install twit dotenv
```

______________

## Usage

Then, just change the `q` attribute of the `params` object and type the hashtag you want the bot to retweet

>
> **index.js**
>
>```javascript
>let params = {
>            q: '#PlanillerosArgy',
>            count: 10,
>        };
>```
>
___

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.