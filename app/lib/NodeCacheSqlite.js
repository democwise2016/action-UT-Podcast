
let enableCache = true
// enableCache = false

const sqliteStore = require('cache-manager-sqlite')
const cacheManager = require('cache-manager')

/* global path, __dirname, cacheClass, sequelize, databases, databaseName */
const cachePath = '/cache/'
const path = require('path')
const fs = require('fs')

function isAsyncFunction(func) {
  return func.constructor.name === 'AsyncFunction';
}

const NodeCacheSqlite = {
  databases: {},
  getDatabase: async function (databaseName) {

    if (this.databases[databaseName]) {
      return this.databases[databaseName]
    }

    this.databases[databaseName] = cacheManager.caching({
      store: sqliteStore,
      name: 'cache',
      path: path.join(cachePath, 'node-cache-sqlite_' + databaseName + '.sqlite'),
      options: {
        serializer: 'cbor'
      }
    })

    // console.log(path.join(cachePath, databaseName + '.sqlite'), fs.existsSync(path.join(cachePath, databaseName + '.sqlite')))

    return this.databases[databaseName]
  },
  get: async function (databaseName, key, value, expire) {
    // console.log(databaseName)
    let database = await this.getDatabase(databaseName)

    let result = await database.get(key)

    if (result === undefined && value !== undefined) {
      if (typeof(value) === 'function') {
        if (isAsyncFunction(value)) {
          result = await value()
          await database.set(key, value, expire)
        }
        else {
          result = await database.wrap(key, value, expire)
        }
      }
      else {
        await database.set(key, value, expire)
      }
    }
    return result
  },
  isExists: async function (databaseName, key) {
    return ((await this.get(databaseName, key)) !== undefined)
  },
  clear: async function (databaseName, key) {
    let database = await this.getDatabase(databaseName)

    await database.del(key)
    return true
  }
}

module.exports = NodeCacheSqlite  