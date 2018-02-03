#pragma strict

public var targetScript: BallBounceUp;
public var speed = 1;
var goingUp = true;

function FixedUpdate ()
{
	if(targetScript.Playing==false && targetScript.fading==false)
	{
		if(goingUp==true)
		{
			transform.position.y += (speed*Time.deltaTime);
		}
		else if(goingUp==false)
		{
			transform.position.y -= (speed*Time.deltaTime);
		}
	}
}

function OnTriggerEnter2D ()
{
	if(goingUp==true)
	{
		goingUp=false;
	}
	else
	{
		goingUp=true;
	}
}