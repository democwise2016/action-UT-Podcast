const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const ConfigCheck = require('./app/config/ConfigCheck.js')

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-UT-Podcast/`,
  publicURLShorten: `https://ppt.cc/fMYRpx`,
  thumbnailBorderColor: '2980b9',
  maxDownloadItemPerFeed: 5,
  maxDownloadFeed: 10,
  newArrialMax: 5,
  maxDownloadItems: 5,
  maxExcutionMinutes: 5,
  feedList: [
    {
      title: 'TODAY 看世界',
      feedID: 'today-everyday',
      homepageURL: 'https://www.youtube.com/channel/UCmMnzrvnsSnv-0u9M1Rxiqw',
      feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min
      ],
      // options: {
      //   maxItems: 3
      // }
    },    
  ]
}

module.exports = ConfigCheck(CONFIG)