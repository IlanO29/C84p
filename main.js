var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;
car1_x = 10;
car1_y = 10;
car2_x = 10;
car2_y = 10+60;
background_img = "https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_img = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_img = "1828053-removebg-preview.png "
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;
    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)  {
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == "37"){

            left();
            console.log("left");
        }
        if(keyPressed == "39"){

            right();
            console.log("right");
        }
        if(keyPressed == "65"){
            car2_left();
            console.log("key a");
        }
        if(keyPressed == "68"){
            car2_right();
            console.log("key a");
        }
}
//car1
function left(){
    if(car1_x >=0){
        car1_x -= 10;
        console.log("When Left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
//car1
function right(){
    if(car1_x <=700){
        car1_x += 10;
        console.log("When Right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function car2_left(){
    if(car2_x >=0){
        car2_x -= 10;
        console.log("When Left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_x <=700){
        car2_x += 10;
        console.log("When Right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
