let sang ;
let userchosse1;
let userchosse = prompt("please chosse rock paper scissors")
let randnumber = (Math.random() * 10) / 3;
let rand = Math.ceil(randnumber);

///////////////sang//////////////

if (userchosse === "rock" && rand === 1 ) {
    console.log("equal")
 
}
else if (userchosse==="rock" &&  rand === 2 ) {
    console.log("you lose")
 
}
else if (userchosse === "rock" &&  rand === 3) {
    console.log("you win")
}

///////////kaghaz////////////////

if (userchosse === "paper"  && rand === 1 ) {
    console.log("equal")
 
}
else if (userchosse === "paper" &&  rand === 2) {
    console.log("you lose")
 
}
else if (userchosse === "paper" &&  rand === 3) {
    console.log("you win")
}
 
///////////////gheichi////////////

if (userchosse === "scissors" && rand === 1 ) {
    console.log("equal")
 
}
else if (userchosse === "scissors" &&  rand === 2 ) {
    console.log("you lose")
 
}
else if (userchosse === "scissors" &&  rand === 3) {
    console.log("you win")
}