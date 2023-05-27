module.exports = {
  /**
   * 結尾要有/
   */
  publicURL: `https://democwise2016.github.io/action-UT-Podcast/`,
  feedList: [
    {
      title: 'TODAY 看世界',
      url: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw',
      itemFilter: (info) => {
        // console.log(info)
        if (info.duration > (30 * 60)) {
          return false
        }
        return true
      },
      options: {
        // maxItems: 3
      }
    }
  ]
}