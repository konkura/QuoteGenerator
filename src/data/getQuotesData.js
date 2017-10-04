// Run this file with node getQuotesData to generate a file by repeated calls to API
const http = require('https'); // This runs with node so can't use import...
const _ = require('underscore');
const fs = require('fs');

let quotes = [];
let offenceLevels = ['Bigly offensive', 'As offensive as Trump\'s hair', 'As offensive as the thought of Trump naked', 'Off the scale #MAGA'];
let numQuotes = 10;
let ct = 0;

for (let i = 0; i < numQuotes; i++) {
  let req = http.request('https://api.whatdoestrumpthink.com/api/v1/quotes/random', function (res) {
    res.setEncoding('utf8');
    res.on('data', function (d) {
      d=JSON.parse(d);
      quotes.push({ quote: d.message, offensiveness: _.sample(offenceLevels) });
      ct++;
    });
    res.on('end', function () {
      if (ct === numQuotes) {
        //write quotes to file
        fs.writeFile('./quotes.js', 'export default ' + JSON.stringify(quotes));
      }
    });
  });

req.end();

}

