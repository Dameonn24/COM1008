function menuFunction() {
    var x = document.getElementById("topmenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

function SamePageActive(){
    var y = document.getElementById("homelink");
    var z = document.getElementById("aboutlink");
    z.className += " active";
    y.className -= " active";

}