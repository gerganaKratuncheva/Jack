#pragma strict

public var jumpHeight = 12;
var jumping = false;
public var bounceCounter =-1;
var sprite : SpriteRenderer; // for the animation
var Playing = false;
//public var targetScript: JacksPickUps1;// calls the gamecontrol scriipt
public var Jax =1;//how many are they
var PickedUp: int;// how many are picked up

function Start ()
{
    sprite = GetComponent(SpriteRenderer);// gets the sprites
}

function Awake () {
		DontDestroyOnLoad (transform.gameObject);
	}

function Update ()

{

	if(bounceCounter==2)

		{	//stops playing after 2 bounces and has not caught the ball
			Playing = false;
			//Debug.Log("you lost the game");
		}
	
		// stops bouncing at 3 bounces.
	if(bounceCounter==3)
		{
			GetComponent.<Rigidbody2D>().velocity=Vector3.zero;
		}				
}


function OnMouseDown ()

{


	//checks to see if you can still catch the ball.
	if(bounceCounter <2 && Playing == true)
	{
		if(PickedUp == Jax)
		{
			// wins if you catch the ball
			//Debug.Log("You win");
			Playing=false;
			Application.LoadLevel(Jax);
			Jax++;
		}
		else
		{	//loses if you  catch it too fast
			//Debug.Log("Too fast");
			Playing=false;
		}
	}


	// the jump if it's still on the ground
	if (jumping == false)
	{
		Playing = true;// starts playing once you you click to bounce
		GetComponent.<Rigidbody2D>().velocity.y = jumpHeight;
	}
}
	

function OnCollisionStay2D () 
{
	jumping = false;
}

function OnCollisionExit2D ()
{
	jumping = true; 
}

function OnCollisionEnter2D ()
{
	bounceCounter	++;
	
	//squish animation
	/*if(bounceCounter >0 && bounceCounter <3) 
	{
		sprite.sprite = Resources.Load("KrasioBallFrame5", typeof(Sprite));
		StartCoroutine(WaitNotOnGround(0.1));
	}*/
}


//this will change the sprite back to not being "squished" after some time
/*function WaitNotOnGround (waitTime: float)
{
	yield WaitForSeconds(waitTime); 
	sprite.sprite = Resources.Load("KrasioBall", typeof(Sprite));
}*/