const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello world!');
})
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
})

// /api/corses/1
app.get('/api/posts/:year/:month/:date',(req,res)=>{
   res.send(req.params);
})
// query parameter /api/posts/2019/12/20?sortBy=name
app.get('/api/posts/:year/:month/:date',(req,res)=>{
    res.send(req.query);
 })

//PORT
//set PORT=5000
const port =process.env.PORT||4000
 app.listen(port,()=>console.log(`listening on port ${port}`))