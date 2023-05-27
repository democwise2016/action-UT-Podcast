const ShellSpawn = require('./lib/ShellSpawn.js')
const FeedSimple = require('./blog.pulipuli.info/FeedSimple.js')

let main = async () => {
  // await ShellSpawn(`youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=7E-cwdnsiow -o /output/ok.mp3`)
  await FeedSimple()
}
main()

