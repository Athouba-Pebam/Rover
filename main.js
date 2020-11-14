canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_image_array=["nasa_mars1.jpg", "nasa_mars2.jpg", "nasa_mars3.jpg","nasa_mars4.jpg","nasa_mars5.jpg"];
var mars_random = Math.floor(Math.random() * 5);
console.log(mars_random);

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_image = "rover.png";

background_image = nasa_mars_image_array[mars_random];
console.log(background_image);



function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38'){
            up();
            console.log("up");
        }
        if(keyPressed == '40'){
            down();
            console.log("down");
        }
        if(keyPressed == '37'){
            left();
            console.log("left");
        }
        if(keyPressed == '39'){
            right();
            console.log("right");
        }

}

     function up(){
         if(rover_y>0){
           rover_y = rover_y - 10;
             console.log("When the up arrow is press, x = " + rover_x + ", y = " + rover_y);
             uploadBackground();
             uploadrover();
         }
     }
     
     function down(){
        if(rover_y<510){
          rover_y = rover_y + 10;
            console.log("When the down arrow is press, x = " + rover_x + ", y = " + rover_y);
            uploadBackground();
            uploadrover();
        }
    }
    function left(){
        if(rover_x>0){
          rover_x = rover_x - 10;
            console.log("When the left arrow is press, x = " + rover_x + ", y = " + rover_y);
            uploadBackground();
            uploadrover();
        }
    }
    function right(){
        if(rover_x<700){
          rover_x = rover_x + 10;
            console.log("When the right arrow is press, x = " + rover_x + ", y = " + rover_y);
            uploadBackground();
            uploadrover();
        }
    }