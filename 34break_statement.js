//Break statement===


while(true){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9){
        console.log("OK");
        break;
    }
    else{
        console.log("No");
    }
}

for (var i = 1; i < 10; i++){
    if(i % 3 === 0){
        break;
    } else{
        console.log(i);
    }
}