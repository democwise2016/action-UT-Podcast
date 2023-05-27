let Parser = require('rss-parser');
// let parser = new Parser();
let parser
let NodeCacheSqlite = require('./../lib/NodeCacheSqlite.js');

module.exports = async function (feedURL, options = {}) {
  let {
    cacheDay = 0.5, 
  } = options

  // 00000000000000000000000000000

  return await NodeCacheSqlite.get('GetUBFeedJSON', feedURL, async function () {
    console.log('get feed', feedURL)

    if (!parser) {
      parser = new Parser()
    }

    return await parser.parseURL(feedURL)
  }, parseInt(cacheDay * 1000 * 60 * 60 * 24, 10))
}