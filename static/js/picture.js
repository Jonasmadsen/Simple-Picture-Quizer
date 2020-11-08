function remember() {

    text = document.getElementById("question").value;

    //Remove dragable header
    document.querySelector('#mydivheader').textContent = "";
    document.querySelector('#mydivheader').style.display = "none";
    document.querySelector('#btn').textContent = "";
    document.querySelector('#btn').style.display = "none";

    let rect = document.getElementById("question").getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    document.getElementById("btn").id = ID()
    document.getElementById("mydivheader").id = ID()
    document.getElementById("mydiv").id = ID()

    document.getElementById("question").style.left = rect.x + "px";
    document.getElementById("question").style.top = rect.y + "px";
    document.getElementById("question").style.position = "fixed";

    let id = ID()
    document.getElementById("question").id = id
    document.getElementById(id).textContent = text;

    //Create next moveable frame
    document.getElementById("body").innerHTML += "<div id=\"mydiv\"><div id=\"mydivheader\">Træk mig</div><label><textarea id='question'></textarea></label><button id=\"btn\" style=\"background-color: silver; width: 100%\" onclick=\"remember()\">Placer Her</button></div>";


    dragElement(document.getElementById('mydiv'));

    console.log("persisted");
}

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};