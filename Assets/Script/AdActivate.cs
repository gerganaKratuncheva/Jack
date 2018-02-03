using UnityEngine;
using UnityEngine.Advertisements;
using System.Collections;

public class AdActivate : MonoBehaviour 
{	
	void Update () 
	{	
		if (Advertisement.isReady ()&& PlayerPrefs.GetInt("ShowAd")==1)//accepts the signal for an ad to start.
		{
			PlayerPrefs.DeleteKey("ShowAd");
			Advertisement.Show (null, new ShowOptions 
			                    {
				pause = true,
				resultCallback = result => 
				{
					PlayerPrefs.SetInt("Attempts",0);//reset the attempts before next add
				}
			});
		}
	}
}