const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const ConfigCheck = require('./app/config/ConfigCheck.js')

let CONFIG = {
  /**
   * 結尾要有/
   */
  publicURL: `https://democwise2016.github.io/action-UT-Podcast/`,
  publicURLShorten: `https://ppt.cc/fMYRpx`,
  thumbnailBorderColor: '2980b9',
  feedList: [
    {
      title: 'TODAY 看世界',
      feedID: 'today-everyday',
      homepageURL: 'https://www.youtube.com/channel/UCmMnzrvnsSnv-0u9M1Rxiqw',
      feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UCmMnzrvnsSnv-0u9M1Rxiqw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min
      ],
      options: {
        // maxItems: 3
      }
    },
    // {
    //   title: '阿哲[哲週來尬電]',
    //   feedID: 'linzin-news2',
    //   thumbnailBorderColor: true,
    //   homepageURL: 'https://www.youtube.com/channel/UC0oosHZ4k1o-zNT21gg5O7A',
    //   feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0oosHZ4k1o-zNT21gg5O7A',
    //   itemFilters: [
    //     ItemFiltersPreset.between3minTo30Min,
    //     (item) => { return (item.title.indexOf('[哲週來尬電') > -1) }
    //   ],
    // },
    // {
    //   title: '斐姨所思【阿姨想知道】',
    //   feedID: 'fanamericantime-interview',
    //   thumbnailBorderColor: true,
    //   homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    //   feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
    //   itemFilters: [
    //     ItemFiltersPreset.between10minTo60Min,
    //     (item) => { return (item.title.indexOf('斐姨所思【阿姨想知道】') > -1) }
    //   ],
    // },
    // {
    //   title: '斐姨所思《行動代號2027》',
    //   feedID: 'fanamericantime-code2027',
    //   thumbnailBorderColor: true,
    //   homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    //   feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
    //   itemFilters: [
    //     ItemFiltersPreset.between10minTo60Min,
    //     (item) => { return (item.title.indexOf('《行動代號2027》') > -1) }
    //   ],
    // },
    // {
    //   title: '淇食很科學',
    //   feedID: 'HiThisIsAchi',
    //   homepageURL: 'https://www.youtube.com/channel/UCyYGbBvicdjDvNEehOMEy4A',
    //   itemFilters: ItemFiltersPreset.between3minTo30Min,
    // },
    // {
    //   title: '叉雞說故事',
    //   feedID: 'bbqporkchicken',
    //   homepageURL: 'https://www.youtube.com/channel/UCB3pBfnruGVgbP1r5Ya2CEg',
    //   itemFilters: ItemFiltersPreset.between3minTo30Min,
    // },
    // {
    //   title: '異色檔案說故事',
    //   feedID: 'mystery2018',
    //   homepageURL: 'https://www.youtube.com/channel/UCVwlKAna1gU30r3s9je06lA',
    //   itemFilters: ItemFiltersPreset.between3minTo30Min,
    // },
    // {
    //   title: '攝徒日記Fun TV',
    //   feedID: 'funtv8964',
    //   homepageURL: 'https://www.youtube.com/channel/UCvTe3Z7TZsjGzUERx4Ce6zA',
    //   itemFilters: ItemFiltersPreset.between3minTo30Min,
    // },
    // {
    //   title: '動畫小坑谷',
    //   feedID: 'valleylife351',
    //   homepageURL: 'https://www.youtube.com/channel/UCbCb-ZUoKwQ8vcRbrH2nE0Q',
    //   itemFilters: ItemFiltersPreset.between3minTo30Min,
    // },
    // {
    //   title: '井川一聊動畫',
    //   feedID: 'valleylife351',
    //   homepageURL: 'https://www.youtube.com/channel/UCcHVKeT_5Ta-gTa-sgooQxQ',
    //   itemFilters: ItemFiltersPreset.between3minTo30Min,
    // },
    // {
    //   title: '公視中晝新聞',
    //   feedID: 'PNNPTS-noon-news',
    //   homepageURL: 'https://www.youtube.com/playlist?list=PLjjrV9IhkIpcIqZiUfkkxgKtoiD517Kdf',
    //   itemFilters: ItemFiltersPreset.between10minTo60Min,
    // },
  ]
}

module.exports = ConfigCheck(CONFIG)