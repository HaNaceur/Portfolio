const express=require('express');
const app=express();
const port=3000;

app.set('view engine', 'ejs')
app.set('views', './views');


app.use(express.static('public'));

app.get ('/',(req,res,next)=>{
    res.render('home');
    next();
});

app.get('/aboutme', (req, res,next)=> {
    res.render('aboutme');
    next();
});

app.get('/projects', (req, res,next)=> {
    res.render('projects');
    next();
});

app.get ('/contact',(req,res,next)=>{
    res.render('contact');
    next();
});

app.get ('/games',(req,res,next)=>{
    res.render('games');
    next();
});


app.use((req,res)=>{
    res.status(404).render('404');
})

app.listen(port);