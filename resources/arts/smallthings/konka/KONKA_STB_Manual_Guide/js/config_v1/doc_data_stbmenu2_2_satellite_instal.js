/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var INSTAL_SATELLITE_LAST_UPDATE = "Dec. 06<sup>th</sup>, 2014";
	
	var INSTAL_SATELLITE_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;KONKA STB Manual Guide <small>KONKA 2014</small>";
	
	var local_remarks = "";
	if(SHOW_OTHER_TYPE_LINK)	 local_remarks= "<p><b>&nbsp;&nbsp;&nbsp;&nbsp;<small><em>Remarks: This connection is based on "+PROJECT_NAME+" for "+MARKET+" Project.</em></small></b></p>";
	
	var INSTAL_SATELLITE_TITLE_DESC = "\
		<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp;&nbsp;Installation Guide For Satellite STB</h4><hr>\
		\
		<h2><span class='title1'>KONKA Satellite STB Connection</span></h2>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+SATELLITE_CONNECTION_INTRODUCT+"\" target=\"_blank\"><img src=\""+SATELLITE_CONNECTION_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;1.Connect the signal line to the STB via the port of CABLE IN.</b></p>\
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;2.Connect STB to a TV set. There are 2 interfaces for choice.</b><br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>AV</b>&nbsp;&nbsp;&nbsp;&nbsp;Use an AV cable (Video Jack) to connect the ports of (CVBS + A-L + A-R).<br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>HDMI</b>&nbsp;&nbsp;&nbsp;&nbsp;Use a HDMI cable to connect the port of HDMI.</p>\
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;3.Turn on the power and search channels, for watching TV programs</b>\
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;4.Connect STB to a HI-Fi System (Optional)</b><br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connect a RCA stereo cable from AUDIO L/R to your Hi-Fi System</p>\
		<p><b>&nbsp;&nbsp;&nbsp;&nbsp;5.Loop Through(Optional)</b><br>\
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If another STB need to use the same LNB, please connect the port of LNB IN on the second STB to the port of LOOP OUT, via the coaxial cable</p>\
		"+local_remarks+"\
		<hr>\
		\
		<h2><span class='title1'>KONKA Satellite STB Scanning</span></h2>\
		<p>There are 2 ways to search the channels. If the Parental Lock is ON, PIN is need. Default password is \"0000\".</p>\
		<p>Before scan satellite, please make sure you have connect LNB IN to Signal cable. The other node of this signal cable should finally connect to a dish which can collect signal from one satellite.</p>\
		\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_2+"\" target=\"_blank\"><img src=\""+SATELLITE_2+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_1+"\" target=\"_blank\"><img src=\""+SATELLITE_1+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<br>&nbsp;<hr>\
		\
		<h3><span class='title1'>1 Manual Installation</span></h3>\
		<p>We offer some preset satellites here. Since you need to install your dish first, you should make sure the satellite's information that you're going to install.</p>\
		<hr>\
		<h4><span class='title1'>1.1 Satellite List Operation</span></h4>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_3+"\" target=\"_blank\"><img src=\""+SATELLITE_3+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_4+"\" target=\"_blank\"><img src=\""+SATELLITE_4+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<p>Switch to Manual Installation Menu, you can see a satellite-list on the left side, and you can find some information of focused satellite on the right panel. Check it first and if the configure is satisfied, press Red button (scan) to start scanning the whole TP list in the satellite you focused. Besides, you can press OK button to select multiple satellites. Selected satellites can be found a \"√\" on the right-side.<p>\
        \
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_5+"\" target=\"_blank\"><img src=\""+SATELLITE_5+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_6+"\" target=\"_blank\"><img src=\""+SATELLITE_6+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<p>If the configuration is not satisfied, press Green button (Edit) to edit focused satellite. You can edit LNB, DisEqc, Longitude, 22K Switch and LNB Power. Generally, LNB Power should switch to \"ON\"! You can check the signal strength and quality here according to the progress-bar on the bottom.<p>\
		<p>Press Green button to rename this satellite and press Yellow can go to Motor Menu.<p>\
        <hr>\
		<h4><span class='title1'>1.2 Motor(Optional)</span></h4>\
		<p>If you have only one dish, you can use motor function to watch more services in different satellite. The STB can control the Motor to rotate to the direction you've set. These directions aim to different satellites so that you can watch services in multiple satellites without moving dish.<p>\
		 \
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_7+"\" target=\"_blank\"><img src=\""+SATELLITE_7+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_8+"\" target=\"_blank\"><img src=\""+SATELLITE_8+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<p>Please note that, you need to buy a motor by yourself first before you use motor function. Then connect the port(LNB IN) in the STB to that in the Motor, and connect the other port in Motor to the LNB in the dish. After that, joint the motor with the dish, and fix them where the dish can receive satellite without any barrier.<p>\
		<p>To begin using motor, please choose a satellite(A) that you want to set direction in the satellite-list menu. Then switch to edit menu, pressing Yellow button and choose DisEqc 1.2 in Item \"Motor Type\". Then you can use motor.<p>\
		<p>You can control motor rotate to west, east or stop in Item Move Steps. You can set moving step-size in Item Step Size, including continue, certain steps and certain seconds. Continue means the motor will continue rotating until get signal or reach limit. Item Position is used to store different directions of satellites. The last item is DisEqc Command, which is to control the Motor.  Press OK button to make the command selected efficient. Commands are listed as followings:<p>\
		<p><span class='title1'>Save Position</span>: save the position of motor(the direction of satellite actually). You should change Item Position or new position will override previous one.<p>\
		<p><span class='title1'>(Re-)Calculate</span>: If you move motor by accident after set all positions, you can use this command to adjust all positions within one command! For example, you change the motor at 10 degrees, and by this command, all positions can be automatically change 10 degrees.<p>\
		<p><span class='title1'>Disable Limit</span>: Disable all limits. In this case, the Motor will rotate to any degree.<p>\
		<p><span class='title1'>East/West Limit</span>: Set current position as east or west limit. In this case, the Motor will not rotate over this limit.<p>\
		<p><span class='title1'>Goto Ref</span>: The motor will rotate to the referenced degrees (0° in default).<p>\
        <hr>\
		<h4><span class='title1'>1.3 TP List Operation</span></h4>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_9+"\" target=\"_blank\"><img src=\""+SATELLITE_9+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_10+"\" target=\"_blank\"><img src=\""+SATELLITE_10+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<p>In satellite list, press Yellow button to go to TP list of focused satellite. Here you can scan one TP or multiple TPs by pressing Red button. To multi-select TPs, press OK button to select multiple TPs. In addition, you can Add, Edit or Delete TP(s). After editing TP(s), you can then press Red button to begin scanning.<p>\
		<p>Please note that, if you delete a TP with services you have scanned, all services will be deleted as well.<p>\
		<hr>\
		<h4><span class='title1'>1.4 Scan Mode Description</span></h4>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_11+"\" target=\"_blank\"><img src=\""+SATELLITE_11+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_12+"\" target=\"_blank\"><img src=\""+SATELLITE_12+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<br>&nbsp;\
		<p>Anytime when you press Red button calling a pop-menu to scan, you can choose Scan Mode, Network and CAS System. The followings are these items' introduction:<p>\
        <p><span class='title1'>Scan Mode</span>: ALL(All mode, scan both TV and radio), TV(Only scan TV) and Radio(Only scan radio).<p>\
        <p><span class='title1'>Network</span>: NIT OFF(scan this TP only) and NIT ON(scan this TP and NIT in this TP, then scan the whole network according to the NIT information)<p>\
        <p><span class='title1'>CAS System</span>: ALLCA(All kinds of CAS and FTA), FREECA(FTA only, you can scan free services), ONLYCA(All kinds of CAS, you can scan services scrambled by CAS) and other options(These options are different kinds a one CAS, you can choose one of them to scan)<p>\
		<hr>\
		<h4><span class='title1'>1.5 DisEqc/22K switch and Auto-DisEqc</span></h4>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_14+"\" target=\"_blank\"><img src=\""+SATELLITE_14+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_13+"\" target=\"_blank\"><img src=\""+SATELLITE_13+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<p>If you have more dish or signal sources, you can use a DisEqc or 22K switch to switch the source signal without change cable line in STB. (Hint: DisEqc is a Digital Satellite Equipment Control with 4 ports while 22K is an analogue one with two ports)<p>\
        <p>In satellite edit menu, you can configure DisEqc and 22K switch. You should buy them first and then connect the LNB IN port in the STB to the port \"receiver\" in DisEqc or 22K switch. Change the Item Diseqc 1.X. If you connect a satellite or signal source to LNB2 in DisEqc, then you should choose the option DisEqc B.<p>\
        <p>In satellite-list, press Blue button can call a pop-menu to find DisEqc automatically.<p>\
		<hr>\
		\
		\
		<h3><span class='title1'>2 Blind Scan</span></h3>\
		<p>You can use Blind Scan if you don't know the TPs in a satellite while you have fix the dish in right place.</p>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_15+"\" target=\"_blank\"><img src=\""+SATELLITE_15+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_16+"\" target=\"_blank\"><img src=\""+SATELLITE_16+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<br>&nbsp;\
		<p>Select Blind Scan and choose the satellite, then choose scan type and press OK button to start blind scan.</p>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_17+"\" target=\"_blank\"><img src=\""+SATELLITE_17+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+SATELLITE_18+"\" target=\"_blank\"><img src=\""+SATELLITE_18+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<br>&nbsp;\
		<p>The STB will firstly scan all TPs in this satellite. After that, the STB begins to scan all these TPs, and services will be listed while scanning.</p>\
		\
		";


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		