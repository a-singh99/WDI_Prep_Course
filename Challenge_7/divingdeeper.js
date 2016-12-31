//magic eightball

var numberofreplys = 5;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    switch (choice) {
        case 1:
            console.log("Life is good");
            break;
        case 2:
            console.log("Everything will be alright");
            break;
        default:
            console.log(reply);
    }
    console.log(choice);
}

ask();