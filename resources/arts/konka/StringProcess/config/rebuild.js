/*
 * 文件：  rebuild.js
 * 功能：  重构数据库
 */
	
	var OL_Build_Version = "1";
	var OL_Hint_Not_Map = "\
	";
 
	function OL_RebuildDatabase()
	{
		/* ********************************* 英文字符串 ********************************** */
		// 获取字符串文件数据
		var src = ol_get_obj("ol_str_src_db0").value;
		if(""==src){alert("没有数据！请先将ui_txtlang.h整个文件复制到输入框中！");return -1;}
		
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var src_arr_en = src.split("<>");
		if(0==src_arr_en.length){alert("输入的ui_txtlang.h有误！请重试！");return -1;}
		
		
		/* ********************************* 其他语言字符串 ********************************** */
		// 获取字符串文件数据
		var src = ol_get_obj("ol_str_src_db1").value;
		if(""==src){alert("没有数据！请先将ui_txtlang_xxxx.h整个文件复制到输入框中！");return -1;}
		
		// 拆分每行字符串，一行为数组的一个元素
		src = src.replace(/(\r\n|\n|\r)/gm, '<>')
		var src_arr_other = src.split("<>");
		if(0==src_arr_other.length){alert("输入的ui_txtlang_xxxx.h有误！请重试！");return -1;}
		
		
		/* ********************************* 如果有重复字符串，是否以新的为准： yes/no ********************************** */
		// 获取需要生成的语言
		var replace_db = ol_get_obj("ol_replace_db").value;
		
		
		/* ********************************* 是否要转码。如果选择“是”，一些语言可能会出现乱码 yes/no ********************************** */
		// 获取需要生成的语言
		var encoding_db = ol_get_obj("ol_encoding_db").value;
		
		
		/* ********************************* 生成的语言 ********************************** */
		// 获取需要生成的语言
		var new_language = ol_get_obj("ol_rebuild_new_language").value;
		if(""==new_language){alert("请先选择要生成的语言！");return -1;}
		
		
		/* ********************************* 匹配英文字符串及其他语言字符串 ********************************** */
		var temp_str_arr_0 = new Array();
		for(var i=0; i<src_arr_en.length; i++)
		{
			// 检查此行是否为字符串
			var temp = src_arr_en[i];
			if("//" != temp.substring(0,2))
			{
				// 获取字符串
				var string = OL_GetString(src_arr_en[i]);
				if(null!=string)
				{
					string = string[0].substring(1, string[0].length-1);
					if(-1!=string.indexOf("\\0"))
					{
						string = string.substring(0,string.indexOf("\\0"))
					}
					
					var temp = OL_Public_ReplaceAll(string, " ", "");
					if(""!=temp){temp_str_arr_0.push(string);}
				}
			}
		}
		console.log("Process 1: 获取英文字符串完成！字符串长度为："+temp_str_arr_0.length)
		ol_get_obj("ol_rebuild_process").innerHTML = ("<p style='color:#343434; font-weight:bold;'>Process 1: 获取英文字符串完成！字符串长度为："+temp_str_arr_0.length+"</p>");
		//console.log(temp_str_arr_0);
		
		var temp_str_arr_1 = new Array();
		for(var i=0; i<src_arr_other.length; i++)
		{
			// 检查此行是否为字符串
			var temp = src_arr_other[i];
			if("//" != temp.substring(0,2))
			{
				// 获取字符串
				var string = OL_GetString(src_arr_other[i]);
				if(null!=string)
				{
					string = string[0].substring(1, string[0].length-1);
					if(-1!=string.indexOf("\\0"))
					{
						string = string.substring(0,string.indexOf("\\0"))
					}
					
					var temp = OL_Public_ReplaceAll(string, " ", "");
					if(""!=temp){temp_str_arr_1.push(string);}
				}
			}
		}
		console.log("Process 2: 获取其他语言字符串完成！字符串长度为："+temp_str_arr_1.length)
		ol_get_obj("ol_rebuild_process").innerHTML += ("<p style='color:#343434; font-weight:bold;'>Process 2: 获取其他语言字符串完成！字符串长度为："+temp_str_arr_1.length+"</p>")
		//console.log(temp_str_arr_1);
		
		
		/******************************* FOR DEBUG: 当出现不对称时，用于检查 **************************************/
		for(i=0; i<temp_str_arr_0.length; i++)
		{
			console.log(temp_str_arr_0[i]+", "+temp_str_arr_1[i])
		}
		/*********************************************************************/
		
		var str_arr = new Array();
		var max = temp_str_arr_0.length; if(max>temp_str_arr_1.length){max = temp_str_arr_1.length;}
		if(temp_str_arr_0.length != temp_str_arr_1.length){console.log("注意！！两个文件的字符串不对称！！");ol_get_obj("ol_rebuild_process").innerHTML+=("<p style='color:#EF0000; font-weight:bold;'>注意！！两个文件的字符串不对称！！字符串顺序可能被破坏！！</p>");}
		for(var i=0; i<max;i++)
		{
			var temp_arr = [temp_str_arr_0[i], temp_str_arr_1[i]];
			str_arr.push(temp_arr)
		}
		console.log("Process 3: 两个文件的字符串对称！可以正常处理！")
		ol_get_obj("ol_rebuild_process").innerHTML += ("<p style='color:#343434; font-weight:bold;'>Process 3: 开始处理字符串</P")
		// console.log(str_arr);
		
		var ol_dictionary = "";
		for(var i=0; i<str_arr.length; i++)
		{
			var str_en = str_arr[i][0];
			var str_other = str_arr[i][1];
			var str_coding = str_other;
			str_other = str_other.replace(/\\/g,"\\\\");
			if("yes"==encoding_db)
			{
				str_coding = str_coding.replace(/\\/g,"\\\\");
			}
			var dic_index = OL_Get_StringIndex(str_en);
			if(-1 == dic_index)	// 没有收录该词汇，直接创建该词汇的对象
			{
				var temp_objstr = "ver"+OL_Build_Version+"_"+i+" = {<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;str_english : [\""+str_en+"\", \""+str_en+"\"],<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;str_"+new_language+" : [\""+str_coding+"\", \""+str_other+"\"],<br>\
				},<br>";
				
				ol_dictionary += temp_objstr;
			}
			else	// 已存在该词汇。要先遍历该词汇的对象
			{
				var flag = 0;
				var new_obj = OL_Get_NewString(str_en);
				if("str_"+new_language in new_obj)	// 已存在该语言，判断是否需要覆盖
				{
					if("yes"==replace_db)
					{
						flag = 1;
					}
					
					var temp_objstr = "";
					temp_objstr = "ver"+OL_Build_Version+"_"+i+" = {<br>\
						&nbsp;&nbsp;&nbsp;&nbsp;str_english : [\""+new_obj.str_english[0]+"\", \""+new_obj.str_english[1]+"\"],<br>";
					if("french"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_french : [\""+new_obj.str_french[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_french[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_french : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("chinese"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_chinese : [\""+new_obj.str_chinese[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_chinese[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_chinese : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("russian"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_russian : [\""+new_obj.str_russian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_russian[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_russian : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("spanish"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_mongolian : [\""+new_obj.str_mongolian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_mongolian[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_spanish : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("mongolian"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_mongolian : [\""+new_obj.str_mongolian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_mongolian[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_mongolian : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("german"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_german : [\""+new_obj.str_german[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_german[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_german : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("indonesia"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_indonesia : [\""+new_obj.str_indonesia[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_indonesia[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_indonesia : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("arbic"==new_language)
					{
						if(0==flag)
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_arbic : [\""+new_obj.str_arbic[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_arbic[1].replace(/\\/g,"\\\\")+"\"],<br>";
						}
						else
						{
							temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_arbic : [\""+str_coding+"\", \""+str_other+"\"],<br>";
						}
					}
					if("str_french" in new_obj && "french"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_french : [\""+new_obj.str_french[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_french[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_chinese" in new_obj && "chinese"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_chinese : [\""+new_obj.str_chinese[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_chinese[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_russian" in new_obj && "russian"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_russian : [\""+new_obj.str_russian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_russian[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_spanish" in new_obj && "spanish"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_spanish : [\""+new_obj.str_spanish[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_spanish[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_mongolian" in new_obj && "mongolian"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_mongolian : [\""+new_obj.str_mongolian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_mongolian[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_german" in new_obj && "german"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_german : [\""+new_obj.str_german[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_german[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_indonesia" in new_obj && "indonesia"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_indonesia : [\""+new_obj.str_indonesia[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_indonesia[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_arbic" in new_obj && "arbic"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_arbic : [\""+new_obj.str_arbic[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_arbic[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					temp_objstr += "},<br><br>";
					
					ol_dictionary += temp_objstr;
				}
				else	//该语言是新的语言，直接添加
				{
					var temp_objstr = "ver"+OL_Build_Version+"_"+i+" = {<br>\
						&nbsp;&nbsp;&nbsp;&nbsp;str_english : [\""+str_en+"\", \""+str_en+"\"],<br>\
						&nbsp;&nbsp;&nbsp;&nbsp;str_"+new_language+" : [\""+str_coding+"\", \""+str_other+"\"],<br>";
					if("str_french" in new_obj && "french"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_french : [\""+new_obj.str_french[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_french[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_chinese" in new_obj && "chinese"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_chinese : [\""+new_obj.str_chinese[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_chinese[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_russian" in new_obj && "russian"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_russian : [\""+new_obj.str_russian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_russian[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_spanish" in new_obj && "spanish"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_spanish : [\""+new_obj.str_spanish[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_spanish[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_mongolian" in new_obj && "mongolian"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_mongolian : [\""+new_obj.str_mongolian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_mongolian[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_german" in new_obj && "german"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_german : [\""+new_obj.str_german[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_german[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_indonesia" in new_obj && "indonesia"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_indonesia : [\""+new_obj.str_indonesia[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_indonesia[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					if("str_arbic" in new_obj && "arbic"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_arbic : [\""+new_obj.str_arbic[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_arbic[1].replace(/\\/g,"\\\\")+"\"],<br>";}
					temp_objstr += "},<br><br>";
					
					ol_dictionary += temp_objstr;
				}
			}
		}
		
		/* 补齐原数据库里的词汇到新库中 */
		console.log("Process 4: 补齐原数据库里的词汇到新库中！")
		ol_get_obj("ol_rebuild_process").innerHTML += ("<p style='color:#343434; font-weight:bold;'>Process 4: 补齐原数据库里的词汇到新库中！</p>")
		
		/**/
		var ol_dictionary1 = "";
		var x = 0;
		for(var i=0; i<OL_String_DataBase.length; i++)
		{
			var not_in_db = 1;
			var new_obj = OL_String_DataBase[i];
			for(var j=0; j<str_arr.length; j++)
			{
				var str_en = str_arr[j][0];
				if(new_obj.str_english[0] == str_en)
				{
					not_in_db = 0;
				}
			}
			
			if(not_in_db)
			{
				var temp_objstr = "oldver"+OL_Build_Version+"_"+x+" = {<br>\
					&nbsp;&nbsp;&nbsp;&nbsp;str_english : [\""+new_obj.str_english[0]+"\", \""+new_obj.str_english[1]+"\"],<br>";
				if("str_french" in new_obj && "french"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_french : [\""+new_obj.str_french[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_french[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_chinese" in new_obj && "chinese"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_chinese : [\""+new_obj.str_chinese[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_chinese[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_russian" in new_obj && "russian"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_russian : [\""+new_obj.str_russian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_russian[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_spanish" in new_obj && "spanish"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_spanish : [\""+new_obj.str_spanish[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_spanish[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_mongolian" in new_obj && "mongolian"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_mongolian : [\""+new_obj.str_mongolian[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_mongolian[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_german" in new_obj && "german"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_german : [\""+new_obj.str_german[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_german[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_indonesia" in new_obj && "indonesia"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_indonesia : [\""+new_obj.str_indonesia[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_indonesia[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				if("str_arbic" in new_obj && "arbic"!=new_language){temp_objstr += "&nbsp;&nbsp;&nbsp;&nbsp;str_arbic : [\""+new_obj.str_arbic[0].replace(/\\/g,"\\\\")+"\", \""+new_obj.str_arbic[1].replace(/\\/g,"\\\\")+"\"],<br>";}
				temp_objstr += "},<br><br>";
				
				x += 1;
				ol_dictionary1 += temp_objstr;
			}
		}
		
		
		console.log("Process 5: 完成转换，请查看显示区！")
		ol_get_obj("ol_rebuild_process").innerHTML += ("<p style='color:#343434; font-weight:bold;'>Process 5: 完成转换，请查看显示区！</p>")
		ol_get_obj("ol_rebuild_process").innerHTML += ("<p style='color:#2289DB; font-weight:bold;'>小结:  本次新增词汇"+str_arr.length+"条，另还有不重复的原数据库含词汇"+x+"条</p>")
		
		ol_get_obj("ol_rebuild_result_db").innerHTML = ol_dictionary;
		ol_get_obj("ol_rebuild_result_db").innerHTML += ol_dictionary1;
		
		return ol_dictionary;
	}

	
	
	
	
	
	
	
	
	