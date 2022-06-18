var inputName = document.getElementById('fname');
var inputSurname = document.getElementById('lname');
var inputTel = document.getElementById('cell');
var inputAddress = document.getElementById('indirizzo');
var inputPostalCode = document.getElementById('cap');
var inputCity = document.getElementById('city');
var inputSubmit = document.getElementById('input-submit');

var form_convlid = [ inputName,
                     inputSurname,
                     inputTel,
                     inputAddress,
                     inputPostalCode,
                     inputCity
                    ];

function getSelectOption() {
    var selectedValue = document.getElementById("select-qt").value;
    return selectedValue;
}


function addSelectHTML() {
    var tot = getSelectOption();
    var selectPizze = document.getElementById("multiple-select");
    clone = selectPizze.cloneNode(true);
    deleteChild();
    for (var i = 0; i < tot; i++) {
        document.getElementById("multiple-select-repeat").appendChild(clone.cloneNode(true));
    }
}

function deleteChild() {
    var e = document.getElementById("multiple-select-repeat");
    var child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function addRows() {
    addSelectHTML();
}

function addClassAlert(){
    for(i = 0; i < form_convlid.length; i++){
        if(form_convlid[i].value === ""){
            form_convlid[i].classList.add('red-border');
        } else {
            form_convlid[i].classList.remove('red-border');
        }
    };
};
                    
window.addEventListener('change',addClassAlert);



