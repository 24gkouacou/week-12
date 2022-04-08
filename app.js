function run() {
    document.getElementById("paragraph").innerHTML = "Hello Human!";
    document.getElementById("paragraph").style.backgroundColor = "purple";
    document.getElementById("paragraph").style.color = "black";
    document.getElementById("paragraph").style.padding = "30px";
    randomNum();
} 

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let w = document.getElementById("random").innerHTML= ran;
    w.innerHTML = ran;
    w.style.backgroundColor = "blue";
    w.style.color = "black";
    w.style.padding = "20px";
    w.style.textAlign = "center";
}