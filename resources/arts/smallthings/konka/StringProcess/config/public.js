/*
 * File: Public functions
 * Designed by Linxiaozhou
 * Date: 2016/02/23
 */
 
	function OL_GetString(string)
	{ 
		return string.match(/\"[^\"]+\"/g);
	}
	
	function OL_ReplaceString(string, new_string)
	{ 
		return string.replace(/\"[^\"]+\"/g, new_string);
	} 
	
	/* 替换所有符合条件的字符串 */
	function OL_Public_ReplaceAll(str, old_key, new_key)
	{
		var res = str.replace(new RegExp(old_key,'gm'),new_key);
		if("undefined"==res)
			return "";
		else
			return res;
	}
	
	function OL_Public_CheckKeyWord(str, key)
	{
		str = str.toLocaleLowerCase();
		key = key.toLocaleLowerCase();
		if(str==key) 
			return 1;				// 包含key
		else
			return 0;
	}
	
	function ol_pad(num, n)
	{ 
		
		num = ""+num
		var temp = num;
		
		for(var i=0;i<(n-num.length);i++)
		{
			temp = "0"+temp
		}	
		return temp
	} 
	
	
	function ol_goto(id)
	{
		$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({scrollTop: $("#"+id).offset().top-80}, 400);
	}
	
	function ol_goto1(id)
	{
		location.href="#"+id
	}
	
	function ol_get_obj(id)
	{
		return document.getElementById(id);
	}
	
	var OL_Win_KeyValue = {
		UP : 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39,
		ENTER: 13,
		PAGEUP: 33,
		PAGEDOWN: 34,
		MENU:36,
		DEL: 46,
		BACK: 8,
		HOME: 36,
		ESC: 27,
		
		NUM0: 48,
		NUM1: 49,	// red
		NUM2: 50,	// green
		NUM3: 51,	// yellow
		NUM4: 52,	// blue
		NUM5: 53,
		NUM6: 54,
		NUM7: 55,
		NUM8: 56,
		NUM9: 57,
		
		NUM0_0:96,
		NUM1_1:97,
		NUM2_2:98,
		NUM3_3:99,
		NUM4_4:100,
		NUM5_5:101,
		NUM6_6:102,
		NUM7_7:103,
		NUM8_8:104,
		NUM9_9:105,
		
		// Info
		BTN_H:72,	// H key - Super key: call help bar
		BTN_A:65,	// A key - debug: CA message comes
		
		BTN_P:80,	// P key
		BTN_R:82,	// R key
		BTN_E:69,	// E key
		BTN_T:84,	// T key
		BTN_L:76,	// L key
		BTN_M:77,	// M key
		
		BTN_G:71,	// EPG
		BTN_I:73,	// INFO
		BTN_C:67, 	// EXIT
		BTN_U:85, 	// USB(APPL)
		BTN_S:83, 	// Service-list
		
	};
	function OL_Public_GetKeyValue()
	{
		var keyValue;
		if(window.event){
		   keyValue = event.keyCode;   
		} else if(e.which){
		   keyVlaue = e.which;
		}
		
		return keyValue;
	}
	
	function OL_Public_CheckKey_IsEnterKey(key)
	{
		if(key == OL_Win_KeyValue.ENTER)
			return true;
		else
			return false;
	}