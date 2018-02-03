#pragma strict
public var number:int; // allows me to set the order of pick up
public var targetScript: BallBounceUp;
public var needOrder = false;//if we are in a level where it is required for the jex to be picked up in order
public var normalGame= true;
public var needRandom = false;//if the game will be with random elements
//public var appear = false;
/////////////////////////starting hidden//////////////////////////////////////////////////////
/*function Start ()
{
	if(appear ==true)
	{
		renderer.enabled=false;
	}
}

function Update ()
{
	if(appear ==true && targetScript.Playing==true)
	{
		renderer.enabled=true;
	}
}*/
/////////////////////////starting hidden///////////////////////////////////////
function OnMouseDown ()
{	//if you press and on ballbounceup2 script playing var == true
	//works normaly if the NeedOrder object is not here
	if(targetScript.Playing==true && normalGame == true)
	
		{
			targetScript.PickedUp++;
			gameObject.SetActive (false);
		}
		
		
		//do we need a order of picking up
	if (targetScript.Playing==true && needOrder == true)
	{	//determens if the jak is next in order
		if(targetScript.PickedUp == number)
			{
			targetScript.PickedUp++;
			gameObject.SetActive (false);
			}
		else // if its not in order lose
		{
			targetScript.HitLose = true;
			Handheld.Vibrate();
		}
	}
	//if we need the pickable jax to be picked up at random
	if (needRandom==true && targetScript.Playing==true)
	{
		if (targetScript.RandomNumber == number)
		{
			targetScript.PickedUp++;
			targetScript.callRandomInstant=true;
			targetScript.ExcludeNumbers.push (number);//add the number of the jax to the array of picked up jaxes
			gameObject.SetActive (false);
		}
		else 
		{
			targetScript.HitLose=true;
		}
	}	
		
}