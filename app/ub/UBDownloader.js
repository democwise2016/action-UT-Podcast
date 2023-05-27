const PodcastFeedBuilder = require('./podcast/PodcastFeedBuilder.js')

const UBInfo = require('./ub/UBInfo.js')

let Parser = require('rss-parser');
let parser = new Parser();

const fs = require('fs');

module.exports = async function (feedURL, filter) {
  // 先取得
  if (fs.existsSync('/output/d.txt')) {
    console.log(prev, fs.readFileSync('/output/d.txt', 'utf8'))
  }
  

  let next = new Date().toUTCString()
  console.log(next, next)
  fs.writeFileSync('/output/d.txt', next, 'utf8')
}