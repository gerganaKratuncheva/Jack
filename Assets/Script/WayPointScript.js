#pragma strict
public var targetScript: BallBounceUp;


function Update ()
{
	if(targetScript.Playing==true)
	{
		gameObject.SetActive(false);
	}
}