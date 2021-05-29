const express = require('express')
const axios = require('axios')
const newsRouter = express.Router()
const moment = require('moment')

newsRouter.get('/', async(req,res) =>{
    // res.render('news')

    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=6ce38786144c4ca2815463e385e5383e';

        const getNews =await axios.get(url)
        res.render('news',{articles:getNews.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

newsRouter.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=6ce38786144c4ca2815463e385e5383e`

        const getNews =await axios.get(url)
        res.render('news',{articles:getNews.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
})

module.exports = newsRouter




// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=bbc-news&' +
//           'apiKey=6ce38786144c4ca2815463e385e5383e';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })