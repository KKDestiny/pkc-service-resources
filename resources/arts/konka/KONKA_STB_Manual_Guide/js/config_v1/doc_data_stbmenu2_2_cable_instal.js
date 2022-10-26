/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var INSTAL_CABLE_LAST_UPDATE = "Dec. 06<sup>th</sup>, 2014";
	
	var INSTAL_CABLE_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;KONKA STB Manual Guide <small>KONKA 2014</small>";
	
	var local_remarks = "";
	if(SHOW_OTHER_TYPE_LINK)	 local_remarks= "<p><b>&nbsp;&nbsp;&nbsp;&nbsp;<small><em>Remarks: This connection is based on "+PROJECT_NAME+" for "+MARKET+" Project.</em></small></b></p>";

	var INSTAL_CABLE_TITLE_DESC = "\
		<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-cog\"></span>&nbsp;&nbsp;Installation Guide For Cable STB</h4><hr>\
		<h2><span class='title1'>KONKA Cable STB Connection</span></h2>\
		<div class=\"text-center\"><a class=\"thumbnail\" href=\""+CABLE_CONNECTION_INTRODUCT+"\" target=\"_blank\"><img src=\""+CABLE_CONNECTION_INTRODUCT+"\" alt=\"STB Front Panel\"></a></div>\
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
		<h2><span class='title1'>KONKA Cable STB Scanning</span></h2>\
		<p>There are 3 ways to search the channels. If the Parental Lock is ON, PIN is need. Default password is \"0000\".</p>\
		<hr>\
		<h3><span class='title1'>1 Manual Search</span></h3>\
		<p>All preset TPs are listed here, and you can press ◀ / ▶ button to change TP, or you can press OK button to call a pop-up TP-List Menu.</p>\
		<h4><span class='title1'>● Scan</span></h4>\
		<p>Press Red button to call a pop-menu, you can choose Scan Mode, Network and CAS System. The followings are these items' introduction:<p>\
        <p><span class='title1'>Scan Mode</span>: ALL(All mode, scan both TV and radio), TV(Only scan TV) and Radio(Only scan radio).<p>\
        <p><span class='title1'>Network</span>: NIT OFF(scan this TP only) and NIT ON(scan this TP and NIT in this TP, then scan the whole network according to the NIT information)<p>\
        <p><span class='title1'>CAS System</span>: ALLCA(All kinds of CAS and FTA), FREECA(FTA only, you can scan free services), ONLYCA(All kinds of CAS, you can scan services scrambled by CAS) and other options(These options are different kinds a one CAS, you can choose one of them to scan)<p>\
		\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+CABLE_1+"\" target=\"_blank\"><img src=\""+CABLE_1+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+CABLE_2+"\" target=\"_blank\"><img src=\""+CABLE_2+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		<h4><span class='title1'>● Add</span></h4>\
		<p>Press Green button to call a pop-menu, you can add a TP here. Please note that, Frequency for cable is defined to 50MHz ~ 850MHz, your input should in this scope. Symbol Rate and QAM are defined, and you can refer other TP's settings.<p>\
		<h4><span class='title1'>● Edit</span></h4>\
		<p>Press Yellow button to call a pop-menu, you can edit selected TP. Frequency, Symbol Rate and QAM have the same rules above.<p>\
		<h4><span class='title1'>● Delete</span></h4>\
		<p>Press Blue button to delete selected  TP. Please note that, if you delete a TP with services you have scanned, all services will be deleted as well.<p>\
		<hr>\
		<h3><span class='title1'>2 TPList Search</span></h3>\
		<p>You can scan TPs by setting a scan-area of TPs. You should add TPs in Manual Search menu first.<p>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+CABLE_3+"\" target=\"_blank\"><img src=\""+CABLE_3+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+CABLE_4+"\" target=\"_blank\"><img src=\""+CABLE_4+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		&nbsp;\
		<hr>\
		\
		<h3><span class='title1'>3 Full Band Search</span></h3>\
		<p>Choose Full-band Search, the STB will scan all TPs preset. <p>\
		<div class=\"text-center\">\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+CABLE_5+"\" target=\"_blank\"><img src=\""+CABLE_5+"\" alt=\"STB Front Panel\"></a>\
			</div>\
			<div class=\"col-md-6\">\
				<a class=\"thumbnail\" href=\""+CABLE_6+"\" target=\"_blank\"><img src=\""+CABLE_6+"\" alt=\"STB Front Panel\"></a>\
			</div>\
		</div>\
		\
		";


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		