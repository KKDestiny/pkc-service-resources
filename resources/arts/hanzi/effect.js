

/* ========================================================================
 * Some Public Functions Are Declared Here
 * ======================================================================== */

	function display(id, str)
	{
		document.getElementById(id).innerHTML = str
	}
	
	
	function showTitle()
	{
		display("title_main",TITLE_MAIN);
		display("title_sub",TITLE_SUB);
	}
	

