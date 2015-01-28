$(document).ready(function() {

$("#evenColorChanger").on("submit", function(e){
	
	e.preventDefault();
	var evenColor = $("#even-color").val();
	


	$("tbody tr:nth-child(even), tfoot tr").css("background-color", evenColor);
	
	$("#color-input").val("");

});







$("#oddColorChanger").on("submit", function(e){
	
	e.preventDefault();
	var oddColor = $("#odd-color").val();
	


	$("tbody tr:nth-child(odd)").css("background-color", oddColor);
	$("#color-input2").val("");

});
});