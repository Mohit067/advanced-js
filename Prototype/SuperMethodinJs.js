class Event {
    constructor(dateOfEvent) {
        this.dateOfEvent = dateOfEvent;
    }
    bookEvent() {
        console.log("book event");
    }
}
class movie extends Event {
    constructor(movieName, movieDate){
        super(movieDate);  // super is used to call the constructor of the parent class
        this.movieName = movieName;
        // this.movieDate = movieDate;
    }
}
let dp = new movie("deadpool", "27-07-2024");
console.log(dp);
/**
movie { dateOfEvent: '27-07-2024', movieName: 'deadpool' }
*/


//if i don't call super and we creat (this.movieDate = movieDate).
//then dateOfEvent is wasted so we call super method in child class