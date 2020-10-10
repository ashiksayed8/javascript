//inner function====
function something(greet , name)  {
    function getFirstname() {
        // console.log(greet,  name);
        if (name) {
            return name.split(' ')[0]
        } else {
            return ' '
        }
        
    }
    var message = greet + ' ' + getFirstname();
    console.log(message);
}
something('Good morning', "sayed ashik")
something('Good morning')