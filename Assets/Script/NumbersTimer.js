#pragma strict
public var targetScript: BallBounceUp;
//var call=true;//so it does not constantly call destroy(use it in the if statement if you use the function destroy
public var number:int;
public var normalGame=true;
public var disapear=false;
var call = true;//call is used to stop calling the function Destroy since the call is in the update
var speed: float = 1.0f;
public var Change = false;
function Start () 


{
	GetComponent.<Renderer>().enabled=false;// start invisible
	
}


function Update ()
{
	// if it is a normal game 
	if(normalGame==true)
	{
		if (targetScript.Playing==true)
		{
			GetComponent.<Renderer>().enabled = true;
			//if we want them to disapera after a while
			if(disapear==true && call==true)
				{
					StartCoroutine(Destroy(speed));
				}
		}
	
	
		if(targetScript.PickedUp == number)
		{
			gameObject.SetActive (false);
		}
	}
	// if the jax that you can pick up changes
	if (Change==true)
	{
		if (targetScript.Playing==true)
		{
			if(targetScript.PickedUp != targetScript.Jax)
			{
				if(targetScript.RandomNumber == number)
				{
					GetComponent.<Renderer>().enabled = true;
				}
				 else
				 {
					GetComponent.<Renderer>().enabled = false;
				 }
				
			 }
			 else
			 {
					GetComponent.<Renderer>().enabled = false;
			 }
		}
	}
}

//the disapear function
function Destroy (waitTime: float)
{
	call=false;
	yield WaitForSeconds(waitTime); 
	gameObject.SetActive (false);
}
