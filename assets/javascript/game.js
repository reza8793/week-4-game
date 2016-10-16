
	var defender ;

	$(document).ready(function(){

		// function update_divs(x) 

		// {
		// 	 $("#initialCharacters").hide();
		// 		$("#yourCharacter").append("<img id='character_img_'+x src='assets/images/batman_attacking.jpg'/>");
		// 		$("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
		// 		$("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
		// 		$("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");

		// }

			$("#initialCharacters img").on("click", function(){

				var imgIndex = $("#initialCharacters img").index(this);

				alert(imgIndex);

				if (imgIndex === 0) {

					 $("#initialCharacters").hide();
					 $("#yourCharacter").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					
			}

			else if (imgIndex === 1) {

					 $("#initialCharacters").hide();
					 $("#yourCharacter").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					
			}

			else if (imgIndex === 2) {

					 $("#initialCharacters").hide();
					 $("#yourCharacter").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					
			}

			else if (imgIndex === 3) {

					 $("#initialCharacters").hide();
					 $("#yourCharacter").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					
			}

		});



			 $("#enemiesAvailable").on("click", "img", function(){

			 		var enemiesIndex = $("#enemiesAvailable img").index(this);

           	var defender = $("<img>");

           	defenderId = $(this).attr('id');
           	defenderSource = $(this).attr('src');

           	console.log(defenderId);
           	console.log(defenderSource);

           	var defender_image_tag = '<img id='+ defenderId + ' src= '+ defenderSource + ' />';

         $("#defender").append(defender_image_tag);

        // $("#enemiesAvailable").remove(enemiesIndex);

         
			
			});

	});
