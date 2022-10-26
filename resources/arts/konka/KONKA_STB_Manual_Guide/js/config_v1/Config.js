
/* ========================================================================
 * This file lists all configurations for User Manual (Web Version, V2)
 * ======================================================================== */
	
/*
 * Copyright
 * Author: Xiaozhou Lin
 * Email: linxiaozhoubiz@gmail.com
 * Country: China
 * Date: Dec 11, 2014
*/

/* Top */
	// If "1", show other type (Terrestrial and satellite if current is cable) link. 
	var SHOW_OTHER_TYPE_LINK = 1;	



/* Preface */	
// ---------------------------------------------------------------------------------------------------
	var EDIT_PERSON 		= 	"Xiaozhou Lin";			// Editor
	var AUDIT_PERSON 		= 	"Yaohua Qiu";			// Audit
	var APPROVAL_PERSON 	= 	"Houqiu Zhou";			// Approval
	
	
	
/* Project Info */
// ---------------------------------------------------------------------------------------------------
	// Project Info. 
		//(Edit here!! Choose one type to edit! For example, if the STB is Cable STB, edit parameters with "_CABLE")
	
	// - Cable STB parameters -
	var PROJECT_NAME_CABLE 			= 	"KHDT862-W10(0)";	// Project Name	(For Manufacturer)	
	var PRODUCT_NAME_CABLE 			= 	"KHDC862";			// Product Name	(For Client)
	var MARKET_CABLE 				= 	"Guatemala";		// Market
	
	// - Terrestrial STB parameters - 
	var PROJECT_NAME_TERRESTRIAL 	= 	"KHDT866-G(S)";	
	var PRODUCT_NAME_TERRESTRIAL 	= 	"KHDT866";					
	var MARKET_TERRESTRIAL 			= 	"Cameroon";
	
	// - Satellite STB parameters - 
	var PROJECT_NAME_SATELLITE 		= 	"KHDS862-W11(I)";		
	var PRODUCT_NAME_SATELLITE 		= 	"KHDS862";
	var MARKET_SATELLITE 			= 	"Uruguay";
	
	
	
/* Technical Specification */
// ---------------------------------------------------------------------------------------------------
	// SYSTEM
	var CUP 				=	"MSD5043";
	var CPU_SPEED 			=	"880 DMIPS";
	var FLASH_MEMORY		=	"8Mbytes Optional";
	var SDRAM				=	"128M Bytes DDR2";
	var EEPROM				=	"N/A";
	// TUNER & DEMODULATOR
	var INPUT_CONNECTOR 	= 	"F-Type, Female";
	var LOOPOUT_CONNECTOR 	=	"F-Type, Female";
	var INPUT_FREQ_RANGE 	= 	"177.5 - 858MHz";
	var INPUT_IMPENDANCY 	= 	"75Ω";
	var MODULATION 			=	"QPSK / 8PSK";
	// FRONT PANEL
	var IR_RECEIVER 		=	"38KHz";
	var CONTROL_BUTTONS 	= 	"STANDBY / CH+ / CH-";
	var LED 				=	"POWER / STANDBY";
	// CONDITIONAL ACCESS INTERFACE
	var SMART_CARD 			=	"One Smart card reader";
	// PHYSICAL DIMENSION
	var SIZE_W_D_H 			= 	"170.0x116.0x35.0 mm";
	var WEIGHT_NET			= 	"1.2Kg approximate";
	// AMBIENT
	var OPERATINGTEMP 		=	"-5 - +45℃";
	var STORAGETEMP 		= 	"-25- +55℃";
	
	// REAR PANEL
	var RCA_OUTPUT 			=	"3 RCA(CVBS+Left+Right)";
	var USB_VERSION 		= 	"USB 2.0";
	var HDMI_VERSION 		= 	"HDMI 1.3";
	var RF_OUTPUT 			= 	"UHF RF Output";
	// MPEG TRANSPORT STREAM & A/V DECODING
	var VIDEO_LEVEL 		=	"ISO/IEC 13818-2, MPEG-2 MP@ML, MPEG-4: ASP@L5 w/o QMC, GMC H.264/ AVC: HP@L4.0, MP@L4.0, 3.2 VC-1:AP@L3, AP@L2";
	var VIDEO_APECT 		=	"4:3, 16:9";
	var VIDEO_RESOLUTION 	=	"480i/480p/576i/576p/720P/1080I/1080P";
	var AUDIO_DECODING 		=	"MPEG-1 and -2, layer 1 and 2<br>MPEG-4 HE-AAC V1L1, L2, V2 L2/L4<br>AAC-LC, WMA, MP3<br>AC-3,E-AC-3(DD+)";
	var AUDIO_MODE 			=	"Single Channel / Dual Channel / Stereo";
	// POWER SUPPLY
	var INPUT_VOLTAGE 		=	"DC 12V 1A";
	var POWER_CONSUMPT 		=	"Max. 12W";
	var STANDBY_CONSUMPT 	=	"Less than 1W";
	var POWER_TYPE 			=	"External";
	// ACCESSORIES
	var REMOTE_CONTROL 		=	"1* RCU";
	var AV_CABLE 			=	"1*1.5meter RCA Cable(Optional)";
	var USER_MANUAL 		=	"1*black";	

	
	
/* Front Panel Definition */
// ---------------------------------------------------------------------------------------------------
	var FRONT_CH_UP_DOWN 		= 	["CH ▲/▼",			"To change channels or items on the menu"];
	var FRONT_STANDBY 			= 	["STANDBY",			"Switch between operation and standby mode"];
	var FRONT_POWER 			= 	["POWER",			"Switch between operation and standby mode"];
	var FRONT_LED_INDICATOR		= 	["LED Indicator",	"Indicate STB working status"];
	var FRONT_VOL_UP_DOWN		= 	["Vol ◀/▶",			"Volume control"];
	var FRONT_ENTER				= 	["Enter",			"Enter into a menu"];
	var FRONT_EXIT				= 	["EXIT",			"Exit to watch program"];
	var FRONT_MENU				= 	["MENU",			"Return to previous menu"];
	var FRONT_CA_CARD_SLOT		= 	["Smart Card Slot",	"Input the smart card into the slot"];

	
	
/* Interfaces Definition */
// ---------------------------------------------------------------------------------------------------
	var IO_SIGNAL_IN_CABLE 			=	["CABLE IN",	"Connect to the cable antenna via coaxial cable"];
	var IO_SIGNAL_IN_TERRESTRIAL	=	["RF IN",		"Connect to the terrestrial antenna via coaxial cable"];
	var IO_SIGNAL_IN_SATELLITE 		=	["LNB IN",		"Connect to the LNB via coaxial cable"];
	
	var IO_LOOP_OUT 	=	["LOOP OUT",  	"Loop out the signal to another STB"];
	var IO_USB 			=	["USB", 		"To insert a USB Memory Disk"];
	var IO_HDMI 		=	["HDMI", 		"Connect to TV via HDMI cable"];
	var IO_VIDEO		=	["VIDEO", 		"Connect to the video input port of TV/VCR"];
	var IO_CVBS			=	["CVBS", 		"Connect to the video input port of TV/VCR"];
	var IO_AUDIO_L		=	["AUDIO-L", 	"Connect to the audio (L) input port of TV/VCR/Hi-Fi audio system"];
	var IO_A_L			=	["A-L", 		"Connect to the audio (L) input port of TV/VCR/Hi-Fi audio system"];
	var IO_AUDIO_R		=	["AUDIO-R", 	"Connect to the audio (R) input port of TV/VCR/Hi-Fi audio system"];
	var IO_A_R			=	["A-R", 		"Connect to the audio (R) input port of TV/VCR/Hi-Fi audio system"];
	var IO_DC12V_1_5A	=	["DC12V/1.5A", 	"Connect to external DC Power Transmission"];
	var IO_DC12V_1A		=	["DC12V/1A", 	"Connect to external DC Power Transmission"];
	var IO_SPDIF		=	["SPDIF", 		"Connect to the audio input port of TV/VCR/Hi-Fi audio system"];
	var IO_YPBPR		=	["YPbPr", 		"Connect to the corresponding component input port of TV"];
	var IO_ON_OFF		=	["ON/OFF", 		"Power on / Switch off"];
	var IO_240V_60Hz	=	["100V-240V 50/60Hz", 		"Connect to 100V-240V voltage 50/60Hz range AC power"];
	var IO_RF_IN		=	["RF IN", 		"Connect with the antenna signal line."];
	var IO_RF_OUT		=	["RF OUT", 		"Connect to the antenna port of TV."];

	
	
