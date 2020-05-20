const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("click", function(){
    console.log("Hello World");
})

emitter.emit("click");

// Result: Hello World