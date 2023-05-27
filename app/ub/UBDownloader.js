const ParseUBID = require('./ParseUBID.js')
const GetUBFeedJSON = require('./GetUBFeedJSON.js')
const UBInfo = require('./UBInfo.js')
const PodcastFeedBuilder = require('./../podcast/PodcastFeedBuilder.js')
const UBDownloaderItems = require('./items/UBDownloaderItems.js')

const fs = require('fs');

module.exports = async function (feedURL, itemFilter, options = {}) {

  // ---------
  // 取得ID
  let feedID = ParseUBID(feedURL)
  // console.log(id)

  // ---------
  // 取得Feed的資訊
  let feedJSON = await GetUBFeedJSON(feedURL)
  fs.writeFileSync('/output/feed.json', JSON.stringify(feedJSON, null, 2), 'utf8')
  
  // ---------
  // 取得頻道的網址
  let channelURL = feedJSON.link
  let channelInfo = await UBInfo.load(channelURL)
  // console.log(channelInfo)
  feedJSON.channelAvatar = channelInfo.channelAvatar
  feedJSON.thumbnail = channelInfo.thumbnail

  // ---------
  // 逐一下載？
  feedJSON.items = await UBDownloaderItems(feedID, feedJSON.items, itemFilter, options)
  
  // ---------
  // 建立Feed
  let outputFeedString = await PodcastFeedBuilder(feedJSON)
  // console.log(outputFeedString)
  fs.writeFileSync(`/output/${feedID}.rss`, outputFeedString, 'utf8') 
}