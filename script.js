var i= j= 0;
// var j = 0/;
var text = "Ishmamur Rahman";
var text2 = "Portfolio";
var speed = 90;
makevisible  = ()=>{
    setTimeout(() => {
        document.getElementById("portfolio").style.transition = "opacity 1.5s";
        document.getElementById("portfolio").style.opacity = "100";
    }, 1800);
}
gotoTop= ()=>{
    document.documentElement.scrollTop  = 0;
}
function typeWritingEffect() {
    if (i < text.length){
        document.getElementById("typeWritingEffect").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWritingEffect, speed);
    }

}
window.onload = ()=>{
    typeWritingEffect();
    makevisible();
}
