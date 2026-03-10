//your JS code here. If required.
function findDomLevel() {
    let element = document.getElementById("level");
    let count = 0;

    while (element) {
        count++;
        element = element.parentElement;
    }

    alert("The level of the element is: " + count);
}

findDomLevel();