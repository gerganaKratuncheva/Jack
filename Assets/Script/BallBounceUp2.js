﻿#pragma strict

public var jumpHeight = 20;
private var jumping = false;
public var bounceCounter =-1;
var sprite : SpriteRenderer;
public var needPickup = 1;


function Start ()
{
	
    sprite = GetComponent(SpriteRenderer);
}


function OnMouseOver ()

{
	
	//checks to see if you can still catch the ball.
if(bounceCounter <2 && jumping == true && Input.GetMouseButtonDown(0))
{
		needPickup++;
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
	bounceCounter	++;
	
	//squish animation
	if(bounceCounter > 0) 
	{
		sprite.sprite = Resources.Load("KrasioBallFrame5", typeof(Sprite));
		StartCoroutine(WaitNotOnGround(0.1));
	}
}


//this will change the sprite back to not being "squished" after some time
function WaitNotOnGround (waitTime: float)
{
	yield WaitForSeconds(waitTime);
	sprite.sprite = Resources.Load("KrasioBall", typeof(Sprite));
}