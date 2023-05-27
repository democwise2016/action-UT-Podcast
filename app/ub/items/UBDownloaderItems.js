const AppendUBInfo = require('./AppendUBInfo.js')
const ItemDownload = require('./ItemDownload.js')
const CleanOldItems = require('./CleanOldItems.js')

module.exports = async function (feedID, items, itemFilter, options = {}) {

  let {
    maxItems = 30,
  } = options

  // -------------

  let filteredItems = []
  let count = items.length
  if (count > maxItems + 1) {
    count = maxItems + 1
  }

  for (let i = 0; i < count; i++) {
    let item = items[i]

    item = await AppendUBInfo(item)

    if (await itemFilter(item) === false) {
      continue
    }

    item = await ItemDownload(feedID, item, options)
    filteredItems.push(item)
    // break
  }

  await CleanOldItems(feedID, options)

  return filteredItems
}