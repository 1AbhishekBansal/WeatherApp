const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const template_path = path.join(__dirname, "../templates/views");
app.set('view engine', 'hbs');
app.set('views', template_path);
const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);
// public static path
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));


//routing
// app.get(route, callback);
app.get("/", (req,res) => {
    res.render('index.hbs');
});
app.get("/about", (req,res) => {
    res.render('about');
});
app.get("/weather", (req,res) => {
    res.render('weather');
});
app.get("*", (req,res) => {
    res.render('404error', {
        errormsg:'Oops! Page Not Found'
    });
});
app.listen(port, ()=>{
    console.log(`listening to port no. ${port}`);
});