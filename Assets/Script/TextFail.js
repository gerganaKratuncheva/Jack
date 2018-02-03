#pragma strict
var TextFail : UI.Text;//add the object with the UI here
var Num:int;
public var targetScript: FadeIO;//Targetscript of fadeIO
var Texts = ["No no no no no no no no no! Again!","Ouch! Better luck next time!", "You can do it!", "Ohhhhh.. So close!", "You straight up failed this time!", "One more try?", "Don't worry, not everyone can be good at... stuff...", "It's not the phones fault. It's yours", "Did you even try that time?", "Don't give up", "Thank god you like a challange"];
function Start () 
{
	StartCoroutine (NewLevel (1.3f));
	Num=Random.Range (1, Texts.Length);
}

function Update () 
{
	TextFail.text=Texts[Num];
}

//add the fading later
function NewLevel (waitTime : float)
{
	yield WaitForSeconds(waitTime);
	StartCoroutine (FadeOut (1.5f));
}

function FadeOut (waitTime : float)
{
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel(PlayerPrefs.GetInt("CurrentLevel"));
}
