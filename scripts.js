// selecting by ID
document.getElementById("firstPara").innerHTML += "<span class='tan'>This is new tan text.</span>";

// selecting by tag name
let images = document.getElementsByTagName("img");

for(let image of images){
    image.width = "250";
}

// selecting by class name
let ltBlueSpans = document.getElementsByClassName("light-blue");
let medBlueSpans = document.getElementsByClassName("med-blue");
// console.log(ltBlueSpans);

for(let span of ltBlueSpans){
    span.style.color = "#7C9EA6";
}

for(let span of medBlueSpans){
    span.style.color = "#3C5E73";
}

// selecting many with a css selector
// array of colors
let colors = ["#283040", "#3C5E73", "#7C9EA6", "#D9BCA3", "#F2DCC9"];

let svgs = document.querySelectorAll("#svgs svg");

for(let i = 0; i < svgs.length; i++){
    svgs[i].style.stroke = colors[i];
}

