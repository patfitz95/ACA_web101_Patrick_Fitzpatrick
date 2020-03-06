//initial number of headshots    
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
    
    //upgrade level for skill
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num; 
    document.getElementById('sound1').play()     
    if(num >= 30 ){
        num += 0;
        upgradeLevel.innerHTML = "Noob Jim";
    }


    if(num >= 60) {
        num += 0;
        upgradeLevel.innerHTML = "Elite Jim";
    }


    if(num >= 80) {
        num += 0;
        upgradeLevel.innerHTML = "PVP Chad";
    }


    if(num >= 100) {
        num += 0;
        upgradeLevel.innerHTML = "Master Chad";
    }
}