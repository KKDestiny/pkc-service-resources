/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var STEPS_LAST_UPDATE = "Nov. 28<sup>th</sup>, 2014";
	
	var STEPS_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;STB Upgrade Program Proposal <small>KONKA 2014</small>";
	
	
	var STEPS_TITLE_DESC = "<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Upgrade Steps</h4><hr>\
		<h4><font color=#c00000>1.Remind the users</font></h4>\
		<p>It's better to remind the customers to know their STB-software will be upgraded by sending CA OSD message through the head-end one week in advance. </p>\
		<p>The message content can be as the following:</p>\
			<blockquote>\
			  <small><samp>“Due to business upgrades, part of digital TV set-top boxes will be upgraded recently. Do not power off during the upgrade process!”</samp></small>\
			</blockquote>\
			\
			\
		<hr>\
		<h4><font color=#c00000>2.Upgrade Test</font></h4>\
		<p>Test the upgrade stream file before to do formal upgrade</p>\
		<p>Add <span class='edit'>"+TS_FILE_NAME+"</span> to the server, the bandwidth rates is suggested to be about <span class='edit'>"+BAND_WIDTH+"</span>.</p>\
		<p>You can test 2 STBs first by doing this: Setting upgrade range (for example: 2504601 and 2504602) and configuring the serial number of the NIT descriptor. For example, 435 MHz (can be changed in NIT descriptor) is configured as below.</p>\
		<p>Upgrade descriptor can be set as follow:</p>\
			<blockquote>\
			  <small><samp>A127036F5A0B0297C1E0038122FFFFFFFFBB8114758611534700010020<span class='edit'>00"+SERIAL_PART_BEGIN.toString(16)+"</span><span class='edit1'>00"+(SERIAL_PART_BEGIN+1).toString(16)+"</span>000000C8</samp></small>\
			  <small><a style='cursor:pointer' onclick=\"changeFlow(7)\">How to configure NIT Descriptor?</a></small>\
			</blockquote>\
		<p>The serial number:</p>\
		<ul>\
			<li>STB1: <span class='edit'>"+SERIAL_PART_BEGIN.toString(16)+"</span> (hexadecimal format): <span class='edit'>"+SERIAL_PART_BEGIN+"</span> (decimal format)</li>\
			<li>STB2: <span class='edit1'>"+(SERIAL_PART_BEGIN+1).toString(16)+"</span> (hexadecimal format): <span class='edit1'>"+(SERIAL_PART_BEGIN+1)+"</span> (decimal format)</li>\
		</ul>\
		<p>The descriptor is hexadecimal format, and the message from the STB OSD is decimal format. You can use the calculators to do such a conversion.</p>\
		<p>If everything goes well, you can continue to do step 3.</p>\
		<form class=\"form-inline\" role=\"form\">\
		  <div class=\"form-group\">\
			<label class=\"sr-only\">Email</label>\
			<p class=\"form-control-static\">Tools For you: </p>\
		  </div>\
		  <div class=\"form-group\">\
			<label for=\"text\" class=\"sr-only\">decimal_input</label>\
			<input type=\"text\" class=\"form-control input-sm\" id=\"decimal_input0\" placeholder=\"Decimal Farmat\">\
		  </div>\
		  <a class='btn btn-xs btn-primary' onclick=\"convertDec2Hex('decimal_input0')\">Cal</a>\
		  <div class=\"form-group\">\
			<p class=\"form-control-static\"><span id='decimal_input0_converted' class='edit'></span></p>\
		  </div>\
		</form>\
			\
			\
		<hr>\
		<h4><font color=#c00000>3.Upgrade small scale</font></h4>\
		<p>Choose 200 STBs to do a small scale upgrade:</p>\
		<ul>\
			<li>Serial number range: <span class='edit'>"+SERIAL_PART_BEGIN+"</span> ~ <span class='edit'>"+(SERIAL_PART_BEGIN+200)+"</span></li>\
		</ul>\
		<p>Configure the serial number of the NIT descriptor. Upgrade descriptor can be set as follow:</p>\
			<blockquote>\
			  <small><samp>A127036F5A0B0297C1E0038122FFFFFFFFBB8114758611534700010020<span class='edit'>00"+SERIAL_PART_BEGIN.toString(16)+"</span><span class='edit1'>00"+(SERIAL_PART_BEGIN+200).toString(16)+"</span>000000C8</samp></small>\
			  <small><a style='cursor:pointer' onclick=\"changeFlow(7)\">How to configure NIT Descriptor?</a></small>\
			</blockquote>\
		<p>The serial number:</p>\
		<ul>\
			<li>STB1: <span class='edit'>"+SERIAL_PART_BEGIN.toString(16)+"</span> (hexadecimal format): <span class='edit'>"+SERIAL_PART_BEGIN+"</span> (decimal format)</li>\
			<li>STB2: <span class='edit1'>"+(SERIAL_PART_BEGIN+200).toString(16)+"</span> (hexadecimal format): <span class='edit1'>"+(SERIAL_PART_BEGIN+200)+"</span> (decimal format)</li>\
		</ul>\
		<p>With <span class='edit'>"+MAIN_FREQ+" MHz</span> (can be changed in NIT descriptor), and the stream PID: <span class='edit'>"+STREAM_PID+"</span>(<span class='edit'>0x"+(STREAM_PID.toString(16))+"</span>), setting the serial number of the upgrade descriptor <span class='edit'>"+SERIAL_PART_BEGIN+"</span> ~ <span class='edit'>"+(SERIAL_PART_BEGIN+200)+"</span>.\
		The STBs are under this range can be reset to upgrade. Three days later, if everything goes well, you can continue to step 4.</p>\
		<form class=\"form-inline\" role=\"form\">\
		  <div class=\"form-group\">\
			<label class=\"sr-only\">Email</label>\
			<p class=\"form-control-static\">Tools For you: </p>\
		  </div>\
		  <div class=\"form-group\">\
			<label for=\"text\" class=\"sr-only\">decimal_input</label>\
			<input type=\"text\" class=\"form-control input-sm\" id=\"decimal_input1\" placeholder=\"Decimal Farmat\">\
		  </div>\
		  <a class='btn btn-xs btn-primary' onclick=\"convertDec2Hex('decimal_input1')\">Cal</a>\
		  <div class=\"form-group\">\
			<p class=\"form-control-static\"><span id='decimal_input1_converted' class='edit'></span></p>\
		  </div>\
		</form>\
			\
			\
		<hr>\
		<h4><font color=#c00000>4.Upgrade the whole scale</font></h4>\
		<p>This time you can begin the whole scale of STBs' upgrade</p>\
		<ul>\
			<li>Serial number range: 00000000 ~ FFFFFFFF</li>\
		</ul>\
		<p>Configure the serial number of the NIT descriptor. Upgrade descriptor can be set as follow:</p>\
			<blockquote>\
			  <small><samp>A127036F5A0B0297C1E0038122FFFFFFFFBB8114758611534700010020<span class='edit'>00000000</span><span class='edit1'>FFFFFFFF</span>000000C8</samp></small>\
			  <small><a style='cursor:pointer' onclick=\"changeFlow(7)\">How to configure NIT Descriptor?</a></small>\
			</blockquote>\
		<p>The serial number:</p>\
		<ul>\
			<li>STB1: <span class='edit'>00000000</span> (hexadecimal format)</li>\
			<li>STB2: <span class='edit1'>FFFFFFFF</span> (hexadecimal format)</li>\
		</ul>\
		<p>With <span class='edit'>"+MAIN_FREQ+" MHz</span> (can be changed in NIT descriptor), and the stream PID: <span class='edit'>"+STREAM_PID+"</span>(<span class='edit'>0x"+(STREAM_PID.toString(16))+"</span>), setting the serial number of the upgrade descriptor 00000000 ~ FFFFFFFF</span>.\
		The STBs are under this range can be reset to upgrade. </p>\
			\
			\
		<hr>\
		<h4><font color=#c00000>Notes: Do not power off when upgrading!</font></h4>\
		<p>The STB information should be as follow after upgrading correctly [checking path: Main Menu->Extra->System Information]：</p>\
		<ul>\
			<li>Software version: <span class='edit'>"+SW_VERSION_NEW+"</span></li>\
			<li> Hardware version: <span class='edit'>HV"+HV_VERSION+"</span></li>\
		</ul>\
		";

