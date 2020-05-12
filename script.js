// JavaScript Document

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



document.getElementById("best1").onmouseover = function() {mouseOver()};
document.getElementById("best1").onmouseout = function() {mouseOut()};

function mouseOver() {
	document.getElementById("best1").src = "images/CleanLiquidMakeupFoundationBottom.jpg";
}

function mouseOut() {
	document.getElementById("best1").src = "images/CleanLiquidMakeupFoundationBack.jpg";
}

document.getElementById("best2").onmouseover = function() {mouseOver2()};
document.getElementById("best2").onmouseout = function() {mouseOut2()};

function mouseOver2() {
	document.getElementById("best2").src = "images/CleanMatteBBCreamBottom.jpg";
}

function mouseOut2() {
	document.getElementById("best2").src = "images/CleanMatteBBCreamTop.jpg";
}

document.getElementById("best3").onmouseover = function() {mouseOver3()};
document.getElementById("best3").onmouseout = function() {mouseOut3()};

function mouseOver3() {
	document.getElementById("best3").src = "images/CleanMatteLiquidFoundationBottom.jpg";
}

function mouseOut3() {
	document.getElementById("best3").src = "images/CleanMatteLiquidFoundationTop.jpg";
}

document.getElementById("best4").onmouseover = function() {mouseOver4()};
document.getElementById("best4").onmouseout = function() {mouseOut4()};

function mouseOver4() {
	document.getElementById("best4").src = "images/ClumpCrusherWaterResistantMascaraBottom.jpg";
}

function mouseOut4() {
	document.getElementById("best4").src = "images/ClumpCrusherWaterResistantMascaraTop.jpg";
}

document.getElementById("best5").onmouseover = function() {mouseOver5()};
document.getElementById("best5").onmouseout = function() {mouseOut5()};

function mouseOver5() {
	document.getElementById("best5").src = "images/ContinuousColorLipstickBottom.jpg";
}

function mouseOut5() {
	document.getElementById("best5").src = "images/ContinuousColorLipstickTop.jpg";
}


