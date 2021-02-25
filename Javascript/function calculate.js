//below shows you how to create an if then statement by using functions and linking the script style directly
//within you html doc
function calculate(){
    let numcups = document.getElementById("numcups").innerHTML;
    let cupanswer = document.getElementById("cupanswer")
    let maxcups = 3;

    let nummiles = document.getElementById("nummiles").innerHTML;
    let oilanswer = document.getElementById("oilanswer");
    let maxmile = 500;

    if(numcups >=maxcups){
        cupanswer.innerHTML = "Had to many!";
        console.log("Had to many!")
    }else{
        cupanswer.innerHTML = "Give me more coffee!";
        console.log("Give me more coffee!")
    }
    if(nummiles >= maxmile){
        oilanswer.innerHTML = "Need an oil change!";
        console.log("Need an oil change!")
    }else{
        oilanswer.innerHTML = "You're good on oil!";
        console.log("You're good on oil!")
    }
}
// let flag=false
// let i=0
// while (true) {
//     console.log("Hello" + i)
//     i++;
// }

