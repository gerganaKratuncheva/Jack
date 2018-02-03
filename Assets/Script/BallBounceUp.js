#pragma strict
public var CanBounce=true;//can it bounce
public var bounceCounter =-1;
var Playing = false;// are you playing
public var Jax :int;//how many are they
var PickedUp: int;// how many are picked up
var fading = true;//  is the screen fading to/from bblack
public var targetScript: FadeIO;//Targetscript of fadeIO
var HitLose = false; //hitting something that ends the game
///////RNG//////////////////////////////////////////////////////////
var RandomNumber:int;// this can pick a jack on random
public var needRandom=false;//do i need a random number
var ExcludeNumbers = new Array ();//array for numbers that are to be excluded when the jack is picked up
var callRandomInstant=false;//to instantly call a random number
/////RGN//////////////////////////////////////////////////////////////


function Start ()
{	
    PlayerPrefs.SetInt("CurrentLevel",Application.loadedLevel);
    ExcludeNumbers.push(0);
	StartCoroutine(FadingIn(0.5f));// fate in the level

	//Saves the number of the level you are on if it's the first time you are on this level
	if(PlayerPrefs.GetInt("LevelProgres")<Application.loadedLevel)
	{
		PlayerPrefs.SetInt("LevelProgres",Application.loadedLevel);//sets the level progress to the number of the level
	}
}

function Update ()
{	
////////////////////Global Inputs/////////////////////////////////////////////
		// goes to the menu screen on escape
	 if (Input.GetKeyDown(KeyCode.Escape)) 
	 {
    	StartCoroutine (FadeoutMenu (1.0f));
   	 }
///////////////////Global Inputs///////////////////////////////////////////	

//////////////////Random Number Generator/////////////////////////////////
	if(needRandom==true &&Playing==true)
	{
		if(callRandomInstant==true && PickedUp != Jax)
		{
			PickJack();
		}
	}
/////////////////Random Number Generator/////////////////////////////////

//////////////////Checking Ball States//////////////////////////////	
// if you hit something that loses the game in the levels
	if (HitLose == true && fading  == false)
	{	// you lose the game if you hit something that is not a jack
		StartCoroutine (FadeoutLose (1.2f));	
	}

	if(bounceCounter==2 && fading == false)

	{	//stops playing after 2 bounces and has not caught the ball
		StartCoroutine (FadeoutLose (1.2f));
	}
///////////////Checking Ball States///////////////////////////////			
}


function OnMouseDown ()
{

///////////////////Ball Inputs/////////////////////////////////////
	//checks to see if you can still catch the ball.
	if(Playing == true && fading == false)
	{
		if(PickedUp == Jax)
		//if all jax are picked up
		{
			// continues if you catch the ball
			StartCoroutine	(FadeoutWin (1.2f));
		}
		else
		{	//restarts if you  catch it too fast
			StartCoroutine (FadeoutLose (1.2f));
		}
	}

	// the jump if it's still on the ground
	if (Playing == false && CanBounce==true && fading == false)
	{
		Playing = true;// starts playing once you you click to bounce
		GetComponent.<Rigidbody2D>().AddForce(Vector2.up*900f);//adds upwards force
		 if(needRandom==true)
   		 {
    		RandomNumber=Random.Range(1,Jax+1);
    	 }
	}
	
	else if(CanBounce==false && fading == false && Playing == false)
	{
		Playing=true;
	}
	
////////////////Ball Inputs////////////////////////////////////////
}
	
//on entering the collider that is trigger

function OnTriggerEnter2D ()
{
	bounceCounter	++;	// counts number of bounces
}
////////////////Coroutines////////////////////////////////////////
function FadingIn (waitTime: float)
{
	yield WaitForSeconds(waitTime); 
	fading=false;
}
//fade out to the same level
function FadeoutLose (waitTime : float)
{
	Playing=false;
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	if(PlayerPrefs.GetInt("Attempts")==11)
	{
			PlayerPrefs.SetInt("ShowAd",1);
			Application.LoadLevel(Application.loadedLevel);
	}
	/*else if(Random.Range(0,7)==0)
	{
		Application.LoadLevel("LevelFail");
		PlayerPrefs.SetInt("Attempts",PlayerPrefs.GetInt("Attempts")+1);
	}*/
	else 
	{
		PlayerPrefs.SetInt("Attempts",PlayerPrefs.GetInt("Attempts")+1);
		Application.LoadLevel(Application.loadedLevel);
	}
}
//fade out to new level
function FadeoutWin (waitTime : float)
{
	Playing=false;
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	if(PlayerPrefs.GetInt("Attempts")==11)
	{
		
			PlayerPrefs.SetInt("ShowAd",1);//signals for the adds to start
			Application.LoadLevel(Application.loadedLevel+1);
		
	}
	/*else if (Application.loadedLevel >10)//the number of the scene before scene6)
	{
		if(Random.Range(0,7)==0)
		{
			Application.LoadLevel("LevelPass");
			PlayerPrefs.SetInt("Attempts",PlayerPrefs.GetInt("Attempts")+1);
		}
		else 
		{
			Application.LoadLevel(Application.loadedLevel+1);
			PlayerPrefs.SetInt("Attempts",PlayerPrefs.GetInt("Attempts")+1);
		}
	}*/
	else
	{
		PlayerPrefs.SetInt("Attempts",PlayerPrefs.GetInt("Attempts")+1);
		Application.LoadLevel(Application.loadedLevel+1);
	}
	
}
//fading to the menu when called
function FadeoutMenu (waitTime : float)
{
	Playing=false;
	fading=true;
	targetScript.fadeOut();
	yield WaitForSeconds(waitTime);
	Application.LoadLevel("SceneMenu");
}
// give a random number so you can do different behaviours
function PickJack ()
{
	callRandomInstant=false;
	var PHnumber=Random.Range(1,Jax+1);
	//this checks if the random number we have is equal to a number that was jax that was already picked up 
	for(var i = 0; i < ExcludeNumbers.length; i++)
	{
		if (ExcludeNumbers[i]==PHnumber)
		{
			PHnumber=Random.Range(1,Jax+1);
			i=0;
		}
	}
	RandomNumber=PHnumber;//Use the random number that is correct
}
/////////////Coroutines//////////////////////////////////////////////