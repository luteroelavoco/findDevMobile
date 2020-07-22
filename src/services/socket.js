import socketio from "socket.io-client";
import { url } from "./api";

const socket = socketio(url, {
    autoConnect: false
})

function connect(data) {
    socket.io.opts.query = data;
    socket.connect();
}

function disconnect(){
    socket.disconnect();
}

export{
    connect,
    disconnect
}