#pragma strict

public var targetScript: FadeIO;
var fading = true;

function Start ()
{	
	StartCoroutine(FadingIn(0.5f));
}


function OnMouseDown ()
{
	if(fading==false)
	{
	StartCoroutine (FadeoutOut(1.0f));
	}
}

function FadeoutOut (waitTime : float)
{
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel(PlayerPrefs.GetInt("LevelProgres"));
}


function FadingIn (waitTime: float)
{
	yield WaitForSeconds(waitTime); 
	fading=false;
}