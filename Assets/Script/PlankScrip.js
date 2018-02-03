#pragma strict
public var targetScript: BallBounceUp;
var speed = 5;
var sidewase=false;

function Update ()
{
	//this now works with the click on the ball. If playing is true on the ball. 
	if(targetScript.fading == false && targetScript.Playing==true)
	{
		sidewase=true;
		StartCoroutine(Destroy(0.2f));
	}

	if(sidewase)
	{
		transform.position.x -= (speed*Time.deltaTime);
	}
}

function Destroy (waitTime: float)
{
	yield WaitForSeconds(waitTime); 
	gameObject.SetActive (false);
}