/* Button Definition */
// ---------------------------------------------------------------------------------------------------
	var REMOTE_CONTROL_POWER_BUTTON = "img/V2/1.details/power.png";
	var BTN_POWER		=	"<span class='showbtn'><b><img src=\""+REMOTE_CONTROL_POWER_BUTTON+"\" style='width:20px'></b></span>";
	var BTN_FAV			=	"<span class='showbtn'><b>FAV</b></span>";
	var BTN_MUTE		=	"<span class='showbtn'><b>MUTE</b></span>";
	
	var BTN_TV_RADIO	=	"<span class='showbtn'><b>TV / RADIO</b></span>";
	var BTN_RECALL		=	"<span class='showbtn'><b>RECALL</b></span>";
	
	var BTN_MENU		=	"<span class='showbtn'><b>MENU</b></span>";
	var BTN_EPG			=	"<span class='showbtn'><b>EPG</b></span>";
	var BTN_INFO		=	"<span class='showbtn'><b>INFO</b></span>";
	var BTN_EXIT		=	"<span class='showbtn'><b>EXIT</b></span>";
	
	var BTN_UP			=	"<span class='showbtn'><b>▲ (UP)</b></span>";
	var BTN_DOWN		=	"<span class='showbtn'><b>▼ (DOWN)</b></span>";
	var BTN_UP_DOWN		=	"<span class='showbtn'><b>▲ / ▼ (UP / DOWN)</b></span>";
	var BTN_VOL_UP_DOWN	=	"<span class='showbtn'><b>VOL Up/Down</b></span>";
	
	var BTN_LEFT		=	"<span class='showbtn'><b>◀ (LEFT)</b></span>";
	var BTN_RIGHT		=	"<span class='showbtn'><b>▶ (RIGHT)</b></span>";
	var BTN_LEFT_RIGHT	=	"<span class='showbtn'><b>◀ / ▶ (LEFT / RIGHT)</b></span>";
	
	var BTN_OK			=	"<span class='showbtn'><b>OK</b></span>";
	
	var BTN_RED			=	"<span class='showbtn'><b><font color=red size='5px'>●</font> (RED)</b></span>";
	var BTN_GREEN		=	"<span class='showbtn'><b><font color=#009140 size='5px'>●</font> (GREEN)</b></span>";
	var BTN_YELLOW		=	"<span class='showbtn'><b><font color=#FFFE00 size='5px'>●</font> (YELLOW)</b></span>";
	var BTN_BLUE		=	"<span class='showbtn'><b><font color=#0094DE size='5px'>●</font> (BLUE)</b></span>";
	
	var BTN_APPL		=	"<span class='showbtn'><b>APPL</b></span>";
	var BTN_REW			=	"<span class='showbtn'><b><span class=\"glyphicon glyphicon-backward\"></span> REW</b></span>";
	var BTN_PLAY		=	"<span class='showbtn'><b>PLAY <span class=\"glyphicon glyphicon-play\"></span></b></span>";
	var BTN_FF			=	"<span class='showbtn'><b>FF <span class=\"glyphicon glyphicon-forward\"></span></b></span>";
	
	var BTN_GOTO		=	"<span class='showbtn'><b>GOTO</b></span>";
	var BTN_PAUSE		=	"<span class='showbtn'><b>PAUSE <span class=\"glyphicon glyphicon-pause\"></span></b></span>";
	var BTN_REC			=	"<span class='showbtn'><b>REC <font color=red size='5px'>●</font></b></span>";
	var BTN_STOP		=	"<span class='showbtn'><b>STOP<span class=\"glyphicon glyphicon-stop\"></span></b></span>";
	
	var BTN_AUDIO		=	"<span class='showbtn'><b>AUDIO</b></span>";
	var BTN_SUB			=	"<span class='showbtn'><b>SUB</b></span>";
	var BTN_TXT			=	"<span class='showbtn'><b>TXT</b></span>";
	
	
	
/* Image Dir */
// ---------------------------------------------------------------------------------------------------
	// - 0.Preface -
	var FRONT_PANEL = "img/V2/0.introduct/front_cable.png";
	var FRONT_PANEL_CABLE = "img/V2/0.introduct/front_cable.png";
	var FRONT_PANEL_TERRESTRIAL = "img/V2/0.introduct/front_terrestrial.png";
	var FRONT_PANEL_SATELLITE = "img/V2/0.introduct/front_satellite.png";
	
	// - 1.Details -
	// default
	var FRONT_PANEL_INTRODUCT = "img/V2/1.details/front_desc_cable.png";
	var REAL_PANEL_INTRODUCT = "img/V2/1.details/real_desc_cable.png";
	// Cable
	var FRONT_PANEL_INTRODUCT_CABLE = "img/V2/1.details/front_desc_cable.png";
	var REAL_PANEL_INTRODUCT_CABLE = "img/V2/1.details/real_desc_cable.png";
	// Terrestrial
	var FRONT_PANEL_INTRODUCT_TERRESTRIAL = "img/V2/1.details/front_desc_terrestrial.png";
	var REAL_PANEL_INTRODUCT_TERRESTRIAL = "img/V2/1.details/real_desc_terrestrial.png";
	// Satellite
	var FRONT_PANEL_INTRODUCT_SATELLITE = "img/V2/1.details/front_desc_satellite.png";
	var REAL_PANEL_INTRODUCT_SATELLITE = "img/V2/1.details/real_desc_satellite.png";
	
	var REMOTE_CONTROL = "img/V2/1.details/romoteControl.png";

	// - 2.Install - Cable -
	var CABLE_CONNECTION_INTRODUCT = "img/V2/2.install/cable_connection.png";
	var CABLE_1 = "img/V2/2.install/cable_1.jpg";
	var CABLE_2 = "img/V2/2.install/cable_2.jpg";
	var CABLE_3 = "img/V2/2.install/cable_3.jpg";
	var CABLE_4 = "img/V2/2.install/cable_4.jpg";
	var CABLE_5 = "img/V2/2.install/cable_5.jpg";
	var CABLE_6 = "img/V2/2.install/cable_6.jpg";
	
	// - 2.Install - Terrestrial -
	var TERRESTRIAL_CONNECTION_INTRODUCT = "img/V2/2.install/terrestrial_connection.png";
	var TERRESTRIAL_1 = "img/V2/2.install/terrestrial_1.jpg";
	var TERRESTRIAL_2 = "img/V2/2.install/terrestrial_2.jpg";
	var TERRESTRIAL_3 = "img/V2/2.install/terrestrial_3.jpg";
	
	// - 2.Install - Satellite -
	// 1.KONKA Satellite STB Connection
	var SATELLITE_CONNECTION_INTRODUCT = "img/V2/2.install/satellite_connection.png";
	// 2.KONKA Satellite STB Scanning
	var SATELLITE_1 = "img/V2/2.install/satellite_1.jpg";
	var SATELLITE_2 = "img/V2/2.install/satellite_2.jpg";
	// 2.1.1 Satellite List Operation
	var SATELLITE_3 = "img/V2/2.install/satellite_3.jpg";
	var SATELLITE_4 = "img/V2/2.install/satellite_4.jpg";
	var SATELLITE_5 = "img/V2/2.install/satellite_5.jpg";
	var SATELLITE_6 = "img/V2/2.install/satellite_6.jpg";
	// 2.1.2 Motor(Optional)
	var SATELLITE_7 = "img/V2/2.install/satellite_7.jpg";
	var SATELLITE_8 = "img/V2/2.install/satellite_8.jpg";
	// 2.1.3 TP List Operation
	var SATELLITE_9 = "img/V2/2.install/satellite_9.jpg";
	var SATELLITE_10 = "img/V2/2.install/satellite_10.jpg";
	// 2.1.4 Scan Mode Description
	var SATELLITE_11 = "img/V2/2.install/satellite_11.jpg";
	var SATELLITE_12 = "img/V2/2.install/satellite_12.jpg";
	// 2.1.5 DisEqc/22K switch and Auto-DisEqc
	var SATELLITE_13 = "img/V2/2.install/satellite_13.jpg";
	var SATELLITE_14 = "img/V2/2.install/satellite_14.jpg";
	// 2.2 Blind Scan
	var SATELLITE_15 = "img/V2/2.install/satellite_15.jpg";
	var SATELLITE_16 = "img/V2/2.install/satellite_16.jpg";
	var SATELLITE_17 = "img/V2/2.install/satellite_17.jpg";
	var SATELLITE_18 = "img/V2/2.install/satellite_18.jpg";
	
	
	// - 3.Main Menu -
	// 1.Main Menu
	var MANIMENU_1 = "img/V2/3.mainmenu/mainmenu_1.jpg";
	var MANIMENU_2 = "img/V2/3.mainmenu/mainmenu_2.jpg";
	// 1.2 Channels
	var MANIMENU_3 = "img/V2/3.mainmenu/mainmenu_3.jpg";
	var MANIMENU_4 = "img/V2/3.mainmenu/mainmenu_4.jpg";
	// 1.2.1 Organize Services
	var MANIMENU_5 = "img/V2/3.mainmenu/mainmenu_5.jpg";
	var MANIMENU_6 = "img/V2/3.mainmenu/mainmenu_6.jpg";
	// 1.2.2 Organize Favourites
	var MANIMENU_7 = "img/V2/3.mainmenu/mainmenu_7.jpg";
	var MANIMENU_8 = "img/V2/3.mainmenu/mainmenu_8.jpg";
	// 1.2.3 Factory Reset
	var MANIMENU_9 = "img/V2/3.mainmenu/mainmenu_9.jpg";
	var MANIMENU_10 = "img/V2/3.mainmenu/mainmenu_10.jpg";
	// 1.2.4 Delete All Data
	var MANIMENU_11 = "img/V2/3.mainmenu/mainmenu_11.jpg";
	var MANIMENU_12 = "img/V2/3.mainmenu/mainmenu_12.jpg";
	// 1.3 Personalization
	var MANIMENU_13 = "img/V2/3.mainmenu/mainmenu_13.jpg";
	var MANIMENU_14 = "img/V2/3.mainmenu/mainmenu_14.jpg";
	// 1.4.1 Language
	var MANIMENU_15 = "img/V2/3.mainmenu/mainmenu_15.jpg";
	var MANIMENU_16 = "img/V2/3.mainmenu/mainmenu_16.jpg";
	// 1.4.2 Parental Control
	var MANIMENU_17 = "img/V2/3.mainmenu/mainmenu_17.jpg";
	var MANIMENU_18 = "img/V2/3.mainmenu/mainmenu_18.jpg";
	// 1.4.3 Time Setting
	var MANIMENU_19 = "img/V2/3.mainmenu/mainmenu_19.jpg";
	var MANIMENU_20 = "img/V2/3.mainmenu/mainmenu_20.jpg";
	// 1.4.4 Video Control
	var MANIMENU_21 = "img/V2/3.mainmenu/mainmenu_21.jpg";
	var MANIMENU_22 = "img/V2/3.mainmenu/mainmenu_22.jpg";
	// 1.5.1 System Information
	var MANIMENU_23 = "img/V2/3.mainmenu/mainmenu_23.jpg";
	// 1.5.2 USB Control
	var MANIMENU_24 = "img/V2/3.mainmenu/mainmenu_24.jpg";
	var MANIMENU_25 = "img/V2/3.mainmenu/mainmenu_25.jpg";
	// 1.5.3 Game
	var MANIMENU_26 = "img/V2/3.mainmenu/mainmenu_26.jpg";
	var MANIMENU_27 = "img/V2/3.mainmenu/mainmenu_27.jpg";
	var MANIMENU_28 = "img/V2/3.mainmenu/mainmenu_28.jpg";
	var MANIMENU_29 = "img/V2/3.mainmenu/mainmenu_29.jpg";
	// 1.5.4 Calendar
	var MANIMENU_30 = "img/V2/3.mainmenu/mainmenu_30.jpg";
	var MANIMENU_31 = "img/V2/3.mainmenu/mainmenu_31.jpg";
	// 1.5.5 USB Management
	var MANIMENU_32 = "img/V2/3.mainmenu/mainmenu_32.jpg";
	var MANIMENU_33 = "img/V2/3.mainmenu/mainmenu_33.jpg";
	// Disk Format
	var MANIMENU_34 = "img/V2/3.mainmenu/mainmenu_34.jpg";
	var MANIMENU_35 = "img/V2/3.mainmenu/mainmenu_35.jpg";
	// PVR Max Limit
	var MANIMENU_36 = "img/V2/3.mainmenu/mainmenu_36.jpg";
	var MANIMENU_37 = "img/V2/3.mainmenu/mainmenu_37.jpg";
		

	// - 4.Basic Operation -
	// 2.1 Information Panel
	var MANIMENU_38 = "img/V2/3.mainmenu/mainmenu_38.jpg";
	var MANIMENU_39 = "img/V2/3.mainmenu/mainmenu_39.jpg";
	// 2.2.1 Switch Service
	var MANIMENU_40 = "img/V2/3.mainmenu/mainmenu_40.jpg";
	var MANIMENU_41 = "img/V2/3.mainmenu/mainmenu_41.jpg";
	// 2.2.3 Button Function
	var MANIMENU_42 = "img/V2/3.mainmenu/mainmenu_42.jpg";
	var MANIMENU_43 = "img/V2/3.mainmenu/mainmenu_43.jpg";
	// 2.3 Volume Control/Mute
	var MANIMENU_44 = "img/V2/3.mainmenu/mainmenu_44.jpg";
	var MANIMENU_45 = "img/V2/3.mainmenu/mainmenu_45.jpg";
	// 2.4 Sound Control
	var MANIMENU_46 = "img/V2/3.mainmenu/mainmenu_46.jpg";
	var MANIMENU_47 = "img/V2/3.mainmenu/mainmenu_47.jpg";
	// 2.5 Subtitle and Teletext
	var MANIMENU_48 = "img/V2/3.mainmenu/mainmenu_48.jpg";
	var MANIMENU_49 = "img/V2/3.mainmenu/mainmenu_49.jpg";
	var MANIMENU_50 = "img/V2/3.mainmenu/mainmenu_50.jpg";
	var MANIMENU_51 = "img/V2/3.mainmenu/mainmenu_51.jpg";
	// 2.6.1 Menu Introduction
	var MANIMENU_52 = "img/V2/3.mainmenu/mainmenu_52.jpg";		
	var MANIMENU_53 = "img/V2/3.mainmenu/mainmenu_53.jpg";		
	// 2.6.2 Color-Button Function
	var MANIMENU_54 = "img/V2/3.mainmenu/mainmenu_54.jpg";		
	var MANIMENU_55 = "img/V2/3.mainmenu/mainmenu_55.jpg";				
	// 2.6.3 Single EPG
	var MANIMENU_56 = "img/V2/3.mainmenu/mainmenu_56.jpg";		
	var MANIMENU_57 = "img/V2/3.mainmenu/mainmenu_57.jpg";				
	// 2.6.4 Timer Overview
	var MANIMENU_58 = "img/V2/3.mainmenu/mainmenu_58.jpg";		
	var MANIMENU_59 = "img/V2/3.mainmenu/mainmenu_59.jpg";					
	// 2.7 Time-shift
	var MANIMENU_60 = "img/V2/3.mainmenu/mainmenu_60.jpg";		
	var MANIMENU_61 = "img/V2/3.mainmenu/mainmenu_61.jpg";					
	// 2.8 PVR
	var MANIMENU_62 = "img/V2/3.mainmenu/mainmenu_62.jpg";		
	var MANIMENU_63 = "img/V2/3.mainmenu/mainmenu_63.jpg";						
	// 2.9.1 USB Function
	var MANIMENU_64 = "img/V2/3.mainmenu/mainmenu_64.jpg";		
	var MANIMENU_65 = "img/V2/3.mainmenu/mainmenu_65.jpg";							
	// 2.9.2 MP3
	var MANIMENU_66 = "img/V2/3.mainmenu/mainmenu_66.jpg";		
	var MANIMENU_67 = "img/V2/3.mainmenu/mainmenu_67.jpg";							
	// 2.9.3 Picture
	var MANIMENU_68 = "img/V2/3.mainmenu/mainmenu_68.jpg";		
	var MANIMENU_69 = "img/V2/3.mainmenu/mainmenu_69.jpg";							
	// 2.9.4 Media Play
	var MANIMENU_70 = "img/V2/3.mainmenu/mainmenu_70.jpg";		
	var MANIMENU_71 = "img/V2/3.mainmenu/mainmenu_71.jpg";		

		
		
/* Directory-Locations */
// ---------------------------------------------------------------------------------------------------
	var FLOW_FILE_ROOT = "doc/";
	var FLOW_FILE_CABLE_SIMPLY_V2 = FLOW_FILE_ROOT+"SimplyModelCableV2_KHDC862-W11(D)_User_Manual_20141015.docx";
	var FLOW_FILE_TERRESTRIAL_SIMPLY_V2 = FLOW_FILE_ROOT+"SimplyModelTerrestrialV2_KHDT863-W22(0)_Georgia_UserManual_20140910_V1.0.docx";
	var FLOW_FILE_SATELLITE_SIMPLY_V2 = FLOW_FILE_ROOT+"SimplyModelSatelliteV2_KHDS862-R1-I_Australia_UserManual_20140509.docx";
	

/* *THE END* */
	
	
	
	
/* Config Global Params */	
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------	
	function getTemplateByProjName(prjname)
	{
		var temp = "";
		temp = prjname.substr(4, 3);
		switch(temp)
		{
			case "862":
				temp = "MSD5043";
				break;
			case "863":
				temp = "MSD7816";
				break;
			case "866":
				temp = "MSD7819";
				break;
			case "867":
				temp = "MSD5045";
				break;
			case "872":
				temp = "MSD5019";
				break;
			default:
				temp = "MSD5043";
				break;
		}
		return temp;
	}

	function getQueryString(name) 
	{
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	function freshGlobalParams()
	{
		if("cable"==instal_type)
		{
			PROJECT_NAME = PROJECT_NAME_CABLE;
			PRODUCT_NAME = PRODUCT_NAME_CABLE;
			MARKET = MARKET_CABLE;
			FRONT_PANEL = FRONT_PANEL_CABLE;
			FRONT_PANEL_INTRODUCT = FRONT_PANEL_INTRODUCT_CABLE;
			REAL_PANEL_INTRODUCT = REAL_PANEL_INTRODUCT_CABLE;
			IO_SIGNAL_IN = IO_SIGNAL_IN_CABLE;
		}
		else if("terrestrial"==instal_type)
		{
			PROJECT_NAME = PROJECT_NAME_TERRESTRIAL;
			PRODUCT_NAME = PRODUCT_NAME_TERRESTRIAL;
			MARKET = MARKET_TERRESTRIAL;
			FRONT_PANEL = FRONT_PANEL_TERRESTRIAL;
			FRONT_PANEL_INTRODUCT = FRONT_PANEL_INTRODUCT_TERRESTRIAL;
			REAL_PANEL_INTRODUCT = REAL_PANEL_INTRODUCT_TERRESTRIAL;
			IO_SIGNAL_IN = IO_SIGNAL_IN_TERRESTRIAL;
		}
		else if("satellite"==instal_type)
		{
			PROJECT_NAME = PROJECT_NAME_SATELLITE;
			PRODUCT_NAME = PRODUCT_NAME_SATELLITE;
			MARKET = MARKET_SATELLITE;
			FRONT_PANEL = FRONT_PANEL_SATELLITE;
			FRONT_PANEL_INTRODUCT = FRONT_PANEL_INTRODUCT_SATELLITE;
			REAL_PANEL_INTRODUCT = REAL_PANEL_INTRODUCT_SATELLITE;
			IO_SIGNAL_IN = IO_SIGNAL_IN_SATELLITE;
		}
		
	}
	
	// Default Info. (Not care! Edit these values will NOT change display!!)
	var DEFAULT_INSTAL_TYPE = 	"cable";	// cable   satellite   terrestrial
	var PROJECT_NAME = 			"KHDT862-W10";				
	var PRODUCT_NAME = 			"KHDT862";					
	var MARKET = 				"Guatemala";
	
	var instal_type = "cable";
	
	instal_type = getQueryString("index");
	if(instal_type == "" || instal_type==null || instal_type=="undefined")
		instal_type = DEFAULT_INSTAL_TYPE;
	
	freshGlobalParams();


	
/* End of Config */	
