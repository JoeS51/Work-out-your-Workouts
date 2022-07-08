// require('dotenv').config()

const express = require('express')
const webApp = express()

webApp.use((req, res , next) => {
    console.log(req.path, req.method)
    next()
})

webApp.get('/', (req, res) => {
    res.json({msg: 'Welcome!'})
})

webApp.listen(4000, () => {
    console.log('listening to port', 4000)
})

