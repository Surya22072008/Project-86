const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
var player_object = "";
var block_image_object = "";
player_x = 10;
player_y = 10;
block_image_height = 30;
block_image_width = 30;
function player_update () {
    fabric.Image.fromURL("player.png",function(Img) {
        player_object = Img;
        player_object.scaletoHeight(150);
        player_object.scaletoWidth(140);
        player_object.set({
            top:player_x,left:player_y
        });
canvas.add(player_object);
    } );
}
function new_image (get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
        block_image_object = Img;
        block_image_object.scaletoHeight(block_image_height);
        block_image_object.scaletoWidth(block_image_width);
        block_image_object.set({
            top:player_x,left:player_y
        });
canvas.add(block_image_object);
    } );
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80"){
        console.log("shift and p pressed together"
        );
        block_image_width = block_image_width + 10;
        block_image_object = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
        
            }
            if (e.shiftKey == true && keyPressed == "77"){
                console.log("shift and m pressed together"
                );
                block_image_width = block_image_width - 10;
                block_image_object = block_image_height - 10;
                document.getElementById("current_width").innerHTML = block_image_width;
                document.getElementById("current_height").innerHTML = block_image_height;
                
                    }
    if(keyPressed == "38") {
        up();
        console.log("up");
    }
    if(keyPressed == "40") {
        down();
        console.log("down");
    }
    
    if(keyPressed == "37") {
        left();
        console.log("left");
    }
    
    if(keyPressed == "39") {
        right();
        console.log("right");
    }
    if(keyPressed == "87") {
        new_image('Final_output.png');
        console.log("w");
    }
    
    if(keyPressed == "71") {
        new_image('thor_left_hand.png');
        console.log("g");
    }
    
    if(keyPressed == "76") {
        new_image('ironman_body.png');
        console.log("l");
    }
    
    if(keyPressed == "84") {
        new_image('spiderman_body.png');
        console.log("t");
    }
    
    if(keyPressed == "82") {
        new_image('captain_america_left_hand.png');
        console.log("r");
    }
    
    if(keyPressed == "89") {
        new_image('hulkd_body.png');
        console.log("y");
    }
    
    if(keyPressed == "68") {
        new_image('spiderman_face.png');
        console.log("d");
    }
    
    if(keyPressed == "85") {
        new_image('thor_face.png');
        console.log("u");
    }
    
    if(keyPressed == "67") {
        new_image('ironman_face.png');
        console.log("c");
    }

}
    

