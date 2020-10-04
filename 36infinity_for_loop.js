//Infinity for loop==========


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

for(; ;) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9){
        console.log("OK");
        break;
    }
    else{
        console.log("No");
    }
}