// var img = document.createElement('img');  // create image tag
// img.src = "images/H_footer.jpg"; //image source
// var src = document.getElementById("image-container"); 
// src.appendChild(img) // append to the body of the html document
//"H_footer.jpg"

    

function toggleVisibility(id) {
    var el = document.getElementById(id);
 
    if (el.style.visibility=="visible") {
           el.style.visibility="hidden";
      }
      else {
           el.style.visibility="visible";
      }
  }
