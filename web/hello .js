for (let index = 0; index < 10; index++) {
    console.log("hello kirk index = " + index);  
    if (index ==5) {
        console.log("hey im at 5");
    }
    message(index);
    message(11)
    
}

function message(index) {
    if(index == 11) {
        console.log("message function called " + index);
    }
    

}