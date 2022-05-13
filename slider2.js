


var x_slider = document.getElementById("Width");
var profile_x_slider = document.getElementById("Width");
var length_output = document.getElementById("x");
var profile_length_output = document.getElementById("x");
var y_slider = document.getElementById("Length");
var profile_y_slider = document.getElementById("Length");
var width_output = document.getElementById("y");
var profile_width_output = document.getElementById("y");
var x_length = 100;
var profile_x_length = 20;
var y_width = 100;
var profile_y_width = 20;
const stage = acgraph.create('stage-container');
// const stage = acgraph.create('stage-container');
// var linePath = acgraph.path();

// var total_length = x_slider.value*10;
// var total_width = y_slider.value*10; 

var rect1 = stage.rect(30, 30, 100, 100);
var rect2 = stage.rect(30, 800, 100, 100);
var length_text = stage.text(20,55,"10");
var profile_length_text = stage.text (500, 450, "10");
var width_text = stage.text(10, 40, "10");
var profile_width_text = stage.text(100, 500, "10");
length_output.innerHTML = (x_slider.value);
width_output.innerHTML = (y_slider.value);
profile_length_output.innerHTML = (profile_x_slider.value);
profile_width_output.innerHTML = (profile_y_slider.value);


y_slider.oninput = function() {
    length_output.innerHTML = this.value;
    profile_length_output.innerHTML = this.value;
    y_length = 100 + (parseInt(y_slider.value)*10);
    profile_y_length = 100 + (parseInt(y_slider.value)*10);
    rect1.visible(false);
    rect2.visible(false);
    rect1 = stage.rect(20, 20, x_length, y_length);
    rect2 = stage.rect(30, 800, profile_x_length, profile_y_width);
    rect1.visible(true);
    rect2.visible(true);
    length_text.visible(false);
    profile_length_text.visible(false);
    length_text = stage.text(x_length, y_length/2, this.value);
    profile_length_text = stage.text(150, profile_y_length*2.5, this.value);
    length_text.visible(true);
    profile_length_text.visible = (true);
      
   //rect2.visible(true);
    //length_text.visible(false);
     //length_text.visible(true);

    }
    
x_slider.oninput = function() {
    width_output.innerHTML = this.value;
    x_length = 100 + (parseInt(x_slider.value)*10);
    rect1.visible(false);
    rect1 = stage.rect(20, 20, x_length, y_length);
    rect1.visible(true);
    width_text.visible(false);
    width_text = stage.text(40,40,this.value);
    width_text.visible(true);
    profile_width_output.innerHTML = this.value;
    profile_x_length = 100 + (parseInt(x_slider.value)*10);
    rect2.visible(false);
    rect2 = stage.rect(30, 800, profile_x_length, 20);
    rect2.visible(true);
    width_text.visible(false);
    
    width_text.visible(true);
    profile_width_text.visible(false);
    profile_width_text = stage.text(profile_x_length, profile_y_width, this.value);
    profile_width_text.visible(true);


}









