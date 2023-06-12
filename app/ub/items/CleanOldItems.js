const fs = require('fs')
const getFileListByCreationDate = require('./getFileListByCreationDate.js')

module.exports = async function (feedItem = {}) {
  let {
    feedFilename,
    options = {}
  } = feedItem

  let {
    maxItems = 30,
  } = options

  // --------------------
  // 列出目前檔案，按照建立日期排序
  let folder = `/output/${feedFilename}/`
  if (fs.existsSync(folder) === false) {
    return false
  }

  let fileList = getFileListByCreationDate(folder)
  // console.log(fileList)

  for (let i = 0; i < fileList.length - maxItems; i++) {
    let filePath = folder + fileList[i]
    console.log('Clean: ', filePath)
    fs.unlinkSync(filePath)
  }
}