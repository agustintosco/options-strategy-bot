# Auto Retweeter Bot

<div style="width: 100%; display: flex; flex-direction: row; justify-content: center; margin-right: 10px;">
    <img src="https://pbs.twimg.com/profile_images/1456911900273430528/63p-qXSe_400x400.jpg" alt="bot" width="150px" height="150px"/>
    <p style="margin: 15px"> 
        This project is a Twitter bot that retweets every tweet that includes the hashtag you configured. For this particular case, it's used to share       Option Trading             Strategies for the Argentinian Stock Market.
    </p>
</div>
<div style="width: 100%; display: flex; flex-direction: row; justify-content: left; margin-top: 5px; margin-left: 3px;">
    <a href="https://twitter.com/bot_opciones">
        <img src="https://img.shields.io/twitter/url.svg?label=Follow%20%40bot_opciones&style=social&url=https%3A%2F%2Ftwitter.com%2bot_opciones" 
             alt="Twitter URL" 
             >
    </a>
</div>

___

## Installation

First, just clone the project and install `twit` and `dotenv` packages

```bash
$ git clone https://github.com/agustintosco/options-strategy-bot.git
```

```bash
$ npm install twit dotenv
```

______________

## Usage

Change the `q` attribute of the `params` object and type the hashtag you want the bot to retweet

>
> *index.js*
>
>```javascript
>let params = {
>            q: '#PlanillerosArgy',
>            count: 10,
>        };
>```
>

[ Optional ] 
If you want to change the interval the bot checks for new tweets, change the second parameter of the `setInterval` function

>
> *index.js*
>
>```javascript
>setInterval(main, 10000);
>```
>

<br/>

Run the `index.js` file

___

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
