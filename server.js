const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mysql = require('mysql')
const MySQLEvents = require('@rodrigogs/mysql-events')

io.on('connection', function(socket){
  console.log('a user connected')
  console.log(socket)
})

http.listen(3000, function(){
  console.log('listening on *:3000')
})

const program = async () => {
  const connection = mysql.createConnection({
    host: '0.0.0.0',
    port: 3306,
    user: 'root',
    password: 'root',
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