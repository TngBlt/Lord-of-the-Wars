function init(io) {
    io.on('connection',function (socket) {
        console.log('a user connected');
    })
}

module.exports = init();