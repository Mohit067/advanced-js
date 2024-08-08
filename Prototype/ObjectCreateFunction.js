function Event(dateOfEvent) {
    this.dateOfEvent = dateOfEvent;
}

Event.prototype.bookEvent = function () {
    console.log("book event");
}
// ƒ () {
//     console.log("book event");
// }
function moive(name) {
    this.name = name;
}
moive.prototype = Object.create(Event.prototype);
//Event {}
c = new moive("javan");
//moive {name: 'javan'}
console.log(c.bookEvent());
//VM867:2 book event