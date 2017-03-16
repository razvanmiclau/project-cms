import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

// Express Server Defaults
const server = express();
const mongoConnection = '';
const port = process.env.PORT || 8080;

// DB connection through Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(mongoConnection);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Body parser and Morgan middleware
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use(morgan('dev'));

// We tell express where to find static assets
server.use(express.static(__dirname + '/client/dist'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Routes
server.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

server.listen(port);
console.log(`listening on port ${port}`);
