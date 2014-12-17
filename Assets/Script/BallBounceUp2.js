#pragma strict

public var jumpHeight = 20;
private var jumping = false;
public var bounceCounter =-1;
var sprite : SpriteRenderer;

/*function Start ()
{
	
    sprite = GetComponent(SpriteRenderer);
}*/


function Update () 
{

if (Input.GetMouseButtonDown(0) && jumping == false)
{
	rigidbody2D.velocity.y = jumpHeight;
}

	jumping = true;

}

function OnCollisionStay2D () 
{
	jumping = false;
}

function OnCollisionEnter2D ()
{
	//THIS SHOULD BE TO ANIMATE THE "SQUISH " OF THE BALL AT LANDING -> NOT WORKING CORRECTLY
	//ALSO GOES FREEZES THE PC FOR LIKE 2 SEC
	//sprite.sprite = Resources.Load("KrasioBallFrame2", typeof(Sprite));
	bounceCounter	++;
}

/*function OnCollisionExit2D ()
{
	//HERE THE BALL SHOULD COME BACK TO NORMAL
	sprite.sprite = Resources.Load("KrasioBall", typeof(Sprite));
}*/