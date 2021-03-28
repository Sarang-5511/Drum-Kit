
var noofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var name = this.innerHTML;
       soundon(name);  
      
      
    });

}


document.addEventListener("keypress",function(event){
    
    soundon(event.key);
   
});
function soundon(key){
    
    switch (key) {
        case "w":

            var audio = new Audio("tom-1.mp3");
            audio.play();

            break;
        case "a":

            var audio = new Audio("tom-2.mp3");
            audio.play();

            break;
        case "s":

            var audio = new Audio("tom-3.mp3");
            audio.play();

            break;
        case "d":

            var audio = new Audio("tom-4.mp3");
            audio.play();

            break;
        case "e":

            var audio = new Audio("kick-bass.mp3");
            audio.play();

            break;
        case "r":

            var audio = new Audio("snare.mp3");
            audio.play();

            break;
        case "f":

            var audio = new Audio("crash.mp3");
            audio.play();

            
    }
}
