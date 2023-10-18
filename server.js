// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//   response.write('oi2')
  
//   return response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'

const server = fastify()

server.post('/videos', () => {
  return 'oi'
})

server.get('/videos', () => {
  return 'oi'
})

server.put('/videos/:id', () => {
  return 'oi'
})

server.delete('/videos/:id', () => {
  return 'oi'
})

server.listen({
  port: 3333,
})