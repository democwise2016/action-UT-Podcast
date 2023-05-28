const UBDownloader = require('./ub/UBDownloader.js')
const FeedIndexBuilder = require('./podcast/FeedIndexBuilder.js')
const CONFIG = require('./../config.js')
const fs = require('fs')

function randomResortArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

let main = async () => {

  let {feedList} = CONFIG

  // let options = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw')
  // console.log(options)
  // let podcastFeed = await PodcastFeedBuilder(options)
  // console.log(podcastFeed)
  // let info = await UBInfo.load(`https://youtu.be/I2D9M2QmdrA`)
  // console.log(info)

  // 先檢查看看有沒有人還沒建立
  let newArrial = false
  for (let i = 0; i < feedList.length; i++) {
    let feedItem = feedList[i]

    if (fs.existsSync('/output/' + feedItem.feedFilename + '.rss') === false) {
      newArrial = true
      console.log('Start new arrial mode')
      break
    }
  }

  feedList.sort(() => Math.random() - 0.5)

  let newArrialCount = 0

  // https://www.youtube.com/@LINETODAYWORLD
  for (let i = 0; i < feedList.length; i++) {
    let feedItem = feedList[i]
    // if (feedItem.title !== '敖厂长') {
    //   continue
    // }

    // let {url, itemFilter, options} = feedList[i]
    console.log(`[${i}/${feedList.length}]`, 'Checking ', feedList[i].title, feedList[i].feedFilename, new Date().toISOString())
    try {
      if (newArrial === false) {
        await UBDownloader(feedList[i])
      }
      if (fs.existsSync('/output/' + feedItem.feedFilename + '.rss') === false) {
        UBDownloader(feedList[i])
        newArrialCount++
        if (newArrialCount >= 3) {
          console.log('Exit new arrial mode')
          break
        }
      }
    }
    catch (e) {
      console.error(e)
    }
  }
  
  FeedIndexBuilder()
}

main()