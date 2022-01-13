
const request = require('request')
const apiNews = (callback) =>{
    const url = 'https://newsapi.org/v2/everything?q=sport&from2021-12-11&sortBy=publishedAt&apiKey=d4dfb4faecf543e6be2521a72d4bc628';
    request({url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect weather service!',undefined)
        }
        else if(response.body.status == 'error'){
            callback(response.body.message,undefined)
        }
        else if(response.body.message == '"The request is invalid.'){
            callback('"The request is invalid.')

        }
        else if(response.body.articles  == 0){
            callback('totalResults = ' +' '+ (response.body.totalResults))
        }
        else{
            callback(undefined,
                response.body.articles 
                
                )
        }
    }) 
}
module.exports = apiNews