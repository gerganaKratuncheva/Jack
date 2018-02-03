#pragma strict
var i:int; //level
var CanBounce=true;//can it bounce
var jumping = false;
public var bounceCounter =-1;
var sprite : SpriteRenderer; // for the animation
var Playing = false;
//public var targetScript: BackGround; // calls the gamecontrol scriipt
public var Jax :int;//how many are they
var PickedUp: int;// how many are picked up

function Start ()
{
    sprite = GetComponent(SpriteRenderer);// gets the sprites
}

function FixedUpdate ()
{
	if(jumping==true)
	{
		GetComponent.<Rigidbody2D>().AddForce(Vector2.up*880f);//adds upwards force
	}
	jumping	=false;// stops it from jumping
}

function Update ()

{	
	i = Application.loadedLevel;//current level

	if(bounceCounter==2)

		{	//stops playing after 2 bounces and has not caught the ball
			Application.LoadLevel(i);
		}			
}


function OnMouseDown ()

{


	//checks to see if you can still catch the ball.
	if(bounceCounter <2 && Playing == true)
	{
		if(PickedUp == Jax)
		//if all jax are picked up
		{
			// continues if you catch the ball
			Application.LoadLevel(i+1);
		}
		else
		{	//restarts if you  catch it too fast
			Application.LoadLevel(i);
		}
	}


	// the jump if it's still on the ground
	if (CanBounce==true && Playing==false)
	{
		jumping = true;//activates the upwards force
		Playing = true;// starts playing once you you click to bounce
		
	}
}
	
//on entering the collider that is trigger


function OnTriggerEnter2D ()
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