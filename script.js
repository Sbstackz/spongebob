let array;
let randomValue;
array = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF9IRVqU0NgXmRPLHiL488uySn0QwxB5k5IjUlfOcp-v4adSk", 
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRwm5Id3QOArn14toOu5csAX-i2PeWCwh54g5pGbM7NM6YmDma",
   "https://pics.me.me/dolphin-spongebob-18017668.png",
   "https://pixel.nymag.com/imgs/daily/vulture/2017/05/16/16-spongebob-explainer.w700.h700.jpg"];
    
$( "#button" ).click(function() {
    randomValue = array[Math.floor(Math .random() * array.length)];
    $( "#white" ).attr( "src" ,randomValue);
});

