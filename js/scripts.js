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


function magicTrick() {
    addSelectHTML();
}