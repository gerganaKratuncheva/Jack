using UnityEngine;
using System.Collections;

public class BallBounceUp : MonoBehaviour {


	// Update is called once per frame
	void Update () {
		       if (Input.GetKeyDown ("space")){
			                 transform.Translate(Vector3.up * 260 * Time.deltaTime, Space.World);
			       } 
}
}
