/* ========================================================================
 * Flow Data List here
 * ======================================================================== */
	
	// Title and Description
	var NIT_LAST_UPDATE = "Nov. 28<sup>th</sup>, 2014";
	
	var NIT_TITLE = "<span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;STB Upgrade Program Proposal <small>KONKA 2014</small>";
	
	var NIT_SAMPLE = "\
		<blockquote>Pay attention to the colored bit number, and these numbers should be edited.\
		<small>You can click each NIT bit number, and the corresponding description will be focused. Also, if you click the description, the corresponding NIT bit number will be focused as well.</small></blockquote>\
		<hr>\
		<pre><b>\
 <span class='cd cd-rsv' onclick=\"changeFocused(0)\"id='nit0' title='OTA upgrade description flag. (reserved)'>A1</span>\
 <span class='cd cd-rsv' onclick=\"changeFocused(1)\" id='nit1' title='OTA upgrade description length. 39 bytes. (reserved)'>27</span>\
 [<span class='cd cd-rsv' onclick=\"changeFocused(2)\" id='nit2' title='0x036F Manufacture ID. (reserved)'>03 6F</span>]\
 <span class='cd cd-rsv' onclick=\"changeFocused(3)\" id='nit3' title='Terrestrial information description flag. (reserved)'>5A</span>\
 <span class='cd cd-rsv' onclick=\"changeFocused(4)\" id='nit4' title='Terrestrial information description length.11 bytes. (reserved)'>0B</span>\
 [<span class='cd cd-t2' onclick=\"changeFocused(5)\" id='nit5' title='Frequency: 0x0297C1E0= 435.00000MHz (Decimal)'>02 97 C1 E0</span>]\
 [<span class='cd cd-t3' onclick=\"changeFocused(6)\" id='nit6' title='Bandwidth: 0x03(Hexadecimal, for bandwidth, 000---8M, 001---7M, 010---6M)'>03</span>]\
 <span class='cd cd-rsv' onclick=\"changeFocused(7)\" id='nit7' title='reserved'>81 22 FF FF FF FF</span>\
 [<span class='cd cd-t4' onclick=\"changeFocused(8)\" id='nit8' title='PID and upgrade mode, click to see details'>BB 82</span>]\
 <span class='cd cd-rsv' onclick=\"changeFocused(9)\" id='nit9' title='Private data description length. 20 bytes. (reserved)'>14</span>\
 <span class='cd cd-rsv' onclick=\"changeFocused(10)\" id='nit10' title='Manufacture ID Ext. (reserved)'>75</span>\
 [<span class='cd cd-t4' onclick=\"changeFocused(11)\" id='nit11' title='Hardware version (reserved)'>86 11 53 47</span>]\
 [<span class='cd cd-t2' onclick=\"changeFocused(12)\" id='nit12' title='Software Version (should be same as the software)'>00 01 00 20</span>]\
 [<span class='cd cd-t3' onclick=\"changeFocused(13)\" id='nit13' title='Start serial NO. (Hexadecimal)'>00 00 00 00</span>\
 <span class='cd cd-t4' onclick=\"changeFocused(13)\" title='End serial NO. (Hexadecimal)'>FF FF FF FF</span>]\
 <span class='cd cd-rsv' onclick=\"changeFocused(14)\" id='nit14' title='(reserved)'>00 00 00 C8</span></b></pre>\
		";
	
	var NIT_TITLE_DESC = "<h4 style=\"color:#37aef2;\"><span class=\"glyphicon glyphicon-globe\"></span>&nbsp;&nbsp;NIT Descriptor</h4><hr>\
		<h3>Description for NIT upgrade</h3>\
		<hr>\
		<span id='nit_sample_place'>"+NIT_SAMPLE+"</span>\
		<hr>\
		<div class='col-md-6'>\
			<p id='shownit0' onclick=\"changeFocused(0)\"><span class='cd cd-rsv'>A1</span>: OTA upgrade description flag. (reserved) </p>\
			<p id='shownit1' onclick=\"changeFocused(1)\"><span class='cd cd-rsv'>27</span>: OTA upgrade description length. 39 bytes.  (reserved)</p>\
			<p id='shownit2' onclick=\"changeFocused(2)\"><span class='cd cd-rsv'>[03 6F]</span>: 0x036F Manufacture ID. (reserved) </p>\
			<p id='shownit3' onclick=\"changeFocused(3)\"><span class='cd cd-rsv'>5A</span>: Terrestrial information description flag. (reserved) </p>\
			<p id='shownit4' onclick=\"changeFocused(4)\"><span class='cd cd-rsv'>0B</span>: Terrestrial information description length.11 bytes. (reserved)</p>\
			<p id='shownit5' onclick=\"changeFocused(5)\"><span class='cd cd-t2'>[02 97 C1 E0]</span>: Frequency: 0x0297C1E0= 435.00000MHz (Decimal) </p>\
			<p id='shownit6' onclick=\"changeFocused(6)\"><span class='cd cd-t3'>[03]</span>: Bandwidth: 0x03(Hexadecimal) = <font color=red><b>000</b></font>0 0011(Binary) .in which, the first 3 bits means bandwidth: 000 = 8MHz.(For bandwidth, 000---8M, 001---7M, 010---6M)</p>\
			<p id='shownit7' onclick=\"changeFocused(7)\"><span class='cd cd-rsv'>81 22 FF FF FF FF</span>: (reserved) </p>\
			<p id='shownit8' onclick=\"changeFocused(8)\"><span class='cd cd-t4'>[BB 82]</span>: PID and upgrade mode  :  0xBB  82(Hexadecimal)  =  1011  1011  1000  0<font color=red><b>010</b></font>(Binary) in which the first 13 bits means:PID.1011 1011 1000 0(Binary, 13 bits)  =  0x1770(Hexadecimal)  = 6000(Decimal). <br>The last 3 bits means upgrade mode, \"1\"(Decimal) means manual upgrade, \"2\"(Decimal) means auto upgrade \
		</div>\
		<div class='col-md-6'>\
			<p id='shownit9' onclick=\"changeFocused(9)\"><span class='cd cd-rsv'>14</span>: Private data description length. 20 bytes. (reserved)</p>\
			<p id='shownit10' onclick=\"changeFocused(10)\"><span class='cd cd-rsv'>75</span>: Manufacture ID Ext. (reserved)</p>\
			<p id='shownit11' onclick=\"changeFocused(11)\"><span class='cd cd-t4'>[86 11 53 47]</span>: Hardware version (reserved)</p>\
			<p id='shownit12' onclick=\"changeFocused(12)\"><span class='cd cd-t2'>[00 01 00 20]</span>: Software Version (should be same as the software)</p>\
			<p id='shownit13' onclick=\"changeFocused(13)\">[<span class='cd cd-t3'>00 00 00 00</span> <span class='cd cd-t4'>FF FF FF FF</span>]: serial NO. Limitation.(Hexadecimal)<br>\
			Control the STB which will be upgraded by serial NO.. Serial NO. equals The last 7 digits of STBID(Decimal). If upgrades all STBs ,set the value from 00000000 to FFFFFFFF.</p>\
			<p id='shownit14' onclick=\"changeFocused(14)\"><span class='cd cd-rsv'>00 00 00 C8</span>: (reserved) </p>\
		</div>\
		<div class='col-md-12'>\
			<hr>\
			<p><b><span class=\"glyphicon glyphicon-warning-sign\"></span> NOTES</b>:&nbsp;<ins>All reserved bytes should not be modified!</ins></p>\
		</div>\
		<div class='col-md-12'>\
		<hr>\
		\
		\
		<h3>NIT Descriptor Generator</h3>\
			<p>Fill in the blanks based on your own situation, and click [Generate!] to generate the NIT Descriptor.</p>\
			<div class=\"panel panel-default\">\
			  <div class=\"panel-body\">\
				<div class='col-md-6'>\
				  <h4>Network Information</h4>\
				  <hr>\
				  <div class=\"form-group\">\
					  <label>Frequency (MHz, in Decimal) </label>\
					  <input type=\"text\" id=\"nit_freq\" class=\"form-control\" placeholder=\"Frequency input\" value='435'>\
				  </div>\
				  <div class=\"form-group\">\
					  <label>Bandwidth(in Decimal)</label>\
					    <select class=\"form-control\" id=\"nit_bandwidth\">\
						  <option value='8'>8</option>\
						  <option value='7'>7</option>\
						  <option value='6'>6</option>\
						</select>\
				  </div>\
				  <div class=\"form-group\">\
					  <label>PID(in Decimal)</label>\
					  <input type=\"text\" id=\"nit_pid\" class=\"form-control\" placeholder=\"PID input\" value='6000'>\
				  </div>\
				  <div class=\"form-group\">\
					  <label>Upgrade Mode</label>\
					    <select class=\"form-control\" id=\"nit_upgrade_mode\">\
						  <option value='1'>Manual-Upgrade</option>\
						  <option value='2' selected='selected'>Auto-Upgrade</option>\
						</select>\
				  </div>\
				</div>\
				\
				<div class='col-md-6'>\
				  <h4>Box Information</h4>\
				  <hr>\
				  <div class=\"form-group\">\
					  <label>Hardware Version (8 bits)</label>\
					  <input type=\"text\" id=\"nit_hwv\" class=\"form-control\" placeholder=\"Hardware Version input\" value='86115347'>\
				  </div>\
				  <div class=\"form-group\">\
					  <label>Software Version (8 bits)</label>\
					  <input type=\"text\" id=\"nit_swv\" class=\"form-control\" placeholder=\"Software Version input\" value='00010020'>\
				  </div>\
				  <div class=\"form-group\">\
					  <label>Start Serial No.(<mark>just input 7 bits</mark>) <br>(E.g. FZ140505J<font color=#c00000>2504601</font>: serial number is：2504601)</label>\
					  <input type=\"text\" id=\"nit_serial_start\" class=\"form-control\" placeholder=\"Serial Start input\" value='0000000'>\
				  </div>\
				  <div class=\"form-group\">\
					  <label>End Serial No.(<mark>just input 7 bits. If upgrade all, press 4294967295</mark>) <br>(E.g. FZ140505J<font color=#c00000>2504601</font>: serial number is：2504601)</label>\
					  <input type=\"text\" id=\"nit_serial_end\" class=\"form-control\" placeholder=\"End Start input\" value='4294967295'>\
				  </div>\
				</div>\
				<div class='col-md-12 text-center'>\
					<hr>\
					<a class=\"btn btn-danger btn-sm\" title=\"click [Generate!] to generate the NIT Descriptor\" onclick=\"generateNIT()\">Generate!</a>\
				</div>\
				<div class='col-md-12'>\
					<hr>\
					<p>New NIT Descriptor: </p>\
					<pre><b><font size='4px'><span id='new_nit_desc' class=\"text-uppercase\">(Please fill in blanks first and click <span class=\"label label-danger\">Generate!</span> )</span></font></b></pre>\
				</div>\
			  </div>\
			</div>\
		</div>\
		\
		\
		<div class=\"col-md-12\">\
			<hr>\
			<h3>Technical Support</h3>\
			<hr>\
			<p>Please keep in touch with us. If you have any question, contact us as following information:</p>\
			<hr>\
			<address>\
			  <strong>KONKA GROUP CO.，LTD.</strong><br>\
			  Overseas Chinese Town<br>\
			  Shenzhen, 518053, China <br>\
			  <abbr title=\"Telephone\">TEL:</abbr> "+SALE_TEL+"\
			</address>\
\
			<address>\
			  <strong>"+SALE_NAME+"</strong><br>\
			  <a href=\"mailto:#\">"+SALE_EMAIL+"</a>\
			</address>\
		</div>\
		";
		
		
		
		
		
		
		
		
		