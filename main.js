const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/style'));

app.get('/', function (req, res){
  res.render('home');
});

app.get('/mario', function (req, res){
  res.render('mario');
});

app.listen(port, ()=> {
	console.log(`running at http://localhost:${port}`)
})
