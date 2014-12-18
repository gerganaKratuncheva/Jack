#pragma strict

var pickUps = 0;
var pickedUpAll = false;
var numberOfJax = 1;
var jumpHeight = 8;
public var JaxActive : GameObject;

public var targetScript: BallBounceUp2;

function OnMouseOver ()
{
	if(Input.GetMouseButton(0))
	{
		rigidbody2D.velocity.y = jumpHeight;
		StartCoroutine(JaxDisapearTimer(0.2));
	}
}


function JaxDisapearTimer (waitTime: float)
{
	yield WaitForSeconds(waitTime);
	JaxActive.SetActive(false);
}
