const express = require('express')
const path = require('path')

const app = express()

// Load view engine
app.set('views',path.join(__dirname,'views'))
app.set('view engine','pug')


let options = {
    users : [{name: 'Juan',age: 4},{name: 'Max',age: 43}]
}
// Home route
app.get('/',(req,res)=>{
    res.render('index',options)
})

const port = 3000
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})