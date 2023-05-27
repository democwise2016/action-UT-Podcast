const fs = require('fs')
const ParseUBID = require('./../ub/ParseUBID.js')
const CONFIG = require('../../config.js')

module.exports = function () {
  let {publicURL, feedList} = CONFIG

  let head = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>ACTION-UT-PODCAST</title>
</head>
<body>
<ul>
`
  let foot = `</ul>
</body>
</html>`

  let body = []
  feedList.forEach(({title, url}) => {
    let feedID = ParseUBID(url)
    let feedURL = publicURL + feedID + '.rss'
    body.push(`<li><a href="${feedURL}" target="_blank">${title}</a></li>`)
  })

  let html = head + body.join('\n') + foot
  fs.writeFileSync(`/output/index.html`, html, 'utf-8')
}