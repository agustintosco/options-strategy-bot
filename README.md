<h1 style="width: 100%; display: flex; justify-content: center"> Auto Retweeter Bot </h1>

<div style="width: 100%; display: flex; justify-content: center; margin-right: 10px;">
<img src="https://pbs.twimg.com/profile_images/1456911900273430528/63p-qXSe_400x400.jpg" alt="bot" width="150" height="150"/>
</div>

<br/>

This project is a Twitter bot that retweets every tweet that includes the hashtag you configured. For this particular case, it's used to share Option Trading Strategies for the Argentinian Stock Market.

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