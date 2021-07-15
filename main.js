var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 330;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(IMG){

		block_image_object=IMG;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
	
		block_image_object.set({
	    top:block_y,
		left:block_x
			});
			canvas.add(block_image_object);
	});
}
	
	window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '84') 
	{
	new_image('Twilight.png');
	console.log("You Pressed T");
	}
	if(keyPressed == '82')
	{
		new_image('Rainbow dash.png');
		console.log("You Pressed R");
		
	}
	
	if(keyPressed == '73')
	{
		new_image('Rarity.png');
		console.log("You Pressed I");
		
	}
	if(keyPressed == '70')
	{
		new_image('fluttershy.png');
		console.log("You Pressed F");
	}
	if(keyPressed == '65')
	{
		new_image('Apple Jack.png');
		console.log("You Pressed A");
	}
	if(keyPressed == '80')
	{
		new_image('Pinkie Pie.png');
		console.log("You Pressed P");
	}
	if(keyPressed == '83')
	{
		new_image('Spike.png');
		console.log("You Pressed S");
	}
}

