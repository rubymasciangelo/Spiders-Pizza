function getReceipt() {
    var text1 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    var length = sizeArray.length
    //variables declared, api (getElements) leveraged to receive the array of all the "size" input elements


for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+"<br>";
    }
}//for loop with an if statement to see which item is checked. new variable declared so new selected
 //item will be stored with the array and can be added to text1. New value added to old value without
 //overwriting to make a continuous list of items.

if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
} else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
} else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
}//if statement and else if statements to store the correct pizza price for the selected size.
 

runningTotal = (runningTotal + sizeTotal);
console.log(selectedSize+" = $"+sizeTotal+".00");
console.log("size text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
getCrust(runningTotal,text1);
//monetary value stored within sizeTotal added to the runningTotal, next function called and
//variables passed along

function getCrust(runningTotal,text1) {
    var crustTotal = 0;
    var selectedCrust = [];
    var crustArray = document.getElementsByClassName("crust");
//variables declared, meat selection input element array summoned

for (var j = 0; j < crustArray.length; j++) {
    if (crustArray[j].checked) {
        var selectedCrust = crustArray[j].value;
        text1 = text1+selectedCrust+"<br>";
    }
}//for loop with an if statement to see which item is checked. new variable declared so new selected
 //item will be stored with the array and can be added to text1. New value added to old value without
 //overwriting to make a continuous list of items.

if (selectedCrust === "Crust Stuffed with Moss") {
    crustTotal = 3;
}
 //else if (selectedSize === "Medium") {
   // sizeTotal = 10;
//} else if (selectedSize === "Large") {
    //sizeTotal = 14;
//} else if (selectedSize === "Extra Large") {
    //sizeTotal = 16;
//}//if statement and else if statements to store the correct pizza price for the selected size.
 

runningTotal = (runningTotal + crustTotal);
console.log(selectedCrust+" = $"+crustTotal+".00");
console.log("crust text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
getSauce(runningTotal,text1);
}//monetary value stored within sizeTotal added to the runningTotal, next function called and
//variables passed along

function getSauce(runningTotal,text1) {
    var sauceTotal = 0;
    var selectedSauce = [];
    var sauceArray = document.getElementsByClassName("sauce");
//variables declared, meat selection input element array summoned

for (var n = 0; n < sauceArray.length; n++) {
    if (sauceArray[n].checked) {
        var selectedSauce = sauceArray[n].value;
        text1 = text1+selectedSauce+"<br>";
    }
}//for loop with an if statement to see which item is checked. new variable declared so new selected
 //item will be stored with the array and can be added to text1. New value added to old value without
 //overwriting to make a continuous list of items.


runningTotal = (runningTotal + sauceTotal);
console.log(selectedSauce+" = $"+sauceTotal+".00");
console.log("sauce text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
getCheese(runningTotal,text1);
}

function getCheese(runningTotal,text1) {
    var cheeseTotal = 0;
    var selectedCheese = [];
    var cheeseArray = document.getElementsByClassName("cheese");
//variables declared, meat selection input element array summoned

for (var k = 0; k < cheeseArray.length; k++) {
    if (cheeseArray[k].checked) {
        var selectedCheese = cheeseArray[k].value;
        text1 = text1+selectedCheese+"<br>";
    }
}//for loop with an if statement to see which item is checked. new variable declared so new selected
 //item will be stored with the array and can be added to text1. New value added to old value without
 //overwriting to make a continuous list of items.

if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 3;
} //else if (selectedSize === "Medium") {
   // sizeTotal = 10;
//} else if (selectedSize === "Large") {
    //sizeTotal = 14;
//} else if (selectedSize === "Extra Large") {
    //sizeTotal = 16;
//}//if statement and else if statements to store the correct pizza price for the selected size.
 

runningTotal = (runningTotal + cheeseTotal);
console.log(selectedCheese+" = $"+cheeseTotal+".00");
console.log("cheese text1: "+text1);
console.log("subtotal: $"+runningTotal+".00");
getMeat(runningTotal,text1);
}//monetary value stored within sizeTotal added to the runningTotal, next function called and
//variables passed along

function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
//variables declared, meat selection input element array summoned


for (var l = 0; l < meatArray.length; l++) {
    if (meatArray[l].checked) {
        selectedMeat.push(meatArray[l].value);
        console.log("selected meat: ("+meatArray[l].value+")");
        text1 = text1+meatArray[l].value+"<br>";
    }
}//for and if loop to determine and print out each selected item from the meat array
 //meat array selected value added to previous values in text1

 var meatCount = selectedMeat.length;
 if (meatCount > 1) {
     meatTotal = (meatCount - 1);
 } else {
     meatTotal = 0;
 }//meatCount declared, assigns a count of all items within the meat list using .length
  //if/else used to see if theres more than 1 iteam in the meat array and if there is it
  //takes the total and subtracts 1 since the first meat item is free

runningTotal = (runningTotal + meatTotal);
document.getElementById("showText").innerHTML=text1;
document.getElementById("totalPrice").innerHTML= "<h6>Total: <strong>$"+runningTotal+".00"+"</strong></h6>";
getVeggie(runningTotal,text1);
}

function getVeggie(runningTotal,text1) {
    var veggieTotal = 0;
    var selectedVeggies = [];
    var veggieArray = document.getElementsByClassName("veggies");
//variables declared, meat selection input element array summoned

for (var m = 0; m < veggieArray.length; m++) {
    if (veggieArray[m].checked) {
        selectedVeggies.push(veggieArray[m].value);
        console.log("selected veggies: ("+veggieArray[m].value+")");
        text1 = text1+veggieArray[m].value+"<br>";
    }
}//for and if loop to determine and print out each selected item from the meat array
 //meat array selected value added to previous values in text1

 var veggieCount = selectedVeggies.length;
 if (veggieCount > 1) {
     veggieTotal = (veggieCount - 1);
 } else {
     veggieTotal = 0;
 }//meatCount declared, assigns a count of all items within the meat list using .length
  //if/else used to see if theres more than 1 iteam in the meat array and if there is it
  //takes the total and subtracts 1 since the first meat item is free

runningTotal = (runningTotal + veggieTotal);
document.getElementById("modal_cart").style.display="block";
document.getElementById("showText").innerHTML=text1;
document.getElementById("totalPrice").innerHTML= "<h6>Total: <strong>$"+runningTotal+".00"+"</strong></h6>";
    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        document.getElementById("modal_cart").style.display = "none";
    }
};

function clearAll() {
    document.getElementById("selectform").reset();
};