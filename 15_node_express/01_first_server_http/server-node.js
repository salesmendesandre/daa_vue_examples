// server-node.js
import http from 'http'

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hola desde Node sin Express\n')
})

server.listen(4000, () => {
  console.log('Servidor escuchando en http://localhost:4000')
})