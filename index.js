require('dotenv').config();
import twit from './twit';

function getTweets() {
    return new Promise((resolve, reject) => {
        let params = {
            q: '#EstrategiasConOpciones',
            count: 10,
        };
        twit.get('search/tweets', params, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        }) 
    });
}

function postRetweet() {
    return new Promise((resolve, reject) => {
        let params = {
            id,
        };
        twit.post('statuses/retwwet/:id', params, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    })
}

async function main() {
    try {
        const data = await getTweets();
        const tweets = data.statuses;
        console.log('We got the tweets', tweets.length);
        for await (let tweet of tweets) {
            try {
                await postRetweet(tweet.id_str);
            } catch(e) {
                console.log(`Unsuccessful retweet ${tweet.id_str}`);
            }
        }
    } catch(e) {
        console.error(e);
    }

}

console.log('Starting the twitter bot ...');

setInterval(main, 3000);
