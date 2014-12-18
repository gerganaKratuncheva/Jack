#pragma strict

public var jumpHeight = 20;
private var jumping = false;
public var bounceCounter =-1;
var sprite : SpriteRenderer;
public var needPickup = 0;
var ballSquish = false;

function Start ()
{
	
    sprite = GetComponent(SpriteRenderer);
}


function Update () 
{
// looks to squish the ball on the second touching of the ground
if(bounceCounter > 0 && ballSquish == false) 
{
	sprite.sprite = Resources.Load("KrasioBallFrame2", typeof(Sprite));
	StartCoroutine(WaitNotOnGround(1));
}


//checks to see if you can still catch the ball.
if(bounceCounter <2 && jumping == true && Input.GetMouseButtonDown(0))
{
		Debug.Log("you cought it");
}

// the jump if it's still on the ground
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
	ballSquish = true;
}

/*function OnCollisionExit2D ()
{
	//HERE THE BALL SHOULD COME BACK TO NORMAL
	sprite.sprite = Resources.Load("KrasioBall", typeof(Sprite));
}*/


//this will change the sprite back to not being "squished" after some time
function WaitNotOnGround (waitTime: float)
{
		yield WaitForSeconds(waitTime);
		ballSquish = false;
}