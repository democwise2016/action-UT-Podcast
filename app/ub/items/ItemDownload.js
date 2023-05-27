const ItemDownloadPathBuilder = require('./ItemDownloadPathBuilder.js')
const fs = require('fs')
const UBMp3DownloaderWrapper = require('./UBMp3Downloader/UBMp3DownloaderWrapper.js')

module.exports = async function (feedID, item, options = {}) {
  let {localPath, publicPath} = await ItemDownloadPathBuilder(feedID, item.id)

  // console.log(localPath)
  if (fs.existsSync(localPath) === false) {
    await UBMp3DownloaderWrapper(item.id, localPath)
    // await CleanOldItems(feedID, options)
  }
  item.mediaURL = publicPath

  return item
}