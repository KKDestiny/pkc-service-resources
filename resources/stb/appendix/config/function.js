/*਍ ⨀ 䘀椀氀攀㨀 䘀椀氀攀 昀漀爀 欀攀礀ⴀ眀漀爀搀ⴀ猀攀愀爀挀栀 椀渀 倀匀䤀⼀匀䤀ഀഀ
 * Designed by Linxiaozhou਍ ⨀ 䐀愀琀攀㨀 ㈀　㄀㘀⼀　㈀⼀㈀㌀ഀഀ
 */਍ऀഀഀ
	਍ऀ瘀愀爀 刀攀猀甀氀琀匀攀琀 㴀 渀攀眀 䄀爀爀愀礀⠀⤀㬀ഀഀ
	function OL_Insert_Psisi_SearchResultSet(new_array)਍ऀ笀ഀഀ
		if(ResultSet.length>0)਍ऀऀ笀ഀഀ
			var flag = 1;਍ऀऀऀ昀漀爀⠀瘀愀爀 砀㴀　㬀 砀㰀刀攀猀甀氀琀匀攀琀⸀氀攀渀最琀栀㬀 砀⬀⬀⤀ഀഀ
			{਍ऀऀऀऀ椀昀⠀⠀刀攀猀甀氀琀匀攀琀嬀砀崀嬀　崀 㴀㴀 渀攀眀开愀爀爀愀礀嬀　崀⤀ ☀☀ ⠀刀攀猀甀氀琀匀攀琀嬀砀崀嬀㄀崀 㴀㴀 渀攀眀开愀爀爀愀礀嬀㄀崀⤀⤀ഀഀ
				{਍ऀऀऀऀऀ昀氀愀最 㴀 　㬀ഀഀ
				}਍ऀऀऀ紀ഀഀ
			if(1 == flag)਍ऀऀऀ笀ഀഀ
				ResultSet.push(new_array);਍ऀऀऀ紀ഀഀ
		}਍ऀऀ攀氀猀攀ഀഀ
		{਍ऀऀऀ刀攀猀甀氀琀匀攀琀⸀瀀甀猀栀⠀渀攀眀开愀爀爀愀礀⤀㬀ഀഀ
		}਍ऀ紀ഀഀ
