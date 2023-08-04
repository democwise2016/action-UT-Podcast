const AppendUBInfo = require('./AppendUBInfo.js')
const ItemDownload = require('./ItemDownload.js')
const CleanOldItems = require('./CleanOldItems.js')
const CONFIG = require('./../../../config.js')

let startTimer = false
let maxExcutionMS = CONFIG.maxExcutionMinutes * 60 * 1000

const isNewerThenLatestFile = require('./isNewerThenLatestFile.js')
const getFileListByCreationDate = require('./getFileListByCreationDate.js')
const NodeCacheSqlite = require('./../../lib/NodeCacheSqlite.js')

const ItemDownloadPathBuilder = require('./ItemDownloadPathBuilder.js')
let nextChannelCount = 0

module.exports = async function (items, feedItem = {}) {

  if (!startTimer) {
    startTimer = (new Date()).getTime()
  }

  let {
    // feedID,
    // feedFilename,
    itemFilters = [], 
    options = {},
    feedFilename = ''
  } = feedItem

  let {
    maxItems = CONFIG.maxDownloadItems,
  } = options

  if (typeof(itemFilters) === 'function' && Array.isArray(itemFilters) === false) {
    itemFilters = [itemFilters]
  }

  // -------------

  let folder = `/output/${feedFilename}/`
  let filteredItems = []
  let count = items.length
  // if (count > maxItems) {
  //   count = maxItems
  // }

  let notCachedCount = 0
  let downloadedCount = 0

  return new Promise(async (resolve) => {
    let timer = setTimeout(() => {
      resolve(filteredItems)
    }, (CONFIG.maxExcutionMinutes - 1) * 60 * 1000)

    try {
      for (let i = 0; i < count; i++) {
        if ((new Date()).getTime() - startTimer > maxExcutionMS) {
          break
        }

        let item = items[i]

        item = await AppendUBInfo(item)
        if (!item) {
          continue
        }

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

        // ======================
        // 檢查是不是已經有超過數量了？
        // if (isNewerThenLatestFile(item, feedFilename) === false) {
        //   if (getFileListByCreationDate(folder).length >= maxItems) {
        //     console.log(`Downloaded files over maxItems ${maxItems}. Go to next channel.`, feedFilename)
        //     break
        //   }
        // }
        if (isNewerThenLatestFile(item, feedFilename) === false) {
          let {localPath} = await ItemDownloadPathBuilder(feedFilename, item.id, item.yyyymmddDate)
          if (await NodeCacheSqlite.isExists('CleanOldItems', localPath)) {
            console.log(`File has been removed: $localPath`)
            continue
          }
        }

        // ======================

        let result = await ItemDownload(item, feedItem)
        if (!result) {
          continue
        }
        filteredItems.push(result.item)

        downloadedCount++
        if (downloadedCount >= maxItems) {
          nextChannelCount++
          console.log([`[DOWNLOAD] Reach maxItems ${maxItems}. Go to next channel.`, feedFilename, nextChannelCount, (new Date().toISOString())].join('\t'))
          break
        }

        let {cached} = result
        if (!cached) {
          notCachedCount++

          if (notCachedCount >= CONFIG.maxDownloadItemPerFeed) {
            nextChannelCount++
            console.log([`[DOWNLOAD] Reach max download ${CONFIG.maxDownloadItemPerFeed}. Go to next channel.`, feedFilename, nextChannelCount, (new Date().toISOString())].join('\t'))
            break
          }
        }
        
        // break
      }
    }
    catch (e) {
      console.error([e, (new Date().toISOString())].join('\t'))
    }

    await CleanOldItems(feedItem)

    clearTimeout(timer)
    // return filteredItems
    resolve(filteredItems)
  })
    
}