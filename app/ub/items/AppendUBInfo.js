const UBInfo = require('../UBInfo.js');

module.exports = async function (item) {
  // console.log(item)
  let link = item.link

  let info = await UBInfo.load(link)
  // console.log(info)

  Object.keys(info).forEach(key => {
    item[key] = info[key]
  })

  if (item.id.indexOf(':') > -1) {
    item.id = item.id.split(':').slice(-1)[0]
  }

  return item
}