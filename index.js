$(document).ready(function() {
	var baseIdx = 22.5;
	var running = false;

  $(".draw-btn").on("click", function() {
  	if (!running) {
	  	running = true;
	  	var randomNum =  Math.floor(Math.random() * 8) * 2 + 1;
	  	var resultDeg = baseIdx * randomNum;

	  	$(".pie-container").velocity({rotateZ: resultDeg + 720 + "deg"},
	  		700,
	  		"easeOutQuad",
	  		function() {
	  			running = false;

	  			switch (resultDeg / baseIdx) {
				    case 1:
					    $(".result").text("violet");
			        break;
				    case 3:
					    $(".result").text("blueviolet");
			        break;
				    case 5:
					    $(".result").text("blue");
			        break;
				    case 7:
					    $(".result").text("aquamarine");
			        break;
				    case 9:
					    $(".result").text("lightgreen");
			        break;
				    case 11:
					    $(".result").text("yellow");
			        break;
			      case 13:
				      $(".result").text("orange");
			        break;
			      case 15:
				      $(".result").text("red");
			        break;
			      default:
			      	$(".result").text("Please try again.");
					}
	  		}
  		);
  	}
  });

  $(".reset-btn").on("click", function() {
  	$(".result").text("");
  	$(".pie-container").stop().velocity({rotateZ: 0}, 500, "easeOutQuad");
  });
});
