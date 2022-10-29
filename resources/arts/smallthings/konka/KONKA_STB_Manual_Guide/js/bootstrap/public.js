/* ========================================================================
 * Some Public Functions Are Declared Here
 * ======================================================================== */

function kkprint(str){
	console.log(str)
}
 
function kkgotoposition(targetOffset, interval){
	// var targetOffset = 400; // Offset From Top
	$('html,body').animate({
		scrollTop: targetOffset},interval	// Interval
	);
}


/* For Static Pop-Notice */
/*
	<div id='noticeInfoShowGlobal' style='position:absolute; bottom:-10px; right:5px; width:480px; display:none;z-index:1000'>
	
		<span style='position:relative; right:-460px; top:25px; width:40px; height:40px; cursor:pointer' onclick=removeNoticeGlobal()><font size='3px' color=#777><span class="glyphicon glyphicon-remove"></span></font></span>
	
		<div class='panel panel-default'>
		  <div class='panel-body'>			
			<div class='row'>
				<div class='col-md-2'>
					<img id='noticeImgGlobal' src='public/img/structure/outseahead.png' style='width:60px; position:relative; left:0px'/>
				</div>
				<div class='col-md-10'>
					<font size=4px><b><span id='noticeTitleGlobal'></span></b></font>	
					<p><font color=#777><span id='noticeContentGlobal'></span></font></p>	
					<p><span id='noticeBtnGlobal'></span></p>	
				</div>
				
			</div>
		  </div>
		</div>
	</div>
	
*/
function removeNoticeGlobal(){
	// document.getElementById("noticeInfoShowGlobal").style.display = "none";
	$("#noticeInfoShowGlobal").slideUp(500)
}

function showNoticeInfoGlobal(imgsrc,title,content,noticeBtn,showtime){
	if(""!=imgsrc)
		document.getElementById("noticeImgGlobal").src = imgsrc;
	document.getElementById("noticeTitleGlobal").innerHTML = title;
	document.getElementById("noticeContentGlobal").innerHTML = content;
	$("#noticeInfoShowGlobal").slideDown(500)
		//document.getElementById("noticeInfoShowGlobal").style.display = "";
	
	var num = showtime*1000;
	window.setTimeout(function(){
		$("#noticeInfoShowGlobal").slideUp(500);
		// document.getElementById("noticeInfoShowGlobal").style.display = "none"
	},num);
	
}

// document.onreadystatechange = showNoticeInfoGlobal("public/img/structure/outseahead.png",'海外软件研发中心欢迎您','welcome to Outsea Software Development Center!','', 5);




