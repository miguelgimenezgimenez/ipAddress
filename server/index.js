require('babel-register')

const path = require('path')
const express = require('express')
const reactServer = require('react-dom/server')
const React = require('react')

const routes = require('./routes')
const errorMiddleware = require('./middlewares/error')

const port = process.env.PORT || 3000
const app = express()

const DIST_DIR = path.join(__dirname, 'dist')

app.use(express.static(DIST_DIR))

app.use('/api', routes)

app.use('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'))
})
app.use(errorMiddleware)

app.listen(port, () => {
  // eslint-disable-next-line
    console.log('Express running on http://localhost:3000')
})
