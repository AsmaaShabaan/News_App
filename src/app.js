
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const publicDirectory = path.join(__dirname,'../public')
app.use(express.static(publicDirectory))

app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)


// partials (header/footer)
// const hbs = require('hbs')
// const partialsPath = path.join(__dirname,'../templates/partials')
// hbs.registerPartials(partialsPath)



const news = require('./tools/news.js')

app.get('/',(req,res) => {
    news((error,response) => {
        if(error) {
            return res.send({error})
        }
        res.render('index',{response})
    })
})







// app.get('*',(req,res)=>{
//     res.render('404page',{
//         title:'404 Not found',
//         name:'Default page'
//     })
// })



app.listen(port, () => {
  console.log('Listening on port 3000')
})
