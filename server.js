
var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'articleOne':{
 title:'article-one',
 heading:'article-one',
 date:'5 sept 2000',
 content:`
   <p>hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p>
    <p>hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p>
    <p>hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p> 
 `
 
},
    'articleTwo':{
         title:'article-two',
 heading:'article-two',
 date:'5 sept 2000',
 content:`
   <p>hello this is artcle-two hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p>
    <p>hello this is artcle-two hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p>
    <p>hello this is artcle-two hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p> 
 `
    },
    'articleThree':{
         title:'article-three',
 heading:'article-three',
 date:'5 sept 2000',
 content:`
   <p>hello this is artcle-three hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p>
    <p>hello this is artcle-three hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p>
    <p>hello this is artcle-three hello this is artcle-one hello this is artcle-one hello this is artcle-one hello this is artcle-one </p> 
 `
    }
}
function createTemplate(data){

var date=data.date;
var title=data.title;
var heading=data.heading;
var content=data.content;
var htmlTemplate=
`
<html>
    <head>
        <title>${title}
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class='container'>
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>${date}</div>
            <div>
         ${content}
            </div>          
        </body>
</html>

`
;
return htmlTemplate
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.param.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
