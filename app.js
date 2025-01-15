const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/Home', (req, res) => {
    res.sendFile('/views/home.html', { root: __dirname })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
