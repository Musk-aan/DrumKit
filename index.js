var n= document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        sound(this.innerHTML);//this means button jisme click hua..uska inner html=="w"etc
        buttonAnimation(this.innerHTML);
    });
}

    document.addEventListener("keydown", function (event){
        sound(event.key);
        buttonAnimation(event.key);
    });


function sound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            console.log(audio.playbackRate)//property use of HTMLAudioElement..Console me 1sec show karega
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log(this);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}




// var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
// console.log(this.innerHTML);
// this.style.color="pink";

// var houseKeeper1={
//     name: "Pushpa",
//     age: "25",
//     experience: "4 years",
//     work_provided: "washing dishes and mopping of floors",
// };
// console.log(houseKeeper1.name);


// function HouseKeeper(name, age, experience){
//     this.name=name;
//     this.age=age;
//     this.experience=experience;
// }

// var housekeeper2=new HouseKeeper("Vivek", 23, " 4years");
// console.log(housekeeper2);