਍ऀഀഀ
	function OL_Psisi_Search()਍ऀ笀ഀഀ
		ResultSet.length = 0;਍ऀऀഀഀ
		var input_key = document.getElementById("ol_psisi_keyword").value;਍ऀऀ椀渀瀀甀琀开欀攀礀 㴀 伀䰀开倀甀戀氀椀挀开刀攀瀀氀愀挀攀䄀氀氀⠀椀渀瀀甀琀开欀攀礀Ⰰ ∀开∀Ⰰ ∀ ∀⤀㬀ഀഀ
		਍ऀऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀漀氀开瀀猀椀猀椀开猀攀愀爀挀栀开爀攀猀∀⤀⸀椀渀渀攀爀䠀吀䴀䰀 㴀 ∀ᰀ≤⵽⹎⸀⸀∀㬀ഀഀ
		਍ऀऀ⼀⼀ ᆁ腜উ㍧⨀坎♛䵻b쭟൙ഀ
		if(input_key.length < 3)਍ऀऀ笀ഀഀ
			if(event.keyCode != 13)	//按下Enter键਍ऀऀऀ笀ഀഀ
				document.getElementById("ol_psisi_search_res").innerHTML = "";਍ऀऀऀऀ爀攀琀甀爀渀㬀ഀഀ
			}਍ऀऀ紀ഀഀ
		਍ऀऀ⼀⨀ 切ⱗ쵧憋灧湥鍣⁞⨀⼀ഀഀ
		var db1 = OL_PSISI_KEYWORD;਍ऀऀ昀漀爀⠀瘀愀爀 椀㴀　㬀 椀㰀搀戀㄀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ഀഀ
		{਍ऀऀऀ瘀愀爀 搀戀开欀攀礀　 㴀 搀戀㄀嬀椀崀嬀　崀㬀ഀഀ
			var db_key1 = db1[i][1];਍ऀऀऀ搀戀开欀攀礀　 㴀 伀䰀开倀甀戀氀椀挀开刀攀瀀氀愀挀攀䄀氀氀⠀搀戀开欀攀礀　Ⰰ ∀开∀Ⰰ ∀ ∀⤀㬀ഀഀ
			db_key1 = OL_Public_ReplaceAll(db_key1, "_", " ");਍ऀऀऀ椀昀⠀伀䰀开倀甀戀氀椀挀开䌀栀攀挀欀䬀攀礀圀漀爀搀⠀搀戀开欀攀礀　Ⰰ 椀渀瀀甀琀开欀攀礀⤀⤀ഀഀ
			{਍ऀऀऀऀ伀䰀开䤀渀猀攀爀琀开倀猀椀猀椀开匀攀愀爀挀栀刀攀猀甀氀琀匀攀琀⠀搀戀㄀嬀椀崀⤀㬀ഀഀ
			}਍ऀऀऀ⼀⨀ഀഀ
			else if(OL_Public_CheckKeyWord(db_key1, input_key))਍ऀऀऀ笀ഀഀ
				result_arr.push(db1[i]);਍ऀऀऀ紀ഀഀ
			*/਍ऀऀ紀ഀഀ
		਍ऀऀ⼀⨀ 케傏灛湥鍣⁞⨀⼀ഀഀ
		var db2 = OL_PSISI_Descriptor;਍ऀऀ昀漀爀⠀瘀愀爀 椀㴀　㬀 椀㰀搀戀㈀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ഀഀ
		{਍ऀऀऀ瘀愀爀 搀戀开欀攀礀　 㴀 搀戀㈀嬀椀崀⸀渀愀洀攀开攀渀㬀ഀഀ
			var db_key1 = db2[i].name_ch;਍ऀऀऀ搀戀开欀攀礀　 㴀 伀䰀开倀甀戀氀椀挀开刀攀瀀氀愀挀攀䄀氀氀⠀搀戀开欀攀礀　Ⰰ ∀开∀Ⰰ ∀ ∀⤀㬀ഀഀ
			db_key1 = OL_Public_ReplaceAll(db_key1, "_", " ");਍ऀऀऀഀഀ
			var descriptor_arr = new Array();਍ऀऀऀഀഀ
			if((OL_Public_CheckKeyWord(db_key0, input_key)) || (OL_Public_CheckKeyWord(db_key1, input_key)))਍ऀऀऀ笀ഀഀ
				var additional_info_src = OL_GetDescriptorStructure(OL_GetDescriptorIndex(db2[i].name_en));਍ऀऀऀऀ搀攀猀挀爀椀瀀琀漀爀开愀爀爀 㴀 嬀搀戀㈀嬀椀崀⸀渀愀洀攀开攀渀Ⰰ ∀∀Ⰰऀ∀㰀瀀㸀∀⬀搀戀㈀嬀椀崀⸀渀愀洀攀开挀栀⬀∀㰀⼀瀀㸀㰀瀀㸀∀⬀搀戀㈀嬀椀崀⸀搀攀昀椀渀攀⬀∀㰀⼀瀀㸀∀⬀愀搀搀椀琀椀漀渀愀氀开椀渀昀漀开猀爀挀Ⰰऀ∀촀憋쩧䦑≎Ⰰऀऀ∀∀崀㬀ഀഀ
				OL_Insert_Psisi_SearchResultSet(descriptor_arr);਍ऀऀऀ紀ഀഀ
		}਍ऀऀ⼀⨀ 케傏葛坶땛火湥鍣⁞ഀഀ
		// 打开这部分会导致网页崩溃਍ऀऀ瘀愀爀 搀戀㈀ 㴀 伀䰀开倀匀䤀匀䤀开䐀攀猀挀爀椀瀀琀漀爀㬀ഀഀ
		for(var i=0; i<db2.length; i++)਍ऀऀ笀ഀഀ
			for(var j=0; j<db2[i].structure.length; j++)਍ऀऀऀ笀ഀഀ
				if(""==db2[i].structure[j][1]){continue;}	//不是字段，可能是括号或者判断条件਍ऀऀऀऀഀഀ
				var db_key0 = db2[i].structure[j][0];਍ऀऀऀऀ搀戀开欀攀礀　 㴀 伀䰀开倀甀戀氀椀挀开刀攀瀀氀愀挀攀䄀氀氀⠀搀戀开欀攀礀　Ⰰ ∀开∀Ⰰ ∀ ∀⤀㬀ഀഀ
				var descriptor_name = db2[i].name_ch+"("+db2[i].name_en+")";਍ऀऀऀऀഀഀ
				if(OL_Public_CheckKeyWord(db_key0, input_key))਍ऀऀऀऀ笀ഀഀ
					descriptor_arr = [db2[i].structure[j][0], "",	"<p>"+descriptor_name+"的一个字段。</p><p>"+db2[i].structure[j][3]+"</p>",	"词条释义",		""];਍ऀऀऀऀऀ椀昀⠀爀攀猀甀氀琀开愀爀爀⸀氀攀渀最琀栀㸀　⤀ഀഀ
					{਍ऀऀऀऀऀऀ昀漀爀⠀瘀愀爀 砀㴀　㬀 砀㰀爀攀猀甀氀琀开愀爀爀⸀氀攀渀最琀栀㬀 砀⬀⬀⤀ഀഀ
						{਍ऀऀऀऀऀऀऀ椀昀⠀爀攀猀甀氀琀开愀爀爀嬀砀崀嬀　崀 ℀㴀 搀攀猀挀爀椀瀀琀漀爀开愀爀爀嬀　崀⤀ഀഀ
							{਍ऀऀऀऀऀऀऀऀ爀攀猀甀氀琀开愀爀爀⸀瀀甀猀栀⠀搀攀猀挀爀椀瀀琀漀爀开愀爀爀⤀㬀ഀഀ
							}਍ऀऀऀऀऀऀ紀ഀഀ
					}਍ऀऀऀऀऀ攀氀猀攀ഀഀ
					{਍ऀऀऀऀऀऀ爀攀猀甀氀琀开愀爀爀⸀瀀甀猀栀⠀搀攀猀挀爀椀瀀琀漀爀开愀爀爀⤀㬀ഀഀ
					}਍ऀऀऀऀ紀ഀഀ
			}਍ऀऀ紀⨀⼀ഀഀ
		/* 描述子的字段（含表格）数据库 */਍ऀऀ瘀愀爀 搀戀㈀ 㴀 伀䰀开倀匀䤀匀䤀开䐀攀猀挀爀椀瀀琀漀爀㬀ഀഀ
		for(var i=0; i<db2.length; i++)਍ऀऀ笀ഀഀ
			for(var j=0; j<db2[i].detail.length; j++)਍ऀऀऀ笀ഀഀ
				var db_key0 = db2[i].detail[j][0];਍ऀऀऀऀ搀戀开欀攀礀　 㴀 伀䰀开倀甀戀氀椀挀开刀攀瀀氀愀挀攀䄀氀氀⠀搀戀开欀攀礀　Ⰰ ∀开∀Ⰰ ∀ ∀⤀㬀ഀഀ
				਍ऀऀऀऀ瘀愀爀 搀攀猀挀爀椀瀀琀漀爀开愀爀爀 㴀 渀攀眀 䄀爀爀愀礀⠀⤀㬀ഀഀ
				var descriptor_name = db2[i].name_ch+"("+db2[i].name_en+")";਍ऀऀऀऀ瘀愀爀 搀攀猀挀爀椀瀀琀漀爀开搀攀昀椀渀攀 㴀 ∀∀㬀ഀഀ
				for(var k=0; k<db2[i].structure.length; k++)਍ऀऀऀऀ笀ഀഀ
					if(OL_Public_ReplaceAll(db2[i].structure[k][0], "\t", "")==db2[i].detail[j][0])਍ऀऀऀऀऀ笀ഀഀ
						descriptor_define = db2[i].structure[k][3];਍ऀऀऀऀऀ紀ഀഀ
				}਍ऀऀऀऀഀഀ
				if(OL_Public_CheckKeyWord(db_key0, input_key))਍ऀऀऀऀ笀ഀഀ
					descriptor_arr = [db2[i].detail[j][0], "",	"<p>"+descriptor_name+"的一个字段。</p><p>"+descriptor_define+"</p>"+db2[i].detail[j][1],	"词条释义",		""];਍ऀऀऀऀऀ伀䰀开䤀渀猀攀爀琀开倀猀椀猀椀开匀攀愀爀挀栀刀攀猀甀氀琀匀攀琀⠀搀攀猀挀爀椀瀀琀漀爀开愀爀爀⤀㬀ഀഀ
				}਍ऀऀऀ紀ഀഀ
		}਍ऀऀഀഀ
		਍ऀऀ⼀⨀ 쐀앾ᲈ≤퍽鱾⁧⨀⼀ഀഀ
		var result_show = "<span class='light-text red'>没有搜索到，请减少关键字再试一次...</span>";਍ऀऀ椀昀⠀　 㰀 刀攀猀甀氀琀匀攀琀⸀氀攀渀最琀栀 ☀☀ ∀ ∀℀㴀椀渀瀀甀琀开欀攀礀⤀ഀഀ
		{਍ऀऀऀ爀攀猀甀氀琀开猀栀漀眀 㴀 ✀㰀戀爀㸀㰀琀愀戀氀攀 挀氀愀猀猀㴀∀琀愀戀氀攀 琀愀戀氀攀ⴀ挀漀渀搀攀渀猀攀搀 琀愀戀氀攀ⴀ栀漀瘀攀爀∀㸀✀㬀ഀഀ
			਍ऀऀऀ昀漀爀⠀瘀愀爀 椀㴀　㬀 椀㰀刀攀猀甀氀琀匀攀琀⸀氀攀渀最琀栀㬀 椀⬀⬀⤀ഀഀ
			{਍ऀऀऀऀ瘀愀爀 欀攀礀 㴀 刀攀猀甀氀琀匀攀琀嬀椀崀嬀　崀㬀ഀഀ
				var title = ResultSet[i][1];਍ऀऀऀऀ瘀愀爀 搀攀猀挀 㴀 刀攀猀甀氀琀匀攀琀嬀椀崀嬀㈀崀㬀ഀഀ
				var status = ResultSet[i][3];਍ऀऀऀऀ瘀愀爀 氀椀渀欀 㴀 刀攀猀甀氀琀匀攀琀嬀椀崀嬀㐀崀㬀ഀഀ
				਍ऀऀऀऀ瘀愀爀 琀攀洀瀀 㴀 ∀∀㬀ഀഀ
				if(""!=link && "#"!=link)਍ऀऀऀऀ笀ഀഀ
					temp = "<tr style='font-size:80%;'><td style='width:20%;'><a href='"+OL_PSISI_SEARCH_ROOT+link+"' target='_blank'><span class='bold'>"+title+"</span></a></td><td style='width:60%;' class='light-text text-left'>"+desc+"</td><td style='width:20%;' class='light-text text-left italic'>"+status+"提供</td></tr>";਍ऀऀऀऀ紀ഀഀ
				else਍ऀऀऀऀ笀ഀഀ
					if(""==link)	// 此条不是链接，作为一个资料直接显示，如词条解释਍ऀऀऀऀऀ笀ഀഀ
						temp = "<thead><tr style='font-size:80%; background-color:#ccc;'><td class='bold text-left'>"+key+"</td><td class='text-left italic'>"+desc+"</td><td class='text-left italic'>"+status+"</td></tr></thead>";਍ऀऀऀऀऀ紀ഀഀ
					else	// 该资料缺少链接਍ऀऀऀऀऀ笀ഀഀ
						temp = "<tr style='font-size:80%;'><td style='width:20%;'><span class='bold'>"+title+"</span></td><td style='width:60%;' class='light-text text-left'>"+desc+"</td><td style='width:20%;' class='light-text text-left italic'>"+status+"提供</td></tr>";਍ऀऀऀऀऀ紀ഀഀ
				}਍ऀऀऀऀ爀攀猀甀氀琀开猀栀漀眀 ⬀㴀 琀攀洀瀀㬀ഀഀ
			}਍ऀऀऀഀഀ
			result_show += "</table>";਍ऀऀ紀ഀഀ
		਍ऀऀ椀昀⠀∀∀㴀㴀椀渀瀀甀琀开欀攀礀⤀ഀഀ
		{਍ऀऀऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀漀氀开瀀猀椀猀椀开猀攀愀爀挀栀开爀攀猀∀⤀⸀椀渀渀攀爀䠀吀䴀䰀 㴀 ∀∀㬀ഀഀ
		}਍ऀऀ攀氀猀攀ഀഀ
		{਍ऀऀऀ搀漀挀甀洀攀渀琀⸀最攀琀䔀氀攀洀攀渀琀䈀礀䤀搀⠀∀漀氀开瀀猀椀猀椀开猀攀愀爀挀栀开爀攀猀∀⤀⸀椀渀渀攀爀䠀吀䴀䰀 㴀 爀攀猀甀氀琀开猀栀漀眀㬀ഀഀ
		}਍ऀऀഀഀ
		/* 搜索结果中为符文本显示，每次刷新需要重新设置 */਍ऀऀ␀⠀昀甀渀挀琀椀漀渀 ⠀⤀ 笀ഀഀ
		  $('[data-toggle="popover"]').popover()਍ऀऀ紀⤀ഀഀ
	}਍ऀഀഀ
	਍ऀഀഀ
	