const io = require('socket.io')(8900, {
    cors: {
        origin: "http://127.0.0.1:3000"
    }
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId)
}

io.on('connection', socket => {
    console.log("user connected");
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    })

    socket.on("sendMessage", ({sender, reciever, contents})=>{
        const user = getUser(reciever);
        io.to(user.socketId).emit("getMessage", {
            sender, contents
        })
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
        removeUser(socket.id);
        io.emit("getUsers", users);
    })
});