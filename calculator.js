


let Button = document.querySelectorAll(".button");
let Display = document.querySelector(".head");
let equal = document.querySelector(".e")
let clear = document.querySelector(".clean")
let delet = document.querySelector(".d")
Button.forEach((i) => {
 i.addEventListener("click",function(event){
  let z = event.target.innerText;
  if (Display.innerHTML == 0){
    return Display.innerHTML = z;
  }
    return Display.innerHTML +=z ;
    
 })
});
equal.addEventListener("click",function(event){
  let result = Display.innerText;
  let z = eval(result)
  if (z === parseInt(z)){
  Display.innerText=z;
  }
  else {
    Display.innerText=z.toFixed(3);
  }
})

delet.addEventListener("click",function(event){
 return Display.innerHTML = 0;
})

clear.addEventListener("click",function(event){
  let c = Display.innerHTML
 if(c.length ===1){
   Display.innerText = 0;
 }
else{
  Display.innerHTML=c.substring(0 , c.length-1)
}
})
