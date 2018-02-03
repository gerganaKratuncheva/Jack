#pragma strict

public var targetScript: FadeIO;//Targetscript of fadeIO
var fading = false;

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Escape) && fading==false) 
	{
		StartCoroutine (FadeoutMenu (1.0f));
	}
}

function FadeoutMenu (waitTime : float)
{
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("SceneMenu");
}