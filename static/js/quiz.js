function quiz() {

    let all = document.getElementsByTagName("input");

    if (document.getElementById("start").textContent === "Done"){
        for (var i=0, max=all.length; i < max; i++) {
            elemn = all[i];
            if (elemn.name !== elemn.value){
                elemn.value = "Forkert! \n Jeg er: " + elemn.name;
                elemn.style.backgroundColor = "red";
                elemn.disabled = true;
                elemn.style.color = "black"
            }
            else {
                elemn.value = elemn.name;
                elemn.style.backgroundColor = "green";
                elemn.disabled = true;
                elemn.style.color = "black"
            }
        }
        document.getElementById("start").textContent = "Start Quiz"
    }else{
     for (var i=0, max=all.length; i < max; i++) {
     elemn = all[i];
     if (elemn.name === "")
        elemn.name = elemn.value;
     elemn.value = "";
     elemn.style.backgroundColor = "white";
     elemn.disabled = false;
    }
    document.getElementById("start").textContent = "Done"
    console.log("Cleared and saved answers")
    }
}

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};