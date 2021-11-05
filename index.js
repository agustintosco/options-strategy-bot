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