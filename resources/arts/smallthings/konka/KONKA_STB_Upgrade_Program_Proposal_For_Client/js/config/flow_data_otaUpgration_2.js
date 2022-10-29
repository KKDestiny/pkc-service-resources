/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var UPRANGE_LAST_UPDATE = "Nov. 28<sup>th</sup>, 2014";
	
	var UPRANGE_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;STB Upgrade Program Proposal <small>KONKA 2014</small>";
	
	
	var UPRANGE_TITLE_DESC = "<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-barcode\"></span>&nbsp;&nbsp;STB Upgrade Range</h4><hr>\
		<p>KONKA STB with the following information shall be upgraded:</p>\
		<p>Hardware version: <span class='edit'>"+HV_VERSION+"</span>, Software Version: <span class='edit'>"+SW_VERSION_CURR+"</span>, Last Update: <span class='edit'>"+SW_UPDATE_TIME_CURR+"</span></p>\
		<p>The serial number ranges from <span class='edit'>"+SERIAL_PART_BEGIN+"</span> - <span class='edit'>"+SERIAL_PART_END+"</span></p>\
		<p>Notice</p>\
		<ul>\
			<li>The range from "+SERIAL_PART_BEGIN+"- "+SERIAL_PART_END+" is the last 7 number for the STB ID.</li>\
			<li><font color=#c00000><b>E.g. STB ID: "+SERIAL_WHOLE_BEGIN+"，the serial number is："+SERIAL_PART_BEGIN+"</b></font></li>\
		</ul>\
		<p>When finish upgrading, the information of KONKA STB will be:</p>\
		<ul>\
			<li>Hardware version: <span class='edit'>"+HV_VERSION+"</span> (Not Change)</li>\
			<li>Software Version: <span class='edit'>"+SW_VERSION_NEW+"</span></li>\
			<li>Last Update: <span class='edit'>"+SW_UPDATE_TIME_NEW+"</span></li>\
		</ul>\
		<hr>\
		<div class=\"row\">\
		  <div class=\"col-xs-6 col-md-3\">\
			<a href=\"img/currinfo.png\" target=\"_blank\" class=\"thumbnail\">\
			  <img src=\"img/currinfo.png\" alt=\"...\">\
			</a>\
			<p class=\"text-center\">Current STB Information</p>\
		  </div>\
		</div>\
		";

