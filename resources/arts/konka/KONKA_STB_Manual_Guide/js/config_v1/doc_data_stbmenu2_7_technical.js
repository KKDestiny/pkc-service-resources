/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var TECH_LAST_UPDATE = "Dec. 06<sup>th</sup>, 2014";
	
	var TECH_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;KONKA STB Manual Guide <small>KONKA 2014</small>";
	
	
	var TECH_TITLE_DESC = "\
		<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp;Technical Specifications</h4><hr>\
		\
		<div class='col-md-6'>\
			<table class=\"table table-bordered table-hover table-condensed\">\
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>SYSTEM</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='40%'>CPU/Decoder</td><td width='60%'>"+CUP+"</td></tr>\
				<tr><td class=\"text-center\">CPU Speed</td><td>"+CPU_SPEED+"</td></tr>\
				<tr><td class=\"text-center\">Flash Memory</td><td>"+FLASH_MEMORY+"</td></tr>\
				<tr><td class=\"text-center\">SDRAM</td><td>"+SDRAM+"</td></tr>\
				<tr><td class=\"text-center\">EEPROM</td><td>"+EEPROM+"</td></tr>\
			  </tbody>\
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>TUNER & DEMODULATOR</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='40%'>Input Connector</td><td width='60%'>"+INPUT_CONNECTOR+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>LoopOut Connector</td><td width='60%'>"+LOOPOUT_CONNECTOR+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>Input Frequency range</td><td width='60%'>"+INPUT_FREQ_RANGE+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>Input Impedance</td><td width='60%'>"+INPUT_IMPENDANCY+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>Modulation</td><td width='60%'>"+MODULATION+"</td></tr>\
			  </tbody>\
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>FRONT PANEL</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='40%'>IR Receiver</td><td width='60%'>"+IR_RECEIVER+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>Control Buttons</td><td width='60%'>"+CONTROL_BUTTONS+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>LED</td><td width='60%'>"+LED+"</td></tr>\
			  </tbody>\
			  \
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>CONDITIONAL ACCESS INTERFACE</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='40%'>Smart Card</td><td width='60%'>"+SMART_CARD+"</td></tr>\
			  </tbody>\
			  \
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>PHYSICAL DIMENSION</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='40%'>Size (W×D×H)</td><td width='60%'>"+SIZE_W_D_H+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>Weight (net)</td><td width='60%'>"+WEIGHT_NET+"</td></tr>\
			  </tbody>\
			  \
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>AMBIENT</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='40%'>Operating Temperature</td><td width='60%'>"+OPERATINGTEMP+"</td></tr>\
				<tr><td class=\"text-center\" width='40%'>Storage Temperature</td><td width='60%'>"+STORAGETEMP+"</td></tr>\
			  </tbody>\
			  \
			</table>\
		</div>\
		\
		\
		\
		<div class='col-md-6'>\
			<table class=\"table table-bordered table-hover table-condensed\">\
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>REAR PANEL</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='60%'>RCA Output</td><td width='40%'>"+RCA_OUTPUT+"</td></tr>\
				<tr><td class=\"text-center\">USB</td><td>"+USB_VERSION+"</td></tr>\
				<tr><td class=\"text-center\">HDMI</td><td>"+HDMI_VERSION+"</td></tr>\
				<tr><td class=\"text-center\">RF Output</td><td>"+RF_OUTPUT+"</td></tr>\
			  </tbody>\
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>MPEG TRANSPORT STREAM & A/V DECODING</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='50%'>Video Decoding & Profile Level</td><td width='50%'>"+VIDEO_LEVEL+"</td></tr>\
				<tr><td class=\"text-center\">Video Aspect Ratio</td><td>"+VIDEO_APECT+"</td></tr>\
				<tr><td class=\"text-center\">Video Resolution</td><td>"+VIDEO_RESOLUTION+"</td></tr>\
				<tr><td class=\"text-center\">Audio Decoding</td><td>"+AUDIO_DECODING+"</td></tr>\
				<tr><td class=\"text-center\">Audio Mode</td><td>"+AUDIO_MODE+"</td></tr>\
			  </tbody>\
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>POWER SUPPLY</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\" width='50%'>Input Voltage</td><td width='50%'>"+INPUT_VOLTAGE+"</td></tr>\
				<tr><td class=\"text-center\">Power consumption</td><td>"+POWER_CONSUMPT+"</td></tr>\
				<tr><td class=\"text-center\">Stand-by consumption</td><td>"+STANDBY_CONSUMPT+"</td></tr>\
				<tr><td class=\"text-center\">Type</td><td>"+POWER_TYPE+"</td></tr>\
			  </tbody>\
			  \
			  <thead class=\"text-left\">\
				<tr style=\"background-color:#689beb\"><td colspan='2'><h4 style='margin-top: 1px;  margin-bottom: 1px;'><font color=snow><span class=\"glyphicon glyphicon-link\"></span> <b>ACCESSORIES</b></font></h4></td></tr>\
			  </thead>\
			  <tbody>\
				<tr><td class=\"text-center\">Remote Control Unit</td><td width='50%'>"+REMOTE_CONTROL+"/td></tr>\
				<tr><td class=\"text-center\">A/V cable</td><td>"+AV_CABLE+"</td></tr>\
				<tr><td class=\"text-center\">User manual</td><td>"+USER_MANUAL+"</td></tr>\
			  </tbody>\
			  \
			</table>\
		</div>\
		\
		";


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		