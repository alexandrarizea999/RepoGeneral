const course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details(){
        return `${this.name} is ${this.duration}`;
    },
    set details(value){
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

// console.log(`${course.name} is ${course.duration}`);
// console.log(course.details());
console.log(course.details);
course.details = 'JavaScript Pro is 10 hours';
console.log(course.details);
