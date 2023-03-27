for(var i =0; i < document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        
        var buttonInnerHTML= this.innerHTML;
        // when clicked .. 
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);


    });

}
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key)
});

function makeSound(key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();               
        default:
            console.log(key);
    }
}


// function add(num1 ,num2){
//     return num1+num2;
// }

// function mul(num1, num2){
//     return num1*num2;
// }

// function sub (num1 ,num2 ){
//     return num1-num2;
// }
// function div(num1,num2){
//     return num1/num2;
// }

// function calculator (num1,num2, operator){
//  return operator(num1,num2);
// }

// calculator(5,6,mul);// calls mul 
// calculator(2,3,add);// calls add
// calculator(2,3,sub);
// calculator(2,3,div);

// understanding Callback 

// function anotherAddEventListener(typeOfEvent,callback){
//     // Detect the event code ..
//     var eventThatHappened = {
//         eventType:"keypress",
//         key:"p",
//         durationOfKeyPress:2
//     }
// }

// if(eventThatHappened.eventType=== typeOfEvent){
//     callback(eventThatHappened);
// }


function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed")
   },100);
}