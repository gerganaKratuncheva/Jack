#pragma strict
	
var pickedUpAll = false;// did you pick all of them up
var numberOfJax = 1;
var jumpHeight = 3;
var JaxActive : GameObject; // what we will be disabling

public var targetScript: BallBounceUpTesting;

function OnMouseDown () //  mouse controlls
{	//if you press and on ballbounceup2 script playing var == true

	if(targetScript.Playing==true)
	
		{
			targetScript.PickedUp++;
			//rigidbody2D.velocity.y = jumpHeight;// jumps up(NEED TO ADD RIGIDBODY2D TO WORK
			JaxActive.SetActive(false);//disables the jaX
			//StartCoroutine(JaxDisapearTimer(0.06));// starts the disapear timer
		
		}
	
}


// how long do they float up before they disapear
/*function JaxDisapearTimer (waitTime: float)
{
	yield WaitForSeconds(waitTime);
	JaxActive.SetActive(false);//disables the jax
}*/
