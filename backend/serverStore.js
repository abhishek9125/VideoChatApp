const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId })
    console.log('After Adding Connected User', connectedUsers)
}

const removeConnectedUser = (socketId) => {
    if(connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log('After Removing Connected User', connectedUsers)
    }
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser
}