const AppendUBInfo = require('./AppendUBInfo.js')
const ItemDownload = require('./ItemDownload.js')
const CleanOldItems = require('./CleanOldItems.js')

module.exports = async function (feedID, items, itemFilters = [], options = {}) {

  let {
    maxItems = 30,
  } = options

  if (typeof(itemFilters) === 'function' && Array.isArray(itemFilters) === false) {
    itemFilters = [itemFilters]
  }

  // -------------

  let filteredItems = []
  let count = items.length
  if (count > maxItems) {
    count = maxItems
  }

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

    item = await ItemDownload(feedID, item, options)
    filteredItems.push(item)
    // break
  }

  await CleanOldItems(feedID, options)

  return filteredItems
}