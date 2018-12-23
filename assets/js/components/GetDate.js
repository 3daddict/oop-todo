class GetDate {
    constructor() {
        this.getDate = new Date();
        this.dayInt = this.getDate.getDay();
        this.monthInt = this.getDate.getMonth();
        this.yearInt = this.getDate.getFullYear();
        this.monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        this.daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }

    createTodaysDate() {
        const todaysDate = this.daysOfWeek[this.dayInt] + ", " + this.monthNames[this.monthInt] + " " + this.dayInt + " " + this.yearInt;
        console.log('Todays Date: ', todaysDate);
        document.querySelector('#date').innerHTML = todaysDate;
    }

}