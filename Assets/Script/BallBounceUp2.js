#pragma strict

public var jumpHeight = 20;
private var jumping = false;
public var bounceCounter =-1;
var sprite : SpriteRenderer;
public var needPickup = 0;

/*function Start ()
{
	
    sprite = GetComponent(SpriteRenderer);
}*/


function Update () 
{
// looks to squish the ball on the second touching of the ground
/*if(bounceCounter > 0 && OnCollisionEnter2D == true) 
{
	sprite.sprite = Resources.Load("KrasioBallFrame2", typeof(Sprite));
}*/


//checks to see if you can still catch the ball.
if(bounceCounter <2 && jumping == true && Input.GetMouseButtonDown(0))
{
		Debug.Log("you cought it");
}


if (Input.GetMouseButtonDown(0) && jumping == false)
{
	needPickup++;
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