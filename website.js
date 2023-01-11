function processClick(event) {
    let elementA = document.getElementById("bill");
    let elementB = document.getElementById("serviceQual");
    let elementC = document.getElementById("people");
    let aValue = Number(elementA.value);
    let bValue = Number(elementB.value);
    let cValue = Number(elementC.value);

    let sum = aValue * bValue / cValue;

    let roundedsum = sum.toFixed(2);



    let resultDiv = document.getElementById("result");
    resultDiv.textContent = `\$ ${(roundedsum)}`;
}
let button = document.getElementById("submit");
    button.addEventListener("click", processClick);





function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


function ClearFields() {

    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
}

let resetButton= document.getElementById("reset");
resetButton.addEventListener ('click', function() {
    document.getElementById('result').innerHTML="$";
})



resetButton.addEventListener ('click', function() {
    let inputFields =
        document.querySelectorAll("input");
    for (let i=0;i<inputFields.length;i++){
        inputFields[i].value="";
    }
})