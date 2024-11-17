// function to display the number
const display = document.getElementById("display")

function appendToDisplay(number){
    display.value += number;
}

// function to clear the display
function clearDisplay(){
    display.value = "";
}

// function to handle the calculations
function calculate(){
    try{
        display.value = eval(display.value);
    } catch{
        display.value = "Error";
    }
}