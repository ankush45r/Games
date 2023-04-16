const express = require('express');
const app = express();

app.use(express.static('views'));

app.get('/home',(req,res)=>{
    res.render('home/home.ejs');
})

app.get('/piggame',(req,res)=>{
    res.render('PIGGAME/pig.ejs');
})

app.get('/snake',(req,res)=>{
    res.render('SNAKEGAME/snake.ejs');
})

app.get('/snake2',(req,res)=>{
    res.render('SNAKEGAME/SnakeGame/snake2.ejs');
})

app.get('/tictactoe',(req,res)=>{
    res.render('TICTACTOE/tictactoe2.ejs')
})

app.listen(4000);
