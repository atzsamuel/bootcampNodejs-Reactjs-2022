import http from 'http';
//const http = require('http');

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'application/json'});
  res.write(JSON.stringify([
    {
      message: 'Hola mundo desde nodejs',
      codigo:1,
      nombre : 'Juan',
      precio: 100,
      cantidad:10
    },{
      message: 'Hola mundo desde nodejs 2',
      codigo:2,
      nombre : 'Data',
      precio: 100,
      cantidad:10
    }
  ]));
  res.end();
})

server.listen(5000,()=>{
  console.log('Server is listening in port 5000')
})