const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
  res.send("Hello World");
})

app.get('/about', (req,res) =>{
  res.send("Ini adalah halaman about");
})

app.get('/produk/:id', (req,res)=> {
  res.send(`Produk Id : ${req.params.id}`);
})

app.use('/', (req,res) => {
  res.status(404);
  res.send('<h1>Page Not Found 404</h1>');
})
app.listen(port,()=>{
  console.log(`Example app listening at http://localhost:${port}`);
})
