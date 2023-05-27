const UBDownloader = require('./ub/UBDownloader.js')

let main = async () => {
  // let options = await parser.parseURL('https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw')
  // console.log(options)
  // let podcastFeed = await PodcastFeedBuilder(options)
  // console.log(podcastFeed)
  // let info = await UBInfo.load(`https://youtu.be/I2D9M2QmdrA`)
  // console.log(info)

  // https://www.youtube.com/@LINETODAYWORLD
  await UBDownloader('https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw', (info) => {
    // console.log(info)
    if (info.duration > (30 * 60)) {
      return false
    }
    return true
  }, {
    maxItems: 3
  })
}

main()