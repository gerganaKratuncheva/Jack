#pragma strict

// Make this game object and all its transform children
	// survive when loading a new scene.


function Awake () 
{
	DontDestroyOnLoad (transform.gameObject);
}

function Update ()
{
	if (Application.loadedLevel >= 4 && PlayerPrefs.GetInt("Skips")>0)//this number should be the first playable level
	{
		GetComponent.<Renderer>().enabled = true;
	}
	else
	{
		GetComponent.<Renderer>().enabled=false;
	}
}

function OnMouseDown ()
{
	if (Application.loadedLevel >= 4 && PlayerPrefs.GetInt("Skips")>0)
	{
		PlayerPrefs.SetInt("Skips",PlayerPrefs.GetInt("Skips")-1);
		Application.LoadLevel(Application.loadedLevel+1);
	}
	
}