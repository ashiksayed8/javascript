//While loop=======
var i = 0
while(i < 10) {
    console.log("Ashik");
    i++;
}

//main use of while loop===

var isRunning = true

while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9){
        console.log("OK");
        isRunning = false;
    }
    else{
        console.log("No");
    }
}