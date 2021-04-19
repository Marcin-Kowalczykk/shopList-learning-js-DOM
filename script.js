var buttonEnter = document.getElementById("enter");
var buttonDelAll = document.getElementById("deleteAll");
var input = document.getElementById("userinput");
var ul = document.querySelectorAll("ul")[0];
var li = document.getElementsByClassName("listElem");
var buttonDelete = document.getElementsByClassName("delete");
var body = document.querySelector(".generator");
var inputColor1 = document.querySelector(".color1");
var inputColor2 = document.querySelector(".color2");
var inputColor3 = document.querySelector(".color3");
var buttonRand = document.querySelector(".buttonRand");

var addElement = function() {
    var newListElement = document.createElement("li");
    var text = document.createTextNode(input.value);
    newListElement.appendChild(text);
    ul.appendChild(newListElement);
    var newButton = document.createElement("button");
    newButton.className = "delete";
    newListElement.className = "listElem";
    newListElement.appendChild(newButton);
   
    newButton.innerHTML = "Delete";
    input.value = "";

    buttonDeleteFcn();
    purelin();
    
}
var addButtonToElement = function() {
    
}
var addElementByClick = function() {
    if(input.value) {
        addElement();
    }
    else {
        alert("pusto byczku pusto");
    }
};
var addElementByEnter = function(e) {
    if(input.value && e.keyCode === 13) {
        addElement();
    }
};
var purelin = function() {
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", changeclass);
    }
};
function changeclass() {
        this.classList.toggle("done");
}

var buttonDeleteFcn = function() {
    for (var i = 0; i < buttonDelete.length; i++) {
        buttonDelete[i].addEventListener("click", deleteElement);
    }
}
var deleteElement = function() {
    this.parentElement.remove();
}
function colorGeneratorGradient() {
    body.style.background = "linear-gradient(to right," + inputColor1.value + "," + inputColor2.value + ")";
}
function colorGeneratorConstant() {
    body.style.background = inputColor3.value;
}
function buttonRandFcn() {
    inputColor1.value = "#" + Math.floor(Math.random() * 100000) + 1;
    inputColor2.value = "#" + Math.floor(Math.random() * 100000) + 1;
}
buttonDeleteFcn();
purelin();
buttonDelAll.addEventListener("click", deleteAll);
buttonEnter.addEventListener("click", addElementByClick);
input.addEventListener("keypress", addElementByEnter);
buttonRand.addEventListener("click", buttonRandFcn);
buttonRand.addEventListener("click", colorGeneratorGradient); 
inputColor1.addEventListener("input", colorGeneratorGradient);
inputColor2.addEventListener("input", colorGeneratorGradient);
inputColor3.addEventListener("input", colorGeneratorConstant);