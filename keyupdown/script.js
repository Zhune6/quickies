document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);

function keydown (event) {
    document.querySelector("#status").textContent ="key down";
}

function keyup(){
    document.querySelector("#status").innerHTML = "keyup";
}