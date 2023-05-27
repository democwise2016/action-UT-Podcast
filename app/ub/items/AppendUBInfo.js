const UBInfo = require('../UBInfo.js');

module.exports = async function (item) {
  // console.log(item)
  let link = item.link

  let info = await UBInfo.load(link)
  // console.log(info)

  Object.keys(info).forEach(key => {
    item[key] = info[key]
  })

  return item
}