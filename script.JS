const resultDiv = document.getElementById("resultDiv");
var equationString = "";
 var operators = ["+", "-", "×", "÷"];

 function addNumber(number) {
 
    var lastCharacter = equationString.slice(-1);

    if (operators.includes(lastCharacter) && operators.includes(number)) {
        deleteNumber();
    }

    equationString = equationString + number;
    resultDiv.innerText = equationString;
}
   equationString = equationString.replaceAll("×", "*");
     equationString = equationString.replaceAll("÷", "/");
     const result = eval(equationString);
     equationString = result;
     equationString = result + "";
     resultDiv.innerText = result;
 }


    