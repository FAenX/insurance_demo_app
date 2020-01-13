import express from 'express';
import { join } from 'path';
import proxy from 'express-http-proxy';
import compression from 'compression';



const app = express();

app.use(compression())



// Serve static files....
app.use(express.static(__dirname + '/build'));

const backendUrl = "http://kiprono123456.pythonanywhere.com/";



app.use('/api/v1/*', proxy(backendUrl, {
  timeout: 60000,
}))

app.get("/*", (req, res)=> {
  res.sendFile('index.html', { root: join(__dirname, "/build") });     
});

// default Heroku PORT
app.listen(process.env.PORT || 5000);