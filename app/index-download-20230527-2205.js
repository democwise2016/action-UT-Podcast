const ShellSpawn = require('./lib/ShellSpawn.js')
const FeedSimple = require('./blog.pulipuli.info/FeedSimple.js')

const UBMp3Downloader = require('./lib/ub-mp3-downloader/lib/UBMp3Downloader.js')
// const TorHTMLLoader = require('./lib/tor-html-loader/tor-html-loader.js')

let main = async () => {
  // await ShellSpawn(`youtube-dl -x --audio-format mp3 https://www.youtube.com/watch?v=7E-cwdnsiow`)
  // await FeedSimple()

  console.log('before options')  

  let options = await getOptions()
  let YD = new UBMp3Downloader(options)

  YD.on("finished", function(err, data) {
    console.log('ok')
  })

  YD.on("error", async function(error) {
    console.error(error)
  })

  console.log('before download')

  YD.download('29t3pJd75XU', '29t3pJd75XU.mp3');
}

async function getOptions () {

  let outputPath = '/output/'

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

// async function getAgent () {
//   let agent
  
//   agent = await TorHTMLLoader.getAgent()

//   return agent
// }

main()



