/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var DETAIL_LAST_UPDATE = "Dec. 06<sup>th</sup>, 2014";
	
	var DETAIL_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;KONKA STB Manual Guide <small>KONKA 2014</small>";
	
	var FRONT_PANEL = "";
	var REAL_PANEL = "";
	
	/* Cable STB */
	var FRONT_PANEL_CABLE = "\
		<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Product Details</h4><hr>\
		<h4><span class='title1'>0.Front Panel</span></h4>\
		<p>Introduction to Front Panel.</p>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+FRONT_PANEL_INTRODUCT+"\" target=\"_blank\"><img src=\""+FRONT_PANEL_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<hr>\
		<table class=\"table table-bordered table-hover text-center\">\
		  <thead><tr style=\"background-color:#689beb\"><td width='20%'><b><font color=snow>Buttons</font></b></td><td width='80%'><b><font color=snow>Functions</font></b></td></tr></font></thead>\
		  <tbody>\
			<tr><td>(1) "+FRONT_STANDBY[0]+"</td><td>"+FRONT_STANDBY[1]+"</td></tr>\
			<tr><td>(2/3) "+FRONT_CH_UP_DOWN[0]+"</td><td>"+FRONT_CH_UP_DOWN[1]+"</td></tr>\
			<tr><td>(4) "+FRONT_LED_INDICATOR[0]+"</td><td>"+FRONT_LED_INDICATOR[1]+"</td></tr>\
			<tr><td>(5) "+FRONT_CA_CARD_SLOT[0]+"</td><td>"+FRONT_CA_CARD_SLOT[1]+"</td></tr>\
		  </tbody>\
		</table>\
		";
		
	var REAL_PANEL_CABLE = "\
	<h4><span class='title1'>1.Real Panel</span></h4>\
		<p>Introduction to Real Panel.</p>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+REAL_PANEL_INTRODUCT+"\" target=\"_blank\"><img src=\""+REAL_PANEL_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<hr>\
		<table class=\"table table-bordered table-hover text-center\">\
		  <thead><tr style=\"background-color:#689beb\"><td width='20%'><b><font color=snow>Interfaces</font></b></td><td width='80%'><b><font color=snow>Introduction</font></b></td></tr></thead>\
		  <tbody>\
			<tr><td>(1) "+IO_SIGNAL_IN[0]+"</td><td>"+IO_SIGNAL_IN[1]+"</td></tr>\
			<tr><td>(2) "+IO_LOOP_OUT[0]+"</td><td>"+IO_LOOP_OUT[1]+"</td></tr>\
			<tr><td>(3) "+IO_USB[0]+"</td><td>"+IO_USB[1]+"</td></tr>\
			<tr><td>(4) "+IO_HDMI[0]+"</td><td>"+IO_HDMI[1]+"</td></tr>\
			<tr><td>(5) "+IO_VIDEO[0]+"</td><td>"+IO_VIDEO[1]+"</td></tr>\
			<tr><td>(6) "+IO_AUDIO_L[0]+"</td><td>"+IO_AUDIO_L[1]+"</td></tr>\
			<tr><td>(7) "+IO_AUDIO_R[0]+"</td><td>"+IO_AUDIO_R[1]+"</td></tr>\
			<tr><td>(8) "+IO_DC12V_1A[0]+"</td><td>"+IO_DC12V_1A[1]+"</td></tr>\
		  </tbody>\
		</table>\
		";
	
	
	/* Terrestrial STB */
	var FRONT_PANEL_TERRESTRIAL = "\
		<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Product Details</h4><hr>\
		<h4><span class='title1'>0.Front Panel</span></h4>\
		<p>Introduction to Front Panel.</p>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+FRONT_PANEL_INTRODUCT+"\" target=\"_blank\"><img src=\""+FRONT_PANEL_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<hr>\
		<table class=\"table table-bordered table-hover text-center\">\
		  <thead><tr style=\"background-color:#689beb\"><td width='20%'><b><font color=snow>Buttons</font></b></td><td width='80%'><b><font color=snow>Functions</font></b></td></tr></font></thead>\
		  <tbody>\
			<tr><td>(1/2) "+FRONT_CH_UP_DOWN[0]+"</td><td>"+FRONT_CH_UP_DOWN[1]+"</td></tr>\
			<tr><td>(3/4) "+FRONT_VOL_UP_DOWN[0]+"</td><td>"+FRONT_VOL_UP_DOWN[1]+"</td></tr>\
			<tr><td>(5) "+FRONT_ENTER[0]+"</td><td>"+FRONT_ENTER[1]+"</td></tr>\
			<tr><td>(6) "+FRONT_EXIT[0]+"</td><td>"+FRONT_EXIT[1]+"</td></tr>\
			<tr><td>(7) "+FRONT_MENU[0]+"</td><td>"+FRONT_MENU[1]+"</td></tr>\
			<tr><td>(8) "+FRONT_POWER[0]+"</td><td>"+FRONT_POWER[1]+"</td></tr>\
			<tr><td>(9) "+FRONT_CA_CARD_SLOT[0]+"</td><td>"+FRONT_CA_CARD_SLOT[1]+"</td></tr>\
		  </tbody>\
		</table>\
		";
	var REAL_PANEL_TERRESTRIAL = "\
	<h4><span class='title1'>1.Real Panel</span></h4>\
		<p>Introduction to Real Panel.</p>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+REAL_PANEL_INTRODUCT+"\" target=\"_blank\"><img src=\""+REAL_PANEL_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<hr>\
		<table class=\"table table-bordered table-hover text-center\">\
		  <thead><tr style=\"background-color:#689beb\"><td width='20%'><b><font color=snow>Interfaces</font></b></td><td width='80%'><b><font color=snow>Introduction</font></b></td></tr></thead>\
		  <tbody>\
			<tr><td>(1) "+IO_SIGNAL_IN[0]+"</td><td>"+IO_SIGNAL_IN[1]+"</td></tr>\
			<tr><td>(2) "+IO_LOOP_OUT[0]+"</td><td>"+IO_LOOP_OUT[1]+"</td></tr>\
			<tr><td>(3) "+IO_USB[0]+"</td><td>"+IO_USB[1]+"</td></tr>\
			<tr><td>(4) "+IO_A_R[0]+"</td><td>"+IO_A_R[1]+"</td></tr>\
			<tr><td>(5) "+IO_CVBS[0]+"</td><td>"+IO_CVBS[1]+"</td></tr>\
			<tr><td>(6) "+IO_A_L[0]+"</td><td>"+IO_A_L[1]+"</td></tr>\
			<tr><td>(7) "+IO_HDMI[0]+"</td><td>"+IO_HDMI[1]+"</td></tr>\
			<tr><td>(8) "+IO_DC12V_1A[0]+"</td><td>"+IO_DC12V_1A[1]+"</td></tr>\
		  </tbody>\
		</table>\
		";
	
	
	/* Satellite STB */
	var FRONT_PANEL_SATELLITE = "\
		<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Product Details</h4><hr>\
		<h4><span class='title1'>0.Front Panel</span></h4>\
		<p>Introduction to Front Panel.</p>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+FRONT_PANEL_INTRODUCT+"\" target=\"_blank\"><img src=\""+FRONT_PANEL_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<hr>\
		<table class=\"table table-bordered table-hover text-center\">\
		  <thead><tr style=\"background-color:#689beb\"><td width='20%'><b><font color=snow>Buttons</font></b></td><td width='80%'><b><font color=snow>Functions</font></b></td></tr></font></thead>\
		  <tbody>\
			<tr><td>(1) "+FRONT_CH_UP_DOWN[0]+"</td><td>"+FRONT_CH_UP_DOWN[1]+"</td></tr>\
			<tr><td>(2) "+FRONT_STANDBY[0]+"</td><td>"+FRONT_STANDBY[1]+"</td></tr>\
			<tr><td>(3) "+FRONT_LED_INDICATOR[0]+"</td><td>"+FRONT_LED_INDICATOR[1]+"</td></tr>\
			<tr><td>(4) "+FRONT_CA_CARD_SLOT[0]+"</td><td>"+FRONT_CA_CARD_SLOT[1]+"</td></tr>\
		  </tbody>\
		</table>\
		";
	var REAL_PANEL_SATELLITE = "\
	<h4><span class='title1'>1.Real Panel</span></h4>\
		<p>Introduction to Real Panel.</p>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+REAL_PANEL_INTRODUCT+"\" target=\"_blank\"><img src=\""+REAL_PANEL_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<hr>\
		<table class=\"table table-bordered table-hover text-center\">\
		  <thead><tr style=\"background-color:#689beb\"><td width='20%'><b><font color=snow>Interfaces</font></b></td><td width='80%'><b><font color=snow>Introduction</font></b></td></tr></thead>\
		  <tbody>\
			<tr><td>(1) "+IO_AUDIO_L[0]+"</td><td>"+IO_AUDIO_L[1]+"</td></tr>\
			<tr><td>(2) "+IO_AUDIO_R[0]+"</td><td>"+IO_AUDIO_R[1]+"</td></tr>\
			<tr><td>(3) "+IO_SIGNAL_IN[0]+"</td><td>"+IO_SIGNAL_IN[1]+"</td></tr>\
			<tr><td>(4) "+IO_LOOP_OUT[0]+"</td><td>"+IO_LOOP_OUT[1]+"</td></tr>\
			<tr><td>(5) "+IO_DC12V_1_5A[0]+"</td><td>"+IO_DC12V_1_5A[1]+"</td></tr>\
			<tr><td>(6) "+IO_USB[0]+"</td><td>"+IO_USB[1]+"</td></tr>\
			<tr><td>(7) "+IO_VIDEO[0]+"</td><td>"+IO_VIDEO[1]+"</td></tr>\
			<tr><td>(8) "+IO_HDMI[0]+"</td><td>"+IO_HDMI[1]+"</td></tr>\
		  </tbody>\
		</table>\
		";
	
	
	if("cable"==instal_type)
	{
		FRONT_PANEL = FRONT_PANEL_CABLE;
		REAL_PANEL = REAL_PANEL_CABLE;
	}
	else if("terrestrial"==instal_type)
	{
		FRONT_PANEL = FRONT_PANEL_TERRESTRIAL;
		REAL_PANEL = REAL_PANEL_TERRESTRIAL;
	}
	else if("satellite"==instal_type)
	{
		FRONT_PANEL = FRONT_PANEL_SATELLITE;
		REAL_PANEL = REAL_PANEL_SATELLITE;
	}
	
	var DETAIL_TITLE_DESC = "\
		"+FRONT_PANEL+"<hr>\
		"+REAL_PANEL+"\
		<hr>\
		<h4><span class='title1'>2.Remote Control</span></h4>\
		<p>Introduction to Remote Control.</p>\
		<div class=\"row\">\
			<div class=\"col-md-3\">\
				<div class=\"text-center\"><a class=\"thumbnail\" href=\""+REMOTE_CONTROL+"\" target=\"_blank\"><img src=\""+REMOTE_CONTROL+"\" alt=\"STB Front Panel\"></a></div>\
			</div>\
			<div class=\"col-md-9\">\
				<table class=\"table table-bordered table-hover table-condensed text-center\">\
				  <thead><tr style=\"background-color:#689beb\"><td width='30%'><b><font color=snow>Buttons</font></b></td><td width='70%'><b><font color=snow>Introduction</font></b></td></tr></thead>\
				  <tbody>\
					<tr><td><b>"+BTN_POWER+"</b></td><td>To turn on/off (standby)</td></tr>\
					<tr><td><b>"+BTN_MUTE+"</b></td><td>To temporarily cut off the sound</td></tr>\
					<tr><td><b>0 – 9</b></td><td>Use to select the channel or input the numeric</td></tr>\
					<tr><td><b>"+BTN_RECALL+"</b></td><td>To play previous service</td></tr>\
					<tr><td><b>"+BTN_MENU+"</b></td><td>To display the main menu on the screen or return to the previous menu</td></tr>\
					<tr><td><b>"+BTN_EXIT+"</b></td><td>To exit the menu or the screen</td></tr>\
					<tr><td><b>"+BTN_OK+"</b></td><td>To confirm the menu you choose</td></tr>\
					<tr><td><b>PAGE "+BTN_UP_DOWN+"</b></td><td>Turn page forward/backward</td></tr>\
					<tr><td><b>VOL "+BTN_UP_DOWN+"</b></td><td>To increase or decrease volume levels</td></tr>\
					<tr><td><b>"+BTN_UP_DOWN+"</b></td><td>change channels or items on the menu</td></tr>\
					<tr><td><b>"+BTN_LEFT_RIGHT+"</b></td><td>To increase or decrease volume levels</td></tr>\
					<tr><td><b>"+BTN_EPG+"</b></td><td>Into the TV/RADIO program guide</td></tr>\
					<tr><td><b>"+BTN_FAV+"</b></td><td>Go to favorite channels list</td></tr>\
					<tr><td><b>"+BTN_INFO+"</b></td><td>show the program information</td></tr>\
					<tr><td><b>"+BTN_AUDIO+"</b></td><td>Select Audio Language and Track</td></tr>\
					<tr><td><b>"+BTN_SUB+"</b></td><td>Select a subtitle to show</td></tr>\
					<tr><td><b>"+BTN_TXT+"</b></td><td>Select a teletext to show</td></tr>\
					<tr><td><b>"+BTN_PAUSE+"</b></td><td>Start Time-shift or temporarily pause video</td></tr>\
					<tr><td><b>"+BTN_TV_RADIO+"</b></td><td>To switch between TV program and RADIO</td></tr>\
					<tr><td><b>"+BTN_PLAY+"</b></td><td>To play the media files</td></tr>\
					<tr><td><b>"+BTN_REC+"</b></td><td>Start record</td></tr>\
					<tr><td><b>"+BTN_STOP+"</b></td><td>Stop record or Time-shift</td></tr>\
					<tr><td><b>"+BTN_APPL+"</b></td><td>Go to the PVR Media menu</td></tr>\
					<tr><td><b>"+BTN_FF+"</b></td><td>Fast Forward</td></tr>\
					<tr><td><b>Other</b></td><td>Reservation</td></tr>\
				  </tbody>\
				</table>\
			</div>\
		</div>\
		";
	
