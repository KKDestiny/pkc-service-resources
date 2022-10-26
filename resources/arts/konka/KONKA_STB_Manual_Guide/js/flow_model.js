/* ========================================================================
 * Flow Models List here
 * ======================================================================== */

	var M_STEP = "<div class=\"flowstep\" >\
			<span class=\"flowstepdescrpt\">##STEP_ID##</span>\
			<span class=\"flowpoint\" id=\"##POINT_ID##\" onclick=\"fucosPoint(this.id)\"></span>\
			<span class=\"flowcontent-icon\">\
				<span class=\"flowcontenticonarrow\"></span>\
				<span class=\"flowcontenticon\">\
					<span class=\"glyphicon glyphicon-##ICON##\"></span> \
				</span> \
			</span>\
			<span class=\"flowcontent-area\">\
				<span class=\"flowcontent-info\" title=\"##TITLE_DESC##\" onmouseover=\"hoverPoint(##INDEX##)\">##TITLE##</span>\
			</span>\
			<span class=\"flowsplitline\"></span>\
		</div>";
	
	function hoverPoint(index)
	{
		// console.log(index)
		currIndex = index
		dropFocusPoint()
		var id="#POINT_"+(index);
		$(id).click();
		
		// Show Panel with step-detail
		configPanel();
		$("#step_panel").fadeIn(300);
	}
	
	function fucosPoint(id)
	{
		// console.log(id)
		dropFocusPoint()
		document.getElementById(id).style.background="#c00000";
	}
	
	function dropFocusPoint()
	{
		for(var i=0;i<totalStep+1;i++)
		{
			document.getElementById("POINT_"+(i)).style.background="#37aef2";
		}		
	}
	
	function fucosList(index)
	{
		document.getElementById("flow"+index).setAttribute("class","list-group-item active")
	}
	
	function dropFocusList()
	{
		for(var i=0;i<PROCESS_TYPE_ARR.length;i++)
		{
			document.getElementById("flow"+i).setAttribute("class","list-group-item")
		}		
	}
	
	function returnToTop()
	{
		$('body,html').animate({scrollTop:0},260);
	}
	
	function menuTo(id)
	{
		$body.animate({scrollTop: ($("#"+id).offset().top-25)}, 300);
		return false;
	}
	
	// Generate Preface   ///////////////////////////////////////////////////////////////
	function getNodeById(id, m, hm, hs){	// Input: Content ID, main <h>, Sub <h>
		var elem = document.getElementById(id);
		if(!elem) return false;
		var nodes = elem.getElementsByTagName("*");
		
		var preface = "";
		var num = 0;
		var mNum = 1;
		var hmNum = 1;
		var hsNum = 1;
		
		m= m.toUpperCase();
		hm= hm.toUpperCase();
		hs= hs.toUpperCase();

		for(var i=0; i<nodes.length; i++)
		{
			if(nodes[i].nodeName == m || nodes[i].nodeName == hm || nodes[i].nodeName == hs)    
			{
				var nodetext = nodes[i].innerHTML.replace(/<\/?[^>]+>/g,"");
				nodetext = nodetext.replace(/&nbsp;/ig, "");
				
				var item;
				switch(nodes[i].nodeName)
				{
					case m:    //Main 1
						nodes[i].setAttribute("id", "autoMain" + num);
						mNum +=1;
						item = "<b>&nbsp;&nbsp;<a onclick=menuTo(\""+"autoMain"+num+"\")><b><font color=snow>"+nodetext+"</font></b></a></b><br>";
						break;
					case hm:    //Main 
						nodes[i].setAttribute("id", "autoMaintitle" + num);
						hmNum +=1;
						item = "<b>&nbsp;&nbsp;<a onclick=menuTo(\""+"autoMaintitle"+num+"\")><b><font color=snow>"+nodetext+"</font></b></a></b><br>";
						break;
					case hs:    //Sub
						nodes[i].setAttribute("id", "autoSubtitle" + num);
						hsNum += 1;
						if(2==hsNum) {item="";break;}
						item = "<span>&nbsp;&nbsp;&nbsp;&nbsp;|- <a onclick=menuTo(\""+"autoSubtitle"+num+"\")><font color=#D0D0D0>"+nodetext+"</font></a></span><br>";					
						break;
				}
				num += 1;
				if(1==num){
					preface = item;
				}else{
					preface = preface+item;
				}
			}
		}
		
		return preface;
	}
