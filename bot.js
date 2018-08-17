console.log("sup bot");

var Twit = require('twit');
var config = require('./config');
//console.log(config);
var T = new Twit(config);
//console.log(T);
//setInterval(tweetIt, 1000*20);

//tweetIt();

var params = {
    q : 'megadeth',
    count: 1
}

T.get('search/tweets', params, gotData);
function gotData(err, data, response){
    //console.log(data);
}

var tweet = {
    status: 'Megadeth is cool!'
}

function tweeted(err, data, response){
    if(err){
        console.log("well didnt work");
    }
    else{
        console.log("worked!");
    }
    //console.log(data);
    }

T.post('statuses/update', tweet, tweeted);

function tweetIt(){

    var r = Math.floor(Math.random()*100);
    
}


/*T.get('search/tweets', { q: 'Metallica', count: 1 }, function(err, data, response) {
   var tweets = data.statuses;
   for(var i =0; i < tweets.length; i++){
       console.log(tweets[i].text);
   }
   // console.log(data);
  })
  */