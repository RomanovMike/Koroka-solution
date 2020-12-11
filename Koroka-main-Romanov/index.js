let express = require('express')
let http = require('http')
let path = require('path')
let sassMiddleware = require('node-sass-middleware')
let ejs = require('ejs');
const fetch = require('node-fetch');


let app = express()

app.set("view engine", "ejs");

app.use(sassMiddleware({
  src: path.join(__dirname, 'bootstrap'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}))

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res, next) {
  fetch('https://reqres.in/api/users?per_page=20')
    .then(response => response.json())
    .then(data => {
      res.render('index.ejs', data)
    })
    .catch(err => console.log(err))

})


let server = http.createServer(app)

server.listen('3000', () => {
  console.log('Listening on port 3000')
})