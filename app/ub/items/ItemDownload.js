const ItemDownloadPathBuilder = require('./ItemDownloadPathBuilder.js')
const fs = require('fs')
const UBMp3DownloaderWrapper = require('./UBMp3Downloader/UBMp3DownloaderWrapper.js')

module.exports = async function (item, feedItem = {}) {

  let {
    feedFilename,
    options = {}
  } = feedItem
  // console.log(item)

  let cached = true
  let {localPath, publicPath} = await ItemDownloadPathBuilder(feedFilename, item.id, item.mmddDate)

  // console.log(localPath)
  if (fs.existsSync(localPath) === false) {
    try {
      await UBMp3DownloaderWrapper(item.id, localPath, options)
    }
    catch (e) {
      console.error(e)
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