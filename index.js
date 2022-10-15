const express = require('express');

const app = express();

const middlewareOne = (req,res,next) => {
    console.log("I am the first Middleware");
    next();
}

const middlewareTwo = (req,res,next) => {
    console.log("I am the Second middleware");
    next();
}

app.get('/',(req,res) =>{
    res.send("<h1>Welcome to the Home Page</h1>");
})

app.get('/About',middlewareTwo,(req,res) => {
    res.send("<h4>These middleware can be applied on the whole application level as well as on one particular API route.</h4>");
})

app.get("/contact",middlewareTwo,(req,res) => {
    res.send("<h2>Welcome to the Contact details</h2>");
})

app.get("/author",(req,res) => {
    res.send("<h3>Author name: Umesh PM</h3>");
})

app.listen(3000,() => {
    console.log("Handson-3 Completed!!!");
})