const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const ConfigCheck = require('./app/config/ConfigCheck.js')

let CONFIG = {
  publicURL: `https://democwise2016.github.io/action-UT-Podcast/`,
  publicURLShorten: `https://ppt.cc/fMYRpx`,
  thumbnailBorderColor: '2980b9',
  maxDownloadItemPerFeed: 5,
  maxDownloadFeed: 20,
  newArrialMax: 5,
  maxDownloadItems: 100,
  maxExcutionMinutes: 25,
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
    {
      title: '阿哲[哲週來尬電]',
      feedID: 'linzin-news2',
      thumbnailBorderColor: true,
      homepageURL: 'https://www.youtube.com/channel/UC0oosHZ4k1o-zNT21gg5O7A',
      feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0oosHZ4k1o-zNT21gg5O7A',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('[哲週來尬電') > -1) }
      ],
      options: {
        maxItems: 3
      }
    },

    {
      title: '老鵝特搜',
      feedID: 'omgoosetw-news',
      thumbnailBorderColor: true,
      homepageURL: 'https://www.youtube.com/channel/UC_iwP8I13JnL54BypRCzldw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('｜老鵝特搜') > -1) }
      ],
      options: {
        maxItems: 3
      }
    },
    {
      title: '斐姨所思【阿姨想知道】',
      feedID: 'fanamericantime-interview',
      thumbnailBorderColor: true,
      homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
      feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
      itemFilters: [
        ItemFiltersPreset.between10minTo60Min,
        (item) => { return (item.title.indexOf('斐姨所思【阿姨想知道】') > -1) },
      ],
      options: {
        maxItems: 3
      }
    },
    {
      title: '斐姨所思《行動代號2027》',
      feedID: 'fanamericantime-code2027',
      thumbnailBorderColor: true,
      homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
      feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
      itemFilters: [
        ItemFiltersPreset.between10minTo60Min,
        (item) => { return (item.title.indexOf('《行動代號2027》') > -1) }
      ],
    },
    {
      title: '淇食很科學',
      feedID: 'HiThisIsAchi',
      homepageURL: 'https://www.youtube.com/channel/UCyYGbBvicdjDvNEehOMEy4A',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '叉雞說故事',
      feedID: 'bbqporkchicken',
      homepageURL: 'https://www.youtube.com/channel/UCB3pBfnruGVgbP1r5Ya2CEg',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '異色檔案說故事',
      feedID: 'mystery2018',
      homepageURL: 'https://www.youtube.com/channel/UCVwlKAna1gU30r3s9je06lA',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '攝徒日記Fun TV',
      feedID: 'funtv8964',
      homepageURL: 'https://www.youtube.com/channel/UCvTe3Z7TZsjGzUERx4Ce6zA',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '動畫小坑谷',
      feedID: 'valleylife351',
      homepageURL: 'https://www.youtube.com/channel/UCbCb-ZUoKwQ8vcRbrH2nE0Q',
      itemFilters: ItemFiltersPreset.between1minTo10Min,
    },
    {
      title: '井川一聊動畫',
      feedID: 'InokawaHajime',
      homepageURL: 'https://www.youtube.com/channel/UCcHVKeT_5Ta-gTa-sgooQxQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '公視中晝新聞',
      feedID: 'PNNPTS-noon-news',
      homepageURL: 'https://www.youtube.com/playlist?list=PLjjrV9IhkIpcIqZiUfkkxgKtoiD517Kdf',
      itemFilters: ItemFiltersPreset.between10minTo60Min,
      options: {
        maxItems: 1
      }
    },
    {
      title: '鐵道事務所',
      feedID: 'Railway-Office',
      homepageURL: 'https://www.youtube.com/channel/UCdinDPM5zd2nk2LdtOcEDPQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '黑皮談市政',
      feedID: 'jin_an0528',
      homepageURL: 'https://www.youtube.com/channel/UC3JgKXxcCd02y3xIpgJKnWA',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '蒼藍鴿聊醫學',
      feedID: 'bluepigeon0810',
      homepageURL: 'https://www.youtube.com/channel/UCUn77_F5A65HViL9OEvIpLw',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '敖厂长',
      feedID: 'hawkaoaoful',
      homepageURL: 'https://www.youtube.com/channel/UCCkMW93Am1pLfk2nZFKAmbQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '萊斯 新Game報',
      feedID: 'LiceMoo-GameNews',
      homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
      thumbnailBorderColor: true,
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('《新Game報') > -1) }
      ],
      options: {
        maxItems: 3
      }
    },
    {
      title: '大閒者 偷閒加油站',
      feedID: 'Idlers-GameNews',
      homepageURL: 'https://www.youtube.com/channel/UCU6nhA37pbvzw-JXhAB87Mg',
      thumbnailBorderColor: true,
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('偷閒加油站') > -1) }
      ],
      options: {
        maxItems: 3
      }
    },
    {
      title: 'IC实验室聊商業',
      feedID: 'ICLAB',
      homepageURL: 'https://www.youtube.com/channel/UCJ1zX4FZA15dwE2olLAO3-w',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '紅酒聊遊戲 科技雜談',
      feedID: 'redwinetom',
      homepageURL: 'https://www.youtube.com/channel/UCJT6M5j-HT-76ts0eTzZtJw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('【科技杂谈') > -1) }
      ]
    },
    {
      title: '老高與小茉',
      feedID: 'laogao',
      homepageURL: 'https://www.youtube.com/channel/UCMUnInmOkrWN4gof9KlhNmQ',
      itemFilters: ItemFiltersPreset.between10minTo60Min,
    },
    {
      title: '維思維聊心理學',
      feedID: 'WeisWay',
      homepageURL: 'https://www.youtube.com/channel/UCcU6CC2Gkc18aBUfEtdjaAA',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('【邏輯燒腦') === -1) }
      ],
    },
    {
      title: 'SHIN LI信用卡優惠',
      feedID: 'SHINLI',
      homepageURL: 'https://www.youtube.com/channel/UCK-qc_POQZwWrMg-Pr-oYtg',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
      //maxItems: 2, // default 10
      options: {
        maxItems: 3
      }
    },
    {
      title: '人妻聊日本企業',
      feedID: 'tacchan',
      homepageURL: 'https://www.youtube.com/channel/UCge049AFxJnXWPxYzGKoWyQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '志祺七七 X 圖文不符',
      feedID: 'shasha77',
      homepageURL: 'https://www.youtube.com/channel/UCiWXd0nmBjlKROwzMyPV-Nw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.endsWith('｜志祺七七')) }
      ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    },
    {
      title: '肥宅MS',
      feedID: 'otakumsvideo',
      homepageURL: 'https://www.youtube.com/channel/UCBOBS5RdHd2Owytoj4PqPqA',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: 'Buchi聊時事',
      feedID: 'LinBuchi',
      homepageURL: 'https://www.youtube.com/channel/UCgHUl1pwUVfrX8QotB-t2gQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '四處觀察',
      feedID: 'sichuguancha',
      homepageURL: 'https://www.youtube.com/channel/UC6OeJCR9gHsJPVyNhXfK4tA',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '好味營養師品瑄',
      feedID: 'dietitian_pink',
      homepageURL: 'https://www.youtube.com/channel/UCLwFOT4tHGaK9kqXXExhPFQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '瑩真律師',
      feedID: 'LawyerAngela',
      homepageURL: 'https://www.youtube.com/channel/UCLzWMcpNlhHo0c0yOyWksvQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '蒟蒻講幹話',
      feedID: 'jarrow3988',
      homepageURL: 'https://www.youtube.com/channel/UCjGBF7OQXzgJFDwrbzxtDrQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '老查呆呆 調查局',
      feedID: 'zackyo-investigation',
      homepageURL: 'https://www.youtube.com/channel/UC8ZFjwP46BoXvvtRTWoHnfw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return (item.title.indexOf('調查局') > -1) }
      ]
    },
    {
      title: '遊戲不止',
      feedID: 'SONAR606',
      homepageURL: 'https://www.youtube.com/channel/UCDNeEBgigHHGtJJOpHSnadA',
      itemFilters: [
        ItemFiltersPreset.between6minTo60Min,
        (item) => { return (item.title.indexOf('〖遊戲不止〗') > -1) }
      ]
    },
    {
      title: '關鍵評論網：國際話題',
      feedID: 'TheNewsLens',
      homepageURL: 'https://www.youtube.com/channel/UC4bokYuSrVGpI6_WYv7Gdbw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return ((item.title.indexOf('｜國際大風吹') > -1) || (item.title.indexOf('｜國際值日生') > -1)) }
      ]
    },
    // {
    //   title: '迷走大學 時事評論',
    //   feedID: 'meisouniv-news',
    //   homepageURL: 'https://www.youtube.com/channel/UCiCOKR_WkqZuYN9fpjWqnzg',
    //   itemFilters: [
    //     ItemFiltersPreset.between6minTo60Min,
    //     (item) => { return ((item.title.indexOf('【走漏消息') > -1) || (item.title.indexOf('【迷大Jo報】') > -1) || (item.title.indexOf('【這個不能講') > -1)) }
    //   ],
    //   options: {
    //     maxItems: 5
    //   }
    // },
    {
      title: '我的學習筆記',
      feedID: 'mynotebooks',
      homepageURL: 'https://www.youtube.com/channel/UCAS8QqEyGGH71xYgFzNSbuw',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '孫沁岳 漫遊快譯通',
      feedID: 'yorke',
      homepageURL: 'https://www.youtube.com/channel/UCD114v8IMP5HWSUXrIJlJuQ',
      itemFilters: [
        ItemFiltersPreset.between6minTo60Min,
        (item) => { return ((item.title.indexOf('【漫遊快譯通】') > -1)) }
      ]
    },
    {
      title: '卡提諾狂新聞',
      feedID: 'CrazyNews9487',
      homepageURL: 'https://www.youtube.com/playlist?list=PLH2b4YnNI7j13eD1KdpEV3t7VEWtRQlYY',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: 'Gamker攻壳官方频道',
      feedID: 'Gamker-YT',
      homepageURL: 'https://www.youtube.com/channel/UCLgGLSFMZQB8c0WGcwE49Gw',
      itemFilters: [
        ItemFiltersPreset.between6minTo60Min,
        (item) => { return ((item.title.indexOf('【就知道玩遊戲') > -1)) }
      ]
    },
    {
      title: '公視P#新聞實驗室',
      feedID: 'Ppsharp_newslab',
      homepageURL: 'https://www.youtube.com/channel/UCMDcOT4z7GS1SRGG2g7z43g',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '漫天大坑-Kay',
      feedID: 'kayshi_0521',
      homepageURL: 'https://www.youtube.com/channel/UC29L37o2cslmXRhOLn04bCA',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return ((item.title.indexOf('動畫鑑賞集錦') === -1) || (item.title.indexOf('作畫回顧') === -1)) }
      ]
    },
    {
      title: '玩家機密',
      feedID: 'GamerSecret',
      homepageURL: 'https://www.youtube.com/channel/UCmtmIF-u0ojej0y9i9STuIw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return ((item.title.indexOf('【每週新聞】') === -1)) }
      ]
    },
    {
      title: '玩家機密 每週新聞',
      feedID: 'GamerSecret-News',
      homepageURL: 'https://www.youtube.com/channel/UCmtmIF-u0ojej0y9i9STuIw',
      thumbnailBorderColor: true,
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
        (item) => { return ((item.title.indexOf('【每週新聞】') >-1)) }
      ],
      options: {
        maxItems: 3
      }
    },
    {
      title: '啾啾鞋',
      feedID: 'chuchushoeTW',
      homepageURL: 'https://www.youtube.com/channel/UCIF_gt4BfsWyM_2GOcKXyEQ',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: 'cheap講歷史',
      feedID: 'cheapaoe',
      homepageURL: 'https://www.youtube.com/channel/UCGGrblndNzi86WY5lJkQJiA',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '窮奢極欲',
      feedID: 'withmoney',
      homepageURL: 'https://www.youtube.com/channel/UCA0o60mhG0v2Eha8wSL3_Jw',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: 'Leonard',
      feedID: 'leonard2834',
      homepageURL: 'https://www.youtube.com/channel/UC1mx_wcSHtfpLk5N_zY0TRg',
      itemFilters: ItemFiltersPreset.between3minTo30Min,
    },
    {
      title: '黃國昌直播',
      feedID: 'KC-Huang-streams',
      homepageURL: 'https://www.youtube.com/channel/UCNWAsexY9eiS1N6JDns-0kw',
      itemFilters: [
        ItemFiltersPreset.between30minTo180Min,
        (item) => { return ((item.title.startsWith('【國昌直播】'))) }
      ],
      options: {
        maxItems: 3
      }
    },
  ]
}

module.exports = ConfigCheck(CONFIG)