const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
var player_object = "";
var block_image_object = "";
player_x = 10;
player_y = 10;
block_image_height = 30;
block_image_width = 30;
function player_update () {
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img) {
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
