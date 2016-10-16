
	var defender ;
	var defenderId;
	var imgIndex = 0;
	var enemyName;
	var batmanPower = 10;
	var batmanPowerIncrement = 5;
	var jokerPower = 15;
	var counter = 0;
	var batmanHealth = 80;
	var jokerHealth = 100;

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

				 imgIndex = $("#initialCharacters img").index(this);

				//alert(imgIndex);

				if (imgIndex === 0) {

				// 		var b = $('<button>');
				// b.addClass('letter-button letter letter-button-color');
				// b.data('letter', letters[i]);



    //        			 var newdiv = $('<div>');
    //        			newdiv.add

    //        			defenderSource = $(this).attr('src');
    //        			defenderId = $(this).attr('id');

					 $("#initialCharacters").hide();
					 $("#yourCharacter").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					// $("#yourCharacter").append("batmanDiv");
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

			 		//var enemiesIndex = $("#enemiesAvailable img").index(this);

			 		$(this).hide();

			 		//console.log("this is " + this);
			 		//console.log( "img is " + img);
			 		//$("img").hide();

           	 defender = $("<img>");

           	defenderId = $(this).attr('id');
           	defenderSource = $(this).attr('src');

           	

           	var defender_image_tag = '<img id='+ defenderId + ' src= '+ defenderSource + ' />';

         $("#defender").append(defender_image_tag);

			});


			

		  $("#attack_button").on("click", function()

		  	{ 	
		  		console.log("defenderId is " + defenderId);
		  		console.log("imgIndex is " + imgIndex);

		  	if (defenderId == 'character_img_2' && imgIndex === 0)

	  		{

		  		 enemyName = "Joker";

		  		 totalPower =  batmanPower+(5*counter);

		  		 var newHealthBatman  = batmanHealth-(5*jokerPower);



		  		if (counter == 0) // for initial attack 
		  		{

		   			$("#yourCharacterFight").html("You attacked " + enemyName +"  for "+ batmanPower + " damage");
		   			$("#enemyCharacterFight").html(" " + enemyName + " attacked you for "+ jokerPower + " damage");
		  			
		  		}

		  		if (counter > 0) // for cases when attacked more than once 
		  		{


		   			$("#yourCharacterFight").html("You attacked " + enemyName +"  for "+ totalPower +" damage");
		   			$("#batman_health").html(" " + newHealthBatman +"  ");

		   			$("#enemyCharacterFight").html(" " + enemyName + " attacked you for "+ jokerPower+" damage");
		   			//$("#batman_health").html(" " + enemyName +"  ");
		  			
		  		}

		  		counter++;

		  	}

		  });


	});
