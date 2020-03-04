//initial number of cookies    
var num = 0;

window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Killstreak";
}

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num; 
    document.getElementById('sound1').play()     
    //automatic Granny upgrade to 2x
    if(num >= 30 ){
        num += 0;
        upgradeLevel.innerHTML = "Noob Jim";
    }

    //automatic factory upgrade to 10x
    if(num >= 60) {
        num += 0;
        upgradeLevel.innerHTML = "Elite Jim";
    }

    //automatic plant upgrade to 30x
    if(num >= 80) {
        num += 0;
        upgradeLevel.innerHTML = "PVP Chad";
    }

    //automatic super factory upgrade to 1000x
    if(num >= 100) {
        num += 0;
        upgradeLevel.innerHTML = "Master Chad";
    }
}