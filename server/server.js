import path from 'path'

import express from 'express'
import { MongoClient } from 'mongodb'

import devBundle from './devBundle'
import template from './../index'


const CURRENT_WORKING_DIR = process.cwd()
let port = process.env.PORT || 3000


const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
MongoClient.connect(url, (err, db) => {
  console.log("Connected successfully to mongodb server")
  db.close()
})


const app = express()

devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
  res.status(200).send(template())
})

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', port)
})
