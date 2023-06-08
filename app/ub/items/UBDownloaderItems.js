const AppendUBInfo = require('./AppendUBInfo.js')
const ItemDownload = require('./ItemDownload.js')
const CleanOldItems = require('./CleanOldItems.js')
const CONFIG = require('./../../../config.js')

module.exports = async function (items, feedItem = {}) {

  let {
    feedID,
    feedFilename,
    itemFilters = [], 
    options = {}
  } = feedItem

  let {
    maxItems = 30,
  } = options

  if (typeof(itemFilters) === 'function' && Array.isArray(itemFilters) === false) {
    itemFilters = [itemFilters]
  }

  // -------------

  let filteredItems = []
  let count = items.length
  // if (count > maxItems) {
  //   count = maxItems
  // }

  let notCachedCount = 0
  let downloadedCount = 0
  for (let i = 0; i < count; i++) {
    let item = items[i]

    item = await AppendUBInfo(item)

    let passed = true
    for (let j = 0; j < itemFilters.length; j++) {
      if (await itemFilters[j](item) === false) {
        passed = false
        break
      }
    }
    if (passed === false) {
      continue
    }

    let result = await ItemDownload(item, feedItem)
    if (!result) {
      continue
    }
    filteredItems.push(result.item)

    downloadedCount++
    if (downloadedCount >= maxDownload) {
      console.log(`Reach maxItems ${maxItems}. Go to next channel.`)
      break
    }

    let {cached} = result
    if (!cached) {
      notCachedCount++

      if (notCachedCount >= CONFIG.maxDownloadItemPerFeed) {
        console.log(`Reach max download ${CONFIG.maxDownloadItemPerFeed}. Go to next channel.`)
        break
      }
    }
    
    // break
  }

  await CleanOldItems(feedItem)

  return filteredItems
}