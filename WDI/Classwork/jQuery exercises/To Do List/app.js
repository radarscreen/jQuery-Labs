// $(document).ready(function() {


// 	// $("#do").on("submit", function(event){

// $("#do").on("submit", function (e){
//    e.preventDefault();

// 	var addedText = $("#add").val();

// $(".new-list").append("<li class='strikethrough'>" + addedText + "<input class='checked' type='checkbox'></li>");
// $("#add").val("");

// 	//<input type='button' class='remove'>");
// });

		



// 	});


// });



$(document).ready(function () {

	$("#to-do").on("submit", function (e) {

		e.preventDefault();

		var newItem = $("#add").val();

		$(".new-list").append("<li class = 'items'>" + newItem + "<input id='check' type='checkbox'></li>"); 
		$("#add").val("");
	});
	
	$('body').on("click", "input[type=checkbox]", function(){  
		//add strikethourgh to li text

		$(this).css("text-decoration", "line-through");

		//toggleClass to remove strikethrough

	});

	
});

