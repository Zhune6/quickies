//function randomnumber(Math.random) {
    
     
//}
//console.log(randomnumber)
//console.log(math.random)







function display(some) {
document.getElementById("display").innerHTML = some;
}
function getrandomint(max) {
    let random = Math.floor(Math.random() *max);
    
    display(random)
}
console.log(getrandomint(3))

//display(console.log("hello"))
function display2(some){
    document.getElementById("display2").innerHTML = some
}
function getrandomabritrary(min, max) {
    //min = 4
    //max = 5
    let random2 = Math.random() * (max-min) + min
    display2(random2)
   }
console.log(getrandomabritrary(10, 5))