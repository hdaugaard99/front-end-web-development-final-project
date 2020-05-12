// JavaScript Document

document.getElementById("clean1").onmouseover = function() {mouseOver()};
document.getElementById("clean1").onmouseout = function() {mouseOut()};

function mouseOver() {
	document.getElementById("clean1").src = "images/CleanLiquidMakeupFoundationBottom.jpg";
}

function mouseOut() {
	document.getElementById("clean1").src = "images/CleanLiquidMakeupFoundationBack.jpg";
}

document.getElementById("clean2").onmouseover = function() {mouseOver2()};
document.getElementById("clean2").onmouseout = function() {mouseOut2()};

function mouseOver2() {
	document.getElementById("clean2").src = "images/CleanMatteBBCreamBottom.jpg";
}

function mouseOut2() {
	document.getElementById("clean2").src = "images/CleanMatteBBCreamTop.jpg";
}

document.getElementById("clean3").onmouseover = function() {mouseOver3()};
document.getElementById("clean3").onmouseout = function() {mouseOut3()};

function mouseOver3() {
	document.getElementById("clean3").src = "images/CleanMatteConcealerBottom.jpg";
}

function mouseOut3() {
	document.getElementById("clean3").src = "images/CleanMatteConcealerTop.jpg";
}

document.getElementById("clean4").onmouseover = function() {mouseOver4()};
document.getElementById("clean4").onmouseout = function() {mouseOut4()};

function mouseOver4() {
	document.getElementById("clean4").src = "images/CleanMatteLiquidFoundationBottom.jpg";
}

function mouseOut4() {
	document.getElementById("clean4").src = "images/CleanMatteLiquidFoundationTop.jpg";
}