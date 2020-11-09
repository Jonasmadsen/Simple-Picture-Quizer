function onTestChange(element) {
    let key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        if (element.value === element.name){
            element.disabled = true;
            element.style.color = "black"
            element.style.backgroundColor = "green";

        }
        else {
            element.style.backgroundColor = "red";
            element.value = "Forkert! \n Jeg er: " + element.name;
            element.disabled = true;
            elemn.style.color = "black"
        }
        return false;
    }
    else {
        return true;
    }
}