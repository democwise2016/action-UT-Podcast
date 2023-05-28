const UBDownloader = require('./ub/UBDownloader.js')
const FeedIndexBuilder = require('./podcast/FeedIndexBuilder.js')
const CONFIG = require('./../config.js')

let main = async () => {

  let {feedList} = CONFIG

  // let options = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw')
  // console.log(options)
  // let podcastFeed = await PodcastFeedBuilder(options)
  // console.log(podcastFeed)
  // let info = await UBInfo.load(`https://youtu.be/I2D9M2QmdrA`)
  // console.log(info)

  // https://www.youtube.com/@LINETODAYWORLD
  for (let i = 0; i < feedList.length; i++) {
    let feedItem = feedList[i]
    if (feedItem.title !== '敖厂长') {
      continue
    }

    // let {url, itemFilter, options} = feedList[i]
    console.log(`[${i}/${feedList.length}]`, 'Checking ', feedList[i].title, feedList[i].feedFilename, new Date().toISOString())
    await UBDownloader(feedList[i])
  }
  
  FeedIndexBuilder()
}

main()