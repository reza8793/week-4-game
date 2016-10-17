
	var defender ;
	var defenderId;
	var defenderClass;
	var divIndex = 0;
	var enemyName;
	var batmanPower = 10;
	var batmanPowerIncrement = 5;
	var jokerPower = 15;
	var counter = 0;
	var batmanHealth = 80;
	var jokerHealth = 100;
	var divcharacter; 
	var characterId;
	var characterSource;

	var newdiv1;
	var newdiv2;
	var newdiv3;
	var newdiv4;

	var x;

	// var one = $('#one');
	// var two = $('#two');
	// var three = $('#three');
	// var four = $('#four');


	$(document).ready(function(){

		//x = $(".characterDiv").toArray();

		 x = $(".col-sm-3").toArray();


		function restart_game()

		{
			alert("i'm at restart function!");

			// initiate variables
			// reset back the divs 

			// $("#initialCharacters").append(x[0]);

			 $("#initialCharacters").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");

			 $("#yourCharacter").hide();
			 $("#initialCharacters").append(x[1]);
			 $("#initialCharacters").append(x[2]);
			 $("#initialCharacters").append(x[3]);



			// $("#enemiesAvailable").hide();
			// $("#defender_div").hide();
			// $("fight_section").hide();

		}

		// function update_divs(x) 

		// {
		// 	 $("#initialCharacters").hide();
		// 		$("#yourCharacter").append("<img id='character_img_'+x src='assets/images/batman_attacking.jpg'/>");
		// 		$("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
		// 		$("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
		// 		$("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");

		// }

		

			$("#initialCharacters").on("click", "div", function(){

				

				 divIndex = $("#initialCharacters div").index(this);


				if (divIndex === 0) {

					 $("#initialCharacters").hide();

					  newdiv1 = jQuery(this);
					 console.log(newdiv1);
          			$("#yourCharacter").append(newdiv1);

					// $("#yourCharacter").append("batmanDiv");
					$("#enemiesAvailable").append(x[1]);
					$("#enemiesAvailable").append(x[2]);
					$("#enemiesAvailable").append(x[3]);

					 // $("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					  // $("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					  // $("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					
			}

			else if (divIndex === 1) {

					 $("#initialCharacters").hide();

					  newdiv2 = jQuery(this);
          			$("#yourCharacter").append(newdiv2);
					// $("#yourCharacter").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					
			}

			else if (divIndex === 2) {



					 $("#initialCharacters").hide();

					  newdiv3 = jQuery(this);
          			$("#yourCharacter").append(newdiv3);
					 //$("#yourCharacter").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					
			}

			else if (divIndex === 3) {

					 $("#initialCharacters").hide();
					  newdiv4 = jQuery(this);
          			$("#yourCharacter").append(newdiv4);
					 //$("#yourCharacter").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_2' src='assets/images/joker.jpg'/>");
					 $("#enemiesAvailable").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					
			}

		});



			 $("#enemiesAvailable").on("click", "div" , function()

			 {

			 	alert("i'm inside enemy available");

			 
			 		//$(this).hide();
			 		var newdiv5= jQuery(this);
			 		//$("#defender_div").append(newdiv5);
			 		$("#defender_div").append(x[1]);
			 		//$(this).hide();

			 	//	console.log("this for enemies Available" + this);
			 	//	var newArray = new Array (newdiv5);
			 		console.log(newdiv5);
			 		console.log(x[3]);
			 		
     //$("#defender_div").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");

			 });


			

		  $("#attack_button").on("click", function()

		  	{ 	
		  		console.log("defenderId is " + defenderId);
		  		console.log("divIndex is " + divIndex);

		  	//if (defenderId == 'character_img_2' && divIndex === 0)

		  	if (x[1].id == 'characterDiv-2' && divIndex === 0)

	  		{

		  		 enemyName = "Joker";

		  		 totalPower =  batmanPower+(5*counter);

		  		 console.log("total Power "+ totalPower);

		  		 var newHealthBatman  = batmanHealth-(counter*jokerPower);

		  		 console.log("joker Health  "+ jokerHealth);



		  		 var newHealthJoker = jokerHealth-totalPower;

		  		 jokerHealth = newHealthJoker;


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
		   			$("#joker_health").html(" " + newHealthJoker +"  ");

		   			if (newHealthJoker < 0 )
		   			{
		   				$("#yourCharacterFight").html("You defeated " + enemyName +
		   					" You can choose to fight another enemy");
		   				$("#enemyCharacterFight").html(" ");
		   				
		   			}

		   			if (newHealthBatman < 0 )
		   			{
		   				$("#yourCharacterFight").html("You have been defeated. GAME OVER!!! " );
		   				$("#enemyCharacterFight").html(" ");

		   			}
		  			
		  		}

		  		counter++;

		  	}

		  });




		   $("#restart_button").on("click", function()

		  	{ 	
		  		alert("i'm at restart button!");
		  		restart_game();

		  	});



	});
