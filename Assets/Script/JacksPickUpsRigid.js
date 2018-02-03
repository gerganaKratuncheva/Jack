#pragma strict
var jumpHeight = 3;

public var targetScript: BallBounceUp1;

function OnMouseDown () //  mouse controlls
{	//if you press and on ballbounceup2 script playing var == true

	if(targetScript.Playing==true)
	
		{
			targetScript.PickedUp++;
			//rigidbody2D.velocity.y = jumpHeight;// jumps up(NEED TO ADD RIGIDBODY2D TO WORK
			//StartCoroutine(JaxDisapearTimer(0.06));// starts the disapear timer
			//disables the jax
			gameObject.SetActive (false);
		}
}


// how long do they float up before they disapear
/*function JaxDisapearTimer (waitTime: float)
{
	yield WaitForSeconds(waitTime);
	JaxActive.SetActive(false);//disables the jax
}*/
