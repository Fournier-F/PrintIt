const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


//Initialisation des variables et constantes
const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
let dots = document.getElementById("dots");
const currImageName = document.getElementById("banner-img").src.split("/").pop();
let currSlideIndex = slides.findIndex((element) => element.image === currImageName);


//Initialisation des Dots - Div creation
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	if (i === currSlideIndex) {
		dot.className = "dot dot_selected"
	}
	else {
		dot.className = "dot"
	}
	dots.appendChild(dot);
}


//Arrow Event Click Listener
arrowLeft.addEventListener("click", function() { ArrowClick(-1); });
arrowRight.addEventListener("click", function() { ArrowClick(1); });


//Function Previous-Next Images-Text
function ArrowClick(direction) {

	let dotList = document.querySelectorAll(".dot");

	dotList[currSlideIndex].classList.remove("dot_selected");

	switch(true) {
		case direction === 1 && currSlideIndex === slides.length -1:
			currSlideIndex = 0;
			break;
		case direction === -1 && currSlideIndex === 0:
			currSlideIndex = slides.length -1;
			break;
		default:
			currSlideIndex += direction;
	}

	dotList[currSlideIndex].classList.add("dot_selected");

	document.getElementById("banner-img").src = "./assets/images/slideshow/" + slides[currSlideIndex].image;
	document.getElementById("banner-p").innerHTML = slides[currSlideIndex].tagLine;
}

