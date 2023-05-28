const fs = require('fs')
// const UBVideoIdParser = require('./UBVideoIdParser.js')
const ShellSpawn = require('./../../lib/ShellSpawn.js')
const CONFIG = require('../../../config.js')

module.exports = async function (feedID, itemID, mmddDate) {
  if (fs.existsSync(`/output/${feedID}`) === false) {
    await ShellSpawn(`mkdir -p /output/${feedID}`)
  }

  let filename = `${itemID}.mp3`
  if (mmddDate) {
    filename = mmddDate + '-' + filename
  }

  return {
    localPath: `/output/${feedID}/${filename}`,
    publicPath: CONFIG.publicURL + `${feedID}/${filename}`,
  }
}