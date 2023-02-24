const express = require('express')
const dotenv = require ('dotenv')
const morgan = require ('morgan')
const bodyparser = require ('body-parser')
const path = require ('path')  


const app= express ()

//setting up dotenv 
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//setting up morgan for log requests
app.use(morgan('tiny'))


//parse reqests to body-parser module
app.use(bodyparser.urlencoded({extended:true}))


//set view engine
app.set("view engine", "ejs")
// app.set('views', path.resolve(__dirname, "views"))


//load asset 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.get('/', (req, res) => {
    res.render('index1')
})

app.listen(3000, () =>{
    console.log(`Server is on //http:localhost:${PORT}`);
})