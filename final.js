

//========================================================================================================
const formValues = document.querySelector('form')                                                      //| 
formValues.addEventListener('submit', function(e) {                                                    //|
    e.preventDefault();                                                                                //|
    let name = document.querySelector('input[name=price]').value                                       //|
    alert('Name: ${name}\nDescription: ${description}\nPrice: ${price}')                               //|
})                                                                                                     //|
                                                                                                       //|
//===================================================== Total ============================================ 
function updateSubTotal() {                                                                            //|
    let table = document.getElementById("myTable");                                                    //|
    let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {                            //|
        return total + parseFloat(row.cells[2].innerHTML);                                             //|
    }, 0);                                                                                             //|
    document.getElementById("val").innerHTML = "&#128022 = $" + subTotal.toFixed(2);                   //|
    alert(subTotal)                                                                                    //|
    }                                                                                                  //|
    let button = document.getElementById("submit")                                                     //|
    button.addEventListener("click", function onclick(){                                               //|
    updateSubTotal()})                                                                                 //|
//====================================================== DELETE ==========================================
function onClickRemove(deleteButton) {                                                                 //|                                    
    let row = deleteButton.parentElement.parentElement;                                                //|
    row.parentNode.removeChild(row);                                                                   //|
    updateSubTotal(); // Call after delete                                                             //|
    }                                                                                                  //|
                                                                                                       //|
//========================================================================================================
                                                                                                       //|
function updateTable(name, description = "", price) {                                                  //|
    let table = document.getElementById("myTable");                                                    //|
    let tr = document.createElement("tr");                                                             //|
    table.appendChild(tr);                                                                             //|
    let cell1 = document.createElement("td");                                                          //|           
    let cell2 = document.createElement("td");                                                          //|
    let cell3 = document.createElement("td");                                                          //|
    let cell4 = document.createElement("td");                                                          //|
    tr.appendChild(cell1);                                                                             //|
    tr.appendChild(cell2);                                                                             //|
    tr.appendChild(cell3);                                                                             //|
    tr.appendChild(cell4);                                                                             //|
    cell1.textContent = name;                                                                          //|
    cell2.textContent = description;                                                                   //|
    cell3.textContent = price;                                                                         //|
    let buttonDel = document.createElement("button");                                                  //|
    cell4.appendChild(buttonDel);                                                                      //|
    buttonDel.setAttribute("onClick", "onClickRemove(this)");                                          //|
    buttonDel.textContent = ("x");                                                                     //|
}                                                                                                      //|
                       //=====================                                                         //|
document.forms[0].addEventListener("submit", function (evenement) {                                    //|
    evenement.preventDefault();                                                                        //|
    let name = document.getElementById("username").value;                                              //|
    let description = document.getElementById("Description").value;                                    //|
    let price = document.getElementById("Price").value;                                                //|
    if (name != "" && price != "not a number") {                                                       //|
    updateTable(name, description, price);                                                             //|
    updateSubTotal();                                                                                  //|
    }                                                                                                  //|
});                                                                                                    //|
// ========================================================== Fin =====================================//|