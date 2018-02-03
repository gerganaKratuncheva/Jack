public var targetScript: BallBounceUp;

function OnMouseDown ()
{	//if you press and on ballbounceup2 script playing var == true

	if(targetScript.Playing==true)
	
		{
			Handheld.Vibrate();
			targetScript.HitLose = true;
			gameObject.SetActive (false);
		}
}