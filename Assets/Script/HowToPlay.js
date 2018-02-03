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
	StartCoroutine (FadeoutOut(0.8));
	}
}

function FadeoutOut (waitTime : float)
{
	
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("HowToPlay");
}

function FadingIn (waitTime: float)
{
	yield WaitForSeconds(waitTime); 
	fading=false;
}