#pragma strict

var pickUps = 0;//how much do you need	
var pickedUpAll = false;// did you pick all of them up
var numberOfJax = 1;
var jumpHeight = 8;
public var JaxActive : GameObject; // what we will be disabling

public var targetScript: BallBounceUp2;

function OnMouseOver ()
{	//if you press and on ballbounceup2 script playing var == true
	if(Input.GetMouseButton(0) && targetScript.Playing==true)
	{
		rigidbody2D.velocity.y = jumpHeight;
		StartCoroutine(JaxDisapearTimer(0.2));
	}
}

// how long do they float up before they disapear
function JaxDisapearTimer (waitTime: float)
{
	yield WaitForSeconds(waitTime);
	JaxActive.SetActive(false);//disables the jax
}
