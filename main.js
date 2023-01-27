var canvas=new fabric.Canvas("myCanvas");
var blockY=1;
var blockX=1;
var blockImageWidth = 350;
var blockImageHeight = 430;
var blockImageObject= "";

function new_image(getImage){
	fabric.Image.fromURL(getImage, function(Img){
		blockImageObject=Img;

		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top:blockY,
			left:blockX
		});
		canvas.add(blockImageObject)
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	var keyPressed = e.keyCode;
	console.log(keyPressed);

	if(keyPressed == '69') 
	{
		new_image("rr1.png");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image("gr.png");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image("br.png");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image("yr.png");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image("pr.png");
	}
	
}

