const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
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
  // {
  //   title: '動畫小坑谷',
  //   feedID: 'valleylife351',
  //   homepageURL: 'https://www.youtube.com/channel/UCbCb-ZUoKwQ8vcRbrH2nE0Q',
  //   itemFilters: ItemFiltersPreset.between1minTo10Min,
  // },
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
    title: '敖厂长',
    feedID: 'hawkaoaoful',
    homepageURL: 'https://www.youtube.com/channel/UCCkMW93Am1pLfk2nZFKAmbQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
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
    title: '人妻聊日本企業',
    feedID: 'tacchan',
    homepageURL: 'https://www.youtube.com/channel/UCge049AFxJnXWPxYzGKoWyQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Buchi聊時事',
    feedID: 'LinBuchi',
    homepageURL: 'https://www.youtube.com/channel/UCgHUl1pwUVfrX8QotB-t2gQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // {
  //   title: '四處觀察',
  //   feedID: 'sichuguancha',
  //   homepageURL: 'https://www.youtube.com/channel/UC6OeJCR9gHsJPVyNhXfK4tA',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
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
    title: '孫沁岳 漫遊快譯通',
    feedID: 'yorke',
    homepageURL: 'https://www.youtube.com/channel/UCD114v8IMP5HWSUXrIJlJuQ',
    itemFilters: [
      ItemFiltersPreset.between6minTo60Min,
      (item) => { return ((item.title.indexOf('【漫遊快譯通】') > -1)) }
    ]
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
  // 被刪除了
  // {
  //   title: '漫天大坑-Kay',
  //   feedID: 'kayshi_0521',
  //   homepageURL: 'https://www.youtube.com/channel/UC29L37o2cslmXRhOLn04bCA',
  //   itemFilters: [
  //     ItemFiltersPreset.between3minTo30Min,
  //     (item) => { return ((item.title.indexOf('動畫鑑賞集錦') === -1) || (item.title.indexOf('作畫回顧') === -1)) }
  //   ]
  // },
  // {
  //   title: '玩家機密 每週新聞',
  //   feedID: 'GamerSecret-News',
  //   homepageURL: 'https://www.youtube.com/channel/UCmtmIF-u0ojej0y9i9STuIw',
  //   thumbnailBorderColor: true,
  //   itemFilters: [
  //     ItemFiltersPreset.between3minTo30Min,
  //     (item) => { return ((item.title.indexOf('【每週新聞】') >-1)) }
  //   ],
  //   options: {
  //     maxItems: 3
  //   }
  // },
  {
    title: '啾啾鞋',
    feedID: 'chuchushoeTW',
    homepageURL: 'https://www.youtube.com/channel/UCIF_gt4BfsWyM_2GOcKXyEQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Leonard',
    feedID: 'leonard2834',
    homepageURL: 'https://www.youtube.com/channel/UC1mx_wcSHtfpLk5N_zY0TRg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // {
  //   title: '黃國昌直播',
  //   feedID: 'KC-Huang-streams',
  //   homepageURL: 'https://www.youtube.com/channel/UCNWAsexY9eiS1N6JDns-0kw',
  //   itemFilters: [
  //     ItemFiltersPreset.between30minTo180Min,
  //     (item) => { return ((item.title.startsWith('【國昌直播'))) }
  //   ],
  //   options: {
  //     maxItems: 3
  //   }
  // },
  {
    title: '社長Kuma',
    feedID: 'Super_Kuma',
    homepageURL: 'https://www.youtube.com/channel/UC4_ofgezp9nrPXHSmZMT97g',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min
    ],
  },
  {
    title: '文字與資本主義 冏冏',
    feedID: 'Kyontw828',
    homepageURL: 'https://www.youtube.com/channel/UC_xVdv15MR17rQf-nUl92MA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '台灣聲優研究所',
    feedID: 'Taiwanesevoiceactor',
    homepageURL: 'https://www.youtube.com/channel/UCLyxEJ727Sca3pSViFvJpTg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // {
  //   title: 'ARIA軍武動漫雜談',
  //   feedID: 'Aria-Armory',
  //   homepageURL: 'https://www.youtube.com/channel/UCOlwkBhjMe1PNm9055AQ88Q',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  {
    title: '卡欸蝶 聊動畫',
    feedID: 'animekaede_',
    homepageURL: 'https://www.youtube.com/channel/UCTY5Ac6bOFjWJj_0EKzJoyA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Hung-yi Lee 上課囉',
    feedID: 'HungyiLeeNTU',
    homepageURL: 'https://www.youtube.com/channel/UC2ggjtuuWvxrHHHiaDH1dlQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '黃逸豪的喜劇本位主義',
    feedID: 'comedyihao',
    homepageURL: 'https://www.youtube.com/channel/UCCc2xNwMwwGs5T5UPaKh0Tw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'KAZBOM 聊音樂',
    feedID: 'kazbom',
    homepageURL: 'https://www.youtube.com/channel/UCOBVyJhiDg39fjjXPWbyOqg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '杰克艾米立 AI大小事',
    feedID: 'JackEllie-AInews',
    homepageURL: 'https://www.youtube.com/channel/UCine3_lVU-rFDRRI8xeImHA',
    // thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between1minTo30Min,
      (item) => { return ((item.title.indexOf('AI大小事') >-1)) }
    ],
  },
  // {
  //   title: '閱部客',
  //   feedID: 'yuubuke',
  //   homepageURL: 'https://www.youtube.com/channel/UCBvQ4hOEoDdYeIBu0tE-7Sg',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
  // {
  //   title: 'Kay_漫天大坑',
  //   feedID: 'Kay2',
  //   homepageURL: 'https://www.youtube.com/channel/UCwtcobm6l5gv0LcKVwzQgPw',
  //   itemFilters: ItemFiltersPreset.between1minTo30Min,
  // },
  {
    title: '蛋弟 動漫心理學',
    feedID: 'user-sg9pi2kv7d',
    homepageURL: 'https://www.youtube.com/channel/UCtlELst50iCTWw_D9jt1cEg',
    itemFilters: ItemFiltersPreset.between6minTo60Min,
  },
  { // <outline type="rss" text="游戲指南針++$0414-1925$" title="游戲指南針++$0414-1925$" xmlUrl="http://pulipuli.myqnapcloud.com/304/fc/$0414-1925$/https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCVjXB6QUf_aZ_FninmssCOg" htmlUrl="https://www.youtube.com/channel/UCVjXB6QUf_aZ_FninmssCOg"/>
    title: '林亦LYi 聊 3C',
    feedID: 'lyi',
    homepageURL: 'https://www.youtube.com/channel/UC4dtpugIYK56S_7btf5a-iQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  // { 
  //   title: '萊丘 Laichu 聊 3C',
  //   feedID: 'LaichuTV',
  //   homepageURL: 'https://www.youtube.com/channel/UCHSFWd7MUGTY7xRdiGeMALw',
  //   itemFilters: ItemFiltersPreset.between3minTo30Min,
  // },
]

// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '萊斯 新Game報',
//     feedID: 'LiceMoo-GameNews',
//     homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
//     thumbnailBorderColor: true,
//     itemFilters: [
//       ItemFiltersPreset.between3minTo30Min,
//       // (item) => { return (item.title.indexOf('《新Game報') > -1) }
//     ],
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
