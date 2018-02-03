#pragma strict

public var targetScript: FadeIO;
var fading = true;

function Start ()
{	
	PlayerPrefs.DeleteKey("ShowAd");
	StartCoroutine(FadingIn(0.5f));
}

function Update ()
{
	if (Input.GetKeyDown(KeyCode.Escape)) 
	 {
    	Application.Quit();
   	 }
}


function OnMouseDown ()
{

	if(fading==false)
	{
	PlayerPrefs.DeleteKey("LevelProgres");
	PlayerPrefs.SetInt("Attempts",0);
	PlayerPrefs.SetInt("Skips",2);
	StartCoroutine (FadeoutOut(1.0f));
	}
}

function FadeoutOut (waitTime : float)
{
	
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("Scene1");
}

function FadingIn (waitTime: float)
{
	yield WaitForSeconds(waitTime); 
	fading=false;
}