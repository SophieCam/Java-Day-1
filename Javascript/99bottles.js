let bottles= prompt ("How many bottles of beer on the wall")
for (i=99; i>=0; i--){
    if (i==0){ 
        console.log(`We're out of beer, let's get some more!`);
    }  else {
        console.log (i + "Bottles of beer on the wall. Take one down pass it around." + (i-1) + "bottles of beer on the wall");
    }
}