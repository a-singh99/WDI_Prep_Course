for (var i = 1; i < 101; i++){
    console.log(i);
}


for (var i = "#"; (i.length) < 8; i+="#"){
    console.log(i);
}


for (var i = 1; i < 101; i++){
    if (i % 3==0 && i % 5 == 0){
        console.log("fizzbuzz");
    }
    else if (i % 3 == 0) {
        console.log("buzz");
    }
    else if (i % 5 == 0) {
        console.log("fizz");
    }    
    else {
        console.log(i);
    } 
};

for (var i = 0; i < 8; i++){
    if (i%2 == 0) {
        console.log("#"+" "+"#"+" "+"#"+" "+"#")+"\n";
    } 
    else {console.log(" "+"#"+" "+"#"+" "+"#"+" "+"#")+"\n";
        }
};

var output="";
for (var i = 0; i < 8; i++){
  for (var j = 0; j < 8; j++){
    if ((i+j)%2==0)
        output+=(" ");  
    else 
        output+=("#");   
};
    output+=("\n");
};
console.log(output);
