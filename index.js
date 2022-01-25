const express = require('express') 
const app = express()

console.log('hihihihi')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)