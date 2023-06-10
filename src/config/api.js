import { ParseServer } from 'parse-server'
import path from 'path'

const api = new ParseServer({
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017',
  cloud: process.env.CLOUD_CODE_MAIN || path.resolve(__dirname, '../../') + '/cloud/main.js',
  appId: process.env.APP_ID || 'yf6n6HagJ46Q7VrzJMzlPQ1MgAyu4ZsigbJpwVHO',
  masterKey: process.env.MASTER_KEY || 'igtH58aI9sz6iYzgz80dmqY0dsNHKU5GIiSpQrrE',
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse'
})

export default api
