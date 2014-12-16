#pragma strict

public var jumpHeight = 8;
private var jumping = false;

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