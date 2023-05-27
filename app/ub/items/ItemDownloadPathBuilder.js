const fs = require('fs')
// const UBVideoIdParser = require('./UBVideoIdParser.js')
const ShellSpawn = require('./../../lib/ShellSpawn.js')
const CONFIG = require('../../../config.js')

module.exports = async function (feedID, itemID) {
  if (fs.existsSync(`/output/${feedID}`) === false) {
    await ShellSpawn(`mkdir -p /output/${feedID}`)
  }

  return {
    localPath: `/output/${feedID}/${itemID}.mp3`,
    publicPath: CONFIG.publicURL + `${feedID}/${itemID}.mp3`,
  }
}