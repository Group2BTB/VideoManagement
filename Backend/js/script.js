// Video display style

$(document).ready(function() {
	$("#showTblContent").hide();
	$("#showThumnail").show();
	$("#btnLarge").addClass("btn-primary");

});

function showThumbnail() {
	$("#showTblContent").hide();
	$("#showThumnail").show();
	$("#btnLarge").addClass("btn-primary");
	$("#btnList").removeClass("btn-primary");
}

function showList(){
	$("#showThumnail").hide();
	$("#showTblContent").show();
	$("#btnList").addClass("btn-primary");
	$("#btnLarge").removeClass("btn-primary");
}
