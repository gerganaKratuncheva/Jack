#pragma strict

public var jumpHeight = 20;
private var jumping = false;
public var bounceCounter =-1;


function Update () 
{

if (Input.GetKeyDown(KeyCode.Space) && jumping == false)
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
	bounceCounter	++;
}