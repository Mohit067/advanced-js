class Event {
    bookEvent(){
        console.log("bookEvent")
    }
}
class movie extends Event {
    bookMovie(){
        console.log("bookMovie");
    }
}

movie.prototype
//Event {bookMovie: ƒ}
movie.prototype.__proto__
//{bookEvent: ƒ}



m = new movie();
//movie {}
m.bookMovie();
//VM2634:3 bookMovie

movie.prototype.__proto__
//{bookEvent: ƒ}