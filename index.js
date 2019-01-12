
var time = require('time');
exports.handler = (event, context, callback) => {
    console.log("Hello AWS")
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
};
