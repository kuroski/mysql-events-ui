const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mysql = require('mysql')
const MySQLEvents = require('@rodrigogs/mysql-events')
require('dotenv').load()

io.on('connection', (socket) => {
  console.log('a user connected')
  console.log(socket)
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})

const program = async () => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  })

  const instance = new MySQLEvents(connection, {
    startAtEnd: true,
    excludedSchemas: {
      mysql: true,
    },
  })

  await instance.start()

  instance.addTrigger({
    name: 'OPERATIONS',
    expression: '*',
    statement: MySQLEvents.STATEMENTS.ALL,
    callback: (event) => {
      console.log(event)
      io.emit('operationReceived', event)
    },
  })

  instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error)
  instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error)
}

program()
  .then(() => console.log('Waiting for database vents...'))
  .catch(console.error)