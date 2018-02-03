using UnityEngine;
using UnityEngine.Advertisements;
using System.Collections;

public class AdInitiate : MonoBehaviour 
{
	
	void Start ()
	{
		Advertisement.debugLevel = Advertisement.DebugLevel.NONE;
		if (Advertisement.isSupported) 
		{
			Advertisement.Initialize ("131624088", true);
		}
	}
}