//modules
var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');
var DataHandler = require('./app/models/dataHandler');
var Sensor = require('./app/models/sensor');
var Setting = require('./app/models/setting');
var Data = require('./app/models/data');
var LevelAmplitudeSetting = require('./app/models/levelamplitudesetting');
var ScheduleSetting = require('./app/models/schedulesetting');
var app      = express();
var server   = require('http').Server(app);
var io       = require('socket.io')(server);

//configuration
mongoose.connect('mongodb://localhost/sensor');


app.use(express.static(__dirname + '/public'));
//authorize access
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//     if (req.method == 'OPTIONS') {
//         res.status(200).end();
//     } else {
//         next();
//     }
// });

//ROUTES=======================================

//route for index file

app.get('/', function (req, res) {
    //send index.html file in public directory
    res.sendfile('./public/index.html');
});

//route runs on the first launch to initialize and retrives dataHandlers

app.get('/dataHandler', function (req, res) {

    res.sendfile('public/index.html');
});

app.get('/data', function (req, res) {
    res.send();
})
var dataHandlerName = ['Temperature', 'Ph', 'Nitrites', 'Nitrates', 'Ammoniac'];

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}


io.on('connection', function(socket){
    console.log('a user connected');
    //Find
    DataHandler.find(function(err, dataHandlers) {
        if (err) return console.error(err);
        dataHandlers.forEach(function (dataHandler) {
            if(dataHandlerName.contains(dataHandler.name)){
                dataHandlers.push[dataHandler]
                console.log(dataHandler.name);
                console.log(JSON.stringify(dataHandler));
                // console.log(dataHandler.datas);
            } else {
                //removes dataHandlers not expected in dataHandlerName
                dataHandler.remove(function (err, dataHandler) {
                    if (err) console.error(err);
                    console.log(dataHandler.name+ ' removed!');
                })
            }
        });
    });

    socket.on('dataRetrieve',function(data) {
        console.log('need datas!');

        DataHandler.findOne({'name' : 'Temperature'}, function(err, dataHandler) {
            if(err) console.log(err);
            socket.emit('dataSend', JSON.stringify(dataHandler));
            console.log(dataHandler.datas[0].value);
        })


    });
});


var phSensor = new Sensor({name: 'temperature', value: 45});

var phSetting = new LevelAmplitudeSetting({
    amplitude: 45,
    level: 12
});

var setting = new Setting({name:'temperature', id: phSetting._id});
var data = new Data({value: '45', date: '12/10/2012'});
var Ph = new DataHandler({name: 'Temperature'});
Ph.sensor = phSensor;
Ph.setting = setting;
Ph.datas[0] = data;

// Ph.save(function(err, Ph) {
//      if (err) console.error(err);
// });

server.listen(8080);
console.log('It\'s going down in 8080');
