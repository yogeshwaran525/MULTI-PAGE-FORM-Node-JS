const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();


const location =path.join(__dirname,"./public");
app.use(express.static(location));

// HTML files handle For view engine and hbd(handlebars)
app.set("view engine","hbs");
const htmlfilespath = path.join(__dirname+"/views/partials");
hbs.registerPartials(htmlfilespath);

app.use("/",require("./router/pages"));

const port = 2500;

app.listen(port,()=>{
    console.log("Server is listenong port  "+`${port}`)
});