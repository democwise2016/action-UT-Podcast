const UBMp3Downloader = require('./UBMp3Downloader.js')

async function getOptions (outputPath) {

  // let outputPath = '/output/'

  //Configure Yo utu beMp 3Down l oad er with your settings
  let options = {
    //"ffmpegPath": path.resolve(__dirname, "./ffmpeg.exe"),        // FFmpeg binary location
    "ffmpegPath": 'ffmpeg',        // FFmpeg binary location
    "outputPath": outputPath,    // Output file location (default: the home directory)
    "queueParallelism": 1,                  // Download parallelism (default: 1)
    "progressTimeout": 200000000,                // Interval in ms for the progress reports (default: 1000)
    "allowWebm": false,                      // Enable download from WebM sources (default: false)
    'maxRetries': 10,
//     'requestOptions': {
//       // agent: await getAgent(), 
// //        strictSSL: false,
// //        agentClass: socks5Agent,
// //        agentOptions: {
// //          socksHost: '127.0.0.1', // Defaults to 'localhost'.
// //          socksPort: 9050, // Defaults to 1080.
// //          // Optional credentials
// //          //socksUsername: 'proxyuser',
// //          //socksPassword: 'p@ssw0rd',
// //          },
//       //secure:false,
//       headers: {
//         //'User-Agent': 'Request-Promise'
// //          'User-Agent': 'node.js',
// //          secure: false,
// //          strictSSL: false,
//       }
    // }
  }

  options['y' + 'ou' + 'tu' + 'beVideoQuality'] = 'highestaudio' // Desired video quality (default: highestaudio)
  

  return options
}

module.exports = async function (videoID, output) {
  let pos = output.lastIndexOf('/') + 1
  let dir = output.slice(0, pos)
  let filename = output.slice(pos)

  let options = await getOptions(dir)
  let YD = new UBMp3Downloader(options)

  YD.on("finished", function(err, data) {
    console.log('Downloaded: ' + videoID)
  })

  YD.on("error", async function(error) {
    console.error(error)
  })

  YD.download(videoID, filename);
}