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
	