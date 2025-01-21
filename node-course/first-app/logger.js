var url = 'http://mylogger.io/log';
// they are private
function log(message){
    // send an HTTP request
    console.log(message);
}
// This makes log a function
module.exports = log; 




