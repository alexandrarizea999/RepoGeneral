const course = {
    name: 'JavaScript for Beginners',
    duration: '3 hours',
    get details(){
        return `${this.name} is ${this.duration}`;
    },
    set details(value){
        if(typeof value !== 'string'){
            throw new Error(`Value, ${value} is not a string`);
        }
        let parts = value.split(' is ');
        this.name = parts[0];
        this.duration = parts[1];
    }
};

try{
    course.details = 42; 
} catch(e){
    console.log(`Caught an error: ${e.message}`);
}


