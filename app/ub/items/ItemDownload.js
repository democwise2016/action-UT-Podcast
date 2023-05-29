const ItemDownloadPathBuilder = require('./ItemDownloadPathBuilder.js')
const fs = require('fs')
const UBMp3DownloaderWrapper = require('./UBMp3Downloader/UBMp3DownloaderWrapper.js')
const NodeCacheSqlite = require('./../../lib/NodeCacheSqlite.js')

module.exports = async function (item, feedItem = {}) {

  let {
    feedFilename,
    options = {}
  } = feedItem
  // console.log(item)

  let id = item.id
  if (id.indexOf(':') > -1) {
    id = id.split(':').slice(-1)[0]
  }

  if (await NodeCacheSqlite.isExists('UBMp3DownloadFailed', id)) {
    return false
  }

  let cached = true
  let {localPath, publicPath} = await ItemDownloadPathBuilder(feedFilename, id, item.mmddDate)

  if (fs.existsSync(localPath) === false) {
    try {
      await UBMp3DownloaderWrapper(id, localPath, options)
    }
    catch (e) {
      console.error(e)
      await NodeCacheSqlite.set('UBMp3DownloadFailed', id, true)
      return false
    }
    // await CleanOldItems(feedID, options)
    cached = false
  }
  item.mediaURL = publicPath

  return {
    item,
    cached
  }
}