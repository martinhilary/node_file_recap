const EventEmitter = require('events');

//Create class 
class MyEmitter extends EventEmitter { }

//Init Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => console.log('Events Fired'));
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
