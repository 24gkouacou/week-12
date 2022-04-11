let humanNum = document.getElementById("getNumber");
humanNum.addEventListener("keydown", function(e) {
    if(e.keyCode == 13){
        run(e);
    }

});

userNum.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "Hello! Welcome to the  Number Guesser!";
    document.getElementById("paragraph").style.backgroundColor = "lightgreen";
    document.getElementById("paragraph").style.color = "green"
    document.getElementById("paragraph").style.padding = "20px"
    document.getElementById("paragraph").style.textAlign = "center"
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let z = document.getElementById("random");
    z.innerHTML = ran;
    z.style.backgroundColor = "darkgreen"
    z.innerHTML = ran;
    z.style.backgroundColor = "darkgreen";
    z.style.color = "lightgreen"
    z.style.padding = "20px"
    z.style.textAlign = "center"
    return ran;
}

function humanNumber() {
    let user = document.getElementById("getNumber").value;
    let w = document.getElementById("userNumber")
    w.innerHTML = user;
    w.style.color = "green"
    w.style.backgroundColor = "lightgreen"
    w.style.padding = "20px"
    w.style.textAlign = "center"
    return human;
}

function compareNumbers() {
    let c = userNumber();
    let b = randomNum();
    let d = document.getElementById("compare")
    if (c != b) {
        z.innerHTML = "Numbers are not the same. The computer got " + b + ", user got " + c;
        z.style.color = "lightgreen"
        z.style.backgroundColor = "darkgreen"
        z.style.padding = "20px"
        z.style.textAlign = "center"
    } else if ( c == b) {
        z.innerHTML = "Numbers are the same. The computer got " + b + ", user got " + c;
        z.style.color = "darkgreen"
        z.style.backgroundColor = "lightgreen"
        z.style.padding = "20px"
        z.style.textAlign = "center"
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}