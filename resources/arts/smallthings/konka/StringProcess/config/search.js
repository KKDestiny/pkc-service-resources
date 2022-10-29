/*
 * 文件：  search.js
 * 功能：  输入英文字符串字符串，在数据库中查找该英文字符串；如果有，则返回指定语言的字符串；否则返回原字符串
 */
 
	function OL_Debug()
	{
		var a = "\xb2\xeb\xe5\xde\xd4";
		ol_get_obj("ol_replace_result").innerHTML = a;
	}

	function OL_Get_NewString(str_en)
	{
		var str_db = OL_String_DataBase;
		
		for(var i=0; i<str_db.length; i++)
		{
			if(OL_Public_CheckKeyWord(str_db[i].str_english[0],str_en))
			{
				return str_db[i];
			}
		}
		
		return null;
	}
	
	function OL_Get_StringIndex(str_en)
	{
		var str_db = OL_String_DataBase;
		
		for(var i=0; i<str_db.length; i++)
		{
			if(OL_Public_CheckKeyWord(str_db[i].str_english[0],str_en))
			{
				return i;
			}
		}
		
		return -1;
	}
	
	
	/*
	 * @input:	str_en-输入英文字符串，	new_language-指定要查找的字符串语言，	return_str_type-返回的字符串类型（0-返回字符串，1-返回字符串十六进制编码值）
	 * @return:	[result, str_new]  result-查询结果（0-未能查找到，1-存在），	str_new-查询到的字符串
	 */
	function OL_SearchString(str_en, new_language, return_str_type)
	{
		var str_new = str_en;
		var result = 0;
		
		// 查数据库
		var new_obj = OL_Get_NewString(str_en);
		
		// 存在该字符串
		if(null != new_obj)
		{
			switch(new_language)
			{
				case "french":
					result = 1;
					if("str_french" in new_obj)	// 避免缺少该语言导致运行终止
					{
						str_new = new_obj.str_french[return_str_type];
					}
					break;
				case "chinese":
					result = 1;
					if("str_chinese" in new_obj)
					{
						str_new = new_obj.str_chinese[return_str_type];
					}
					break;
				case "russian":
					result = 1;
					if("str_russian" in new_obj)
					{
						str_new = new_obj.str_russian[return_str_type];
					}
					break;
				case "spanish":
					result = 1;
					if("str_spanish" in new_obj)
					{
						str_new = new_obj.str_spanish[return_str_type];
					}
					break;
				case "mongolian":
					result = 1;
					if("str_mongolian" in new_obj)
					{
						str_new = new_obj.str_mongolian[return_str_type];
					}
					break;
				case "german":
					result = 1;
					if("str_german" in new_obj)
					{
						str_new = new_obj.str_german[return_str_type];
					}
					break;
				case "indonesia":
					result = 1;
					if("str_indonesia" in new_obj)
					{
						str_new = new_obj.str_indonesia[return_str_type];
					}
					break;
				case "arbic":
					result = 1;
					if("str_arbic" in new_obj)
					{
						str_new = new_obj.str_arbic[return_str_type];
					}
					break;
					
				default:
					str_new = new_obj.str_english[return_str_type];
					break;
			}
		}
		
		return [result, str_new];
	}
	
	function OL_ReplaceSourceString()
	{
		// 获取字符串文件数据
		var src = ol_get_obj("ol_str_src").value;
		if(""==src){alert("没有数据！请先将ui_txtlang.h整个文件复制到输入框中！");return -1;}
		
		// 获取需要生成的语言
		var new_language = ol_get_obj("ol_new_language").value;
		if(""==new_language){alert("请先选择要生成文件的语言！");return -1;}
		
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var src_arr = src.split("<>");
		if(0==src_arr.length){alert("输入的ui_txtlang.h有误！请重试！");return -1;}
		
		// 遍历每行，找出英文字符串并自行替换
		var ol_original_result = "";
		var replace_result = "";
		var replace_failed = "";
		for(var i=0; i<src_arr.length; i++)
		{
			ol_original_result += (src_arr[i] + "<br>");
			
			var new_string = "";
			
			// 检查此行是否为字符串
			if(1)
			{
				// 获取字符串
				var string = OL_GetString(src_arr[i]);
				if(null!=string)
				{
					string = string[0].substring(1, string[0].length-1);
					if(-1!=string.indexOf("\\0"))
					{
						string = string.substring(0,string.indexOf("\\0"))
					}
					
					// 查找数据库（此处必须使用转码的十六进制码值，即return_str_type=1）
					new_string = OL_SearchString(string, new_language, 1);
					
					// 置换原字符串
					src_arr[i] = OL_ReplaceString(src_arr[i], "\""+new_string[1]+"\"");
					
					if(0 == new_string[0])
					{
						replace_failed += string+"<br>";
						src_arr[i] = "<span style='color:#EF0000; font-weight:bold;'>"+src_arr[i]+"</span>";
					}
				}
				
			}
			
			replace_result += (src_arr[i] + "<br>");
		}
		
		ol_get_obj("ol_replace_failed").innerHTML = replace_failed;
		
		ol_get_obj("ol_replace_result").innerHTML = replace_result;
		
		return src_arr;
	}
	
	
	/*
	 * @str_en: 	要查找的英文单词
	 * @en_arr: 	从这个数组中查找单词
	 * @other_arr: 	与en_arr数组对应的其他语言数组
	 * 
	 * @return: 	返回str_en的其他语言，如果不存在，则返回原str_en
	 *
	 */
	function OL_SearchForAddString(str_en, en_arr, other_arr)
	{
		for(var i=0; i<en_arr.length; i++)
		{
			if(str_en == en_arr[i])
			{
				return [1, other_arr[i]];
			}
		}
		return [0, str_en];
	}
	
	
	function OL_AddStr2Txtlang()
	{
		// 获取字符串文件数据
		var src = ol_get_obj("ol_str_add").value;
		if(""==src){alert("没有数据！请先将ui_txtlang_xxxx.h整个文件复制到输入框中！");return -1;}
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var src_arr = src.split("<>");
		if(0==src_arr.length){alert("输入的ui_txtlang_xxxx.h有误！请重试！");return -1;}
		
		
		// 获取英文词汇数据
		var src = ol_get_obj("ol_str_add_en").value;
		if(""==src){alert("没有数据！请先将要替换的英文词汇粘贴进下方输入框中（一个英文单词一行）");return -1;}
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var en_arr = src.split("<>");
		if(0==en_arr.length){alert("输入的英文词汇有误！请重试！");return -1;}
		
		
		// 获取其他语言数据
		var src = ol_get_obj("ol_str_add_other").value;
		if(""==src){alert("没有数据！请先将要英文词汇对应的词汇粘贴进下方输入框中（一个单词一行）");return -2;}
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var other_arr = src.split("<>");
		if(0==other_arr.length){alert("输入的英文词汇对应的其他语言词汇有误！请重试！");return -3;}
		
		if(en_arr.length != other_arr.length)
		{
			ol_get_obj("ol_addstr2txtlang_process").innerHTML = "<p style='color:#EF0000; font-weight:bold;'>英文词汇和其他语言词汇长度不一致，无法继续操作！</p>";
			alert("英文词汇和其他语言词汇长度不一致，无法继续操作！");
			return -4;
		}
		
		
		// 遍历每行，找出英文字符串并自行替换
		var ol_original_result = "";
		var replace_result = "";
		var replace_arr = new Array();
		for(var i=0; i<src_arr.length; i++)
		{
			ol_original_result += (src_arr[i] + "<br>");
			
			var new_string = "";
			
			// 检查此行是否为字符串
			if(1)
			{
				// 获取字符串
				var string = OL_GetString(src_arr[i]);
				if(null!=string)
				{
					string = string[0].substring(1, string[0].length-1);
					if(-1!=string.indexOf("\\0"))
					{
						string = string.substring(0,string.indexOf("\\0"))
					}
					
					// 查找数据库（此处必须使用转码的十六进制码值，即return_str_type=1）
					new_string = OL_SearchForAddString(string, en_arr, other_arr);
					
					// 置换原字符串
					src_arr[i] = OL_ReplaceString(src_arr[i], "\""+new_string[1]+"\"");
					
					if(1 == new_string[0])
					{
						replace_arr.push([string, new_string[1]]);
						src_arr[i] = "<span style='color:#2289DB; font-weight:bold;'>"+src_arr[i]+"</span>";
					}
				}
				
			}
			
			replace_result += (src_arr[i] + "<br>");
		}
		
		var hint_info = "<p>本次添加词汇"+replace_arr.length+"条，在【结果】中会用蓝色标识。</p>";
		for(var i=0; i<replace_arr.length; i++)
		{
			hint_info += (replace_arr[i][0]+ " > " +replace_arr[i][1] + "<br>");
		}
		ol_get_obj("ol_addstr2txtlang_process").innerHTML = hint_info;
		
		ol_get_obj("ol_addstr2txtlang_result_db").innerHTML = replace_result;
		
		return src_arr;
	}
	
	
	
	function OL_ExtractString()
	{
		// 获取字符串文件数据
		var src = ol_get_obj("ol_str_extract").value;
		if(""==src){alert("没有数据！请先将ui_txtlang.h或ui_txtlang_xxxx.h整个文件复制到输入框中！");return -1;}
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var src_arr = src.split("<>");
		if(0==src_arr.length){alert("输入的ui_txtlang.h或ui_txtlang_xxxx.h有误！请重试！");return -1;}
		
		
		// 遍历每行，找出英文字符串并自行替换
		var ol_original_result = "";
		var extract_result = "";
		var extract_num = 0;
		var replace_arr = new Array();
		for(var i=0; i<src_arr.length; i++)
		{
			ol_original_result += (src_arr[i] + "<br>");
			
			var new_string = "";
			
			// 检查此行是否为字符串
			if(1)
			{
				// 获取字符串
				var string = OL_GetString(src_arr[i]);
				if(null!=string)
				{
					string = string[0].substring(1, string[0].length-1);
					if(-1!=string.indexOf("\\0"))
					{
						string = string.substring(0,string.indexOf("\\0"))
					}
					
					var temp = OL_Public_ReplaceAll(string, " ", "");
					if(""!=temp){extract_result += string+"<br>"; extract_num += 1;}
					
				}
				
			}
		}
		
		ol_get_obj("ol_extract_result").innerHTML = extract_result;
		
		ol_get_obj("ol_extract_process").innerHTML = "<p>本次共提取了"+extract_num+"个词汇</p>";
		
		return src_arr;
	}
	
	
	
	
	
	
	
	
	
	


