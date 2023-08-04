const ShellSpawn = require('./ShellSpawn.js')

let sleep = function (ms = 500) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// let restartInterval = 3 * 60 * 1000
let restartInterval = 3 * 1000
let lastRestartTime

let inited = false
let restartCount = 0
let maxRestart = 10

const TorController = {
  // inited: false,
  start: function (options = {}) {
    return new Promise(async (resolve) => {
      while (inited === 'wait') {
        await sleep(3000)
      }
      if (inited === true && options.force !== true) {
        resolve(false)
        return false
      }
      inited = 'wait'
      console.log('[TOR] Start tor...', (new Date().toISOString()))
      await ShellSpawn(['bash', '/app/tor/tor-start.sh'])
      inited = true
      resolve()
      // require('dns').lookup(require('os').hostname(), async (err, add, fam) => {
      //   console.log('[TOR] IP addr: ' + add);
      //   // if (add === lastIP) {
      //   //   await sleep(30000)
      //   //   return this.restart({force: true})
      //   // }
      //   // lastIP = add
      //   resolve(add)
      // })
    })
  },
  restart: async function (options = {}) {
    if (options.force !== true && lastRestartTime && 
        ((new Date()).getTime() - lastRestartTime) < restartInterval) {
      return false
    }
    lastRestartTime = (new Date()).getTime()

    // await ShellSpawn(['bash', '/app/restart-tor.sh'])

    // await sleep(10 * 1000)

    // await this.start({force: true})
    return new Promise(async (resolve) => {
      // await ShellSpawn([`service`, 'tor', `restart`])
      restartCount++
      if (restartCount >= maxRestart) {
        console.error('[TOR] Reach max restart ' + maxRestart + ' ' + (new Date().toISOString()))
        return resolve(false)
      }

      console.log('[TOR] Restart ' + restartCount + ' ' + (new Date().toISOString()))
      await ShellSpawn(['bash', '/app/tor/tor-restart.sh'])
      // require('dns').lookup(require('os').hostname(), async (err, add, fam) => {
      //   console.log('[TOR] IP addr: ' + add);
      //   if (add === lastIP) {
      //     await sleep(30000)
      //     return this.restart({force: true})
      //   }
      //   lastIP = add
      //   resolve(add)
      // })
      resolve(true)
    })
      
  }
}

module.exports = TorController