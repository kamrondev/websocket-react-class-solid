const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('Successfully connected to socket.io')
  socket.on('message', (payload) => {
    console.log(payload)
    io.emit('message', payload)
  })
})

const PORT = 8080
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
