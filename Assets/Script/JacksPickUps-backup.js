#pragma strict

public var targetScript: BallBounceUp;

function OnMouseDown ()
{	//if you press and on ballbounceup2 script playing var == true

	if(targetScript.Playing==true)
	
		{
			targetScript.PickedUp++;
			gameObject.SetActive (false);
		}
}



