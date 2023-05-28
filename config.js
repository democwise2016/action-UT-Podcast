const ItemFiltersPreset = require('./app/ub/ItemFiltersPreset.js')

module.exports = {
  /**
   * 結尾要有/
   */
  publicURL: `https://democwise2016.github.io/action-UT-Podcast/`,
  publicURLShorten: `https://ppt.cc/fMYRpx`,
  feedList: [
    {
      title: 'TODAY 看世界',
      feedID: 'today-everyday',
      homepageURL: 'https://www.youtube.com/channel/UCmMnzrvnsSnv-0u9M1Rxiqw',
      feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
      options: {
        // maxItems: 3
      }
    }
  ]
}