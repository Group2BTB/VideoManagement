// Video display style

$(document).ready(function() {
	$("#showTblContent").hide();// After HTHL work already, this function will hide List content from web page
	$("#showThumnail").show();// use to show Grid content
	$("#btnLarge").addClass("btn-primary");// Add class btn-primary to display color of button

});


//This function is use to display content as Grid
function showThumbnail() {
	$("#showTblContent").hide();
	$("#showThumnail").show();
	$("#btnLarge").addClass("btn-primary");
	$("#btnList").removeClass("btn-primary");
}

//This function is use to display content as Table or List 
function showList(){
	$("#showThumnail").hide();
	$("#showTblContent").show();
	$("#btnList").addClass("btn-primary");
	$("#btnLarge").removeClass("btn-primary");
}


