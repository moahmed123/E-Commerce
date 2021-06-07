var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
var bodyParser = require('body-parser')

const Mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, 'views/Molo'));
// app.set('view engine', 'hbs');



app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.bodyParser());
// app.use(bodyParser.urlencoded({ extended: false }));

app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'views')));// style / Font 
// app.use(express.static(path.join(__dirname, 'views/Molo')));// style / Font 
// db Mongo
// const Url = 'mongodb://localhost/mainuser';
// Mongoose.connect(Url, {
//    useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err, db) => {
//    // console.log(db, 'moahed alaaa')
//    // res.send('moahed alaaa')
//    if (err) {
//        console.log(err)
//    } else {
//        console.log("db connected")
//        // let path = req.headers.host;
//        let path = "localhost:3002";
//        console.log(Mongoose.connection.name)
//        //localhost:3088
//        console.log("Path ===> ", path)
//        Mongoose.connection.db.collection("userdata").findOne({ url: path }, (err, doc) => {
//            if (err) throw err;
//            console.log(doc)
//            if (doc) {
//             //    let path = req.headers.host;
//             //    console.log(path)
//                Mongoose.disconnect(() => {
//                    Mongoose.connect(`mongodb://localhost/userone`, (err_db, result) => {
//                        if (err_db) throw err_db;
//                        console.log(Mongoose.connection.name)
//                        Mongoose.connection.db.collection("Products").findOne({}, (err_db, result) => {
//                            if (err_db) throw err_db;
//                         //    res.status(200).json(result);                                    
//                        })
//                    });
//                });
//            } else {
//             //    res.status(200).json({
//             //        Message: 'not Found This Store Code',
//             //        Error: 'Not Found '

//             //    });
//            }
//        })

//    }
// });

// Mongoose.connect("mongodb://localhost/userone", {
//     useNewUrlParser: true,
//      useUnifiedTopology: true
//  })
 Mongoose.connect('mongodb://localhost/usertwo', {useNewUrlParser: true,  useUnifiedTopology: true }, (err)=>{
  if(err){
    console.log(err)
  }else{
    console.log('DB Connecting ');     
  }

});
// End db Mongo
app.use('/', indexRouter);
app.use('/admin', adminRouter)
app.use('/users', usersRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
