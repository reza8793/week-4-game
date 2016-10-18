
	
		var batman = {
				   name: "Batman",
				   health: 80,
				   attackPower: 10,
				   attackPowerIncrement: 5,
				   image: "batman_attacking.jpg",
				   healthIndicator: $("#batman_health"),
				   totalPower: function (counter) 
				   		{
					        return (batman.attackPower+(batman.attackPowerIncrement*counter));
					    }
				};

		var joker = {
		   name: "Joker",
		   health: 100,
		   attackPower: 15,
		   attackPowerIncrement: 5,
		   image: "joker.jpg",
		   healthIndicator: "#joker_health",
		   totalPower: function (counter) 
				   		{
					        return (joker.attackPower+(joker.attackPowerIncrement*counter));
					    }
		};

		var superman = {
		   name: "Superman",
		   health: 150,
		   attackPower: 25,
		   attackPowerIncrement: 5,
		   image: "superman.jpg",
		   healthIndicator: $("#superman_health"),
		   totalPower: function (counter) 
				   		{
					        return (superman.attackPower+(superman.attackPowerIncrement*counter));
					    }
		};

		var scarecrow = {
		   name: "Scarecrow",
		   health: 60,
		   attackPower: 8,
		   attackPowerIncrement: 5,
		   image: "scarecrow.jpg",
		   healthIndicator: $("#scarecrow_health"),
		   totalPower: function (counter) 
				   		{
					        return (scarecrow.attackPower+(scarecrow.attackPowerIncrement*counter));
					    }
		};

function fighting (urCharacter, theDefender,x) 

	{	
		var urCharacterTotalPower = urCharacter.totalPower(x);
		var urCharacterHealth  = urCharacter.health-(x*theDefender.attackPower);
		var theDefenderHealth = theDefender.health-urCharacterTotalPower;

		var urCharacterStatus = $("#yourCharacterFight");
		var theDefenderStatus = $("#enemyCharacterFight");

		var herohealth = $("urCharacter.healthIndicator");
		var defenderhealth = $("theDefender.healthIndicator")

		//console.log(herohealth);
		//console.log(urCharacter.healthIndicator);
		//console.log(defenderhealth);
		//console.log(theDefender.healthIndicator);

		urCharacterStatus.html("You attacked " + theDefender.name +"  for "+ urCharacterTotalPower + " damage");
		
		//(urCharacter.healthIndicator).html(" " + urCharacterHealth +"  ");
		//herohealth.html(" " + urCharacterHealth +"  ");
		console.log(urCharacterHealth);

		theDefenderStatus.html(" " + theDefender.name + " attacked you for "+ theDefender.attackPower + " damage");
		//defenderhealth.html(" " + theDefenderHealth +"  ");
		console.log(theDefenderHealth);


		//$("#joker_health").html(" " + newHealthJoker +"  ");

	}

	var defender ;
	var defenderId;
	var defenderClass;
	var divIndex = 0;
	var enemyName;
	var counter = 0;
	var jokerHealthUpated = 100;
	var divcharacter; 
	var characterId;
	var characterSource;

	var newdiv1;
	var newdiv2;
	var newdiv3;
	var newdiv4;
	var x;

	

	//var y = new Array(batman, joker, superman, scarecrow);// var one = $('#one');
	// var two = $('#two');
	// var three = $('#three');
	// var four = $('#four');


	$(document).ready(function(){

		//x = $(".characterDiv").toArray();

		 x = $(".col-sm-3").toArray();


		function restart_game()

		{
			alert("i'm at restart function!");

			
			// reset back the divs 
			$("#initialCharacters").append(x[0]);
			$("#initialCharacters").append(x[1]);
			$("#initialCharacters").append(x[2]);
			$("#initialCharacters").append(x[3]);
			

			 $("#yourCharacter div").empty();
			 $("#yourCharacterFight").html(" ");
		   	$("#enemyCharacterFight").html(" ");
			 $("#enemiesAvailable div").empty();
			 $("#defender_div div").empty();
			 $("fight_section div").empty();

			// initiate variables
			 $("#batman_health").html(" " + batman.health +"  ");
			 $("#joker_health").html(" " + joker.health +"  ");
			 $("#superman_health").html(" " + superman.health +"  ");
			 $("#scarecrow_health").html(" " + scarecrow.health +"  ");

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

					 $("#initialCharacters").empty();

					  newdiv1 = jQuery(this);
					// console.log(newdiv1);
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
					
					$("#enemiesAvailable").append(x[0]);
					$("#enemiesAvailable").append(x[2]);
					$("#enemiesAvailable").append(x[3]);
			}

			else if (divIndex === 2) {



					 $("#initialCharacters").hide();

					  newdiv3 = jQuery(this);
          			$("#yourCharacter").append(newdiv3);
					 //$("#yourCharacter").append("<img id='character_img_3' src='assets/images/superman.jpg'/>");
					$("#enemiesAvailable").append(x[0]);
					$("#enemiesAvailable").append(x[1]);
					$("#enemiesAvailable").append(x[3]);
					
			}

			else if (divIndex === 3) {

					 $("#initialCharacters").hide();
					  newdiv4 = jQuery(this);
          			$("#yourCharacter").append(newdiv4);
					 //$("#yourCharacter").append("<img id='character_img_4' src='assets/images/scarecrow.jpg'/>");
					$("#enemiesAvailable").append(x[0]);
					$("#enemiesAvailable").append(x[1]);
					$("#enemiesAvailable").append(x[2]);

			}

		});

			 $("#enemiesAvailable").on("click", "div" , function()

			 {

			 	if ( $(this).attr('id') == (x[0].id)) 
			 	{
			 		$("#defender_div").append(x[0]);
			 	}

			 	if ( $(this).attr('id') == (x[1].id)) 
			 	{
			 		$("#defender_div").append(x[1]);
			 	}

			 	if ( $(this).attr('id') == (x[2].id)) 
			 	{
			 		$("#defender_div").append(x[2]);
			 	}

			 	if ( $(this).attr('id') == (x[3].id)) 
			 	{
			 		$("#defender_div").append(x[3]);
			 	}

			 		//$(this).hide();
			 		//var newdiv5= jQuery(this);
			 		//$("#defender_div").append(newdiv5);
			 		//$("#defender_div").append(x[1]);

			 	//	console.log("this for enemies Available" + this);
			 	//	var newArray = new Array (newdiv5);
			 	//	console.log(newdiv5);
			 	//	console.log(x[3].id);
			 	//	console.log($(this).attr('id'));
			 		
     //$("#defender_div").append("<img id='character_img_1' src='assets/images/batman_attacking.jpg'/>");

			 });



		  $("#attack_button").on("click", function()

		  	{ 	

		 	 if ( divIndex === 0 && ($("#defender_div div").attr('id')) ==='characterDiv-2' )
		 		{	
		 		// batman vs joker 
		 		fighting (batman, joker,counter);
		 		counter++;
		 		}

		 	 if ( divIndex === 0 && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 	 {	// batman vs superman 
		 	 	fighting (batman, superman,counter);
		 		counter++;
		 	}

		 	if ( divIndex === 0 && ($("#defender_div div").attr('id')) ==='characterDiv-4' )
		 	{
		 		// batman vs scarecrow 
		 		fighting (batman, scarecrow,counter);
		 		counter++;
		 	}


		 	if ( divIndex === 1 && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 	{// joker vs batman
		 		fighting (joker, batman,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 1 && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 	{// joker vs superman
		 		fighting (joker, superman,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 1 && ($("#defender_div div").attr('id')) ==='characterDiv-4' )

		 	{// joker vs scarecrow
		 		fighting (joker, scarecrow,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 2 && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 	{// superman vs batman
		 		fighting (superman, batman,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 2 && ($("#defender_div div").attr('id')) ==='characterDiv-2' )

		 	{// superman vs joker
		 		fighting (superman, joker,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 2 && ($("#defender_div div").attr('id')) ==='characterDiv-4' )

		 	{// superman vs scarecrow
		 		fighting (superman, scarecrow,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 3 && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 	{// scarecrow vs batman
		 		fighting (scarecrow, batman,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 3 && ($("#defender_div div").attr('id')) ==='characterDiv-2' )

		 	{// scarecrow vs joker
		 		fighting (scarecrow, joker,counter);
		 		counter++;
		 	
		 	}

		 	if ( divIndex === 3 && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 	{// scarecrow vs superman
		 		fighting (scarecrow, superman,counter);
		 		counter++;
		 	
		 	}


		  	// if (x[1].id == 'characterDiv-2' && divIndex === 0)

	  		// {
		  	// 	 var batmanTotalPower = batman.totalPower(counter);
		  		
		  	// 	 console.log("total Power "+ batmanTotalPower);

		  	// 	 var newHealthBatman  = batman.health-(counter*joker.attackPower);

		  	// 	 console.log("joker Health  "+ joker.health);


		  	// 	 var newHealthJoker = jokerHealthUpated-batmanTotalPower;

		  	// 	 jokerHealthUpated = newHealthJoker;


		  	// 	if (counter === 0) // for initial attack 
		  	// 	{	
		  	// 		var urChar = $("#yourCharacterFight");
		  	// 		batman.whateverUWant = $("#yourCharacterFight");

		  	// 		batman.whateverUWant.html("You attacked " + joker.name +"  for "+ batmanTotalPower + " damage");
		   // 			$("#enemyCharacterFight").html(" " + joker.name + " attacked you for "+ joker.attackPower + " damage");

		  	// 	}

		  	// 	if (counter > 0) // for cases when attacked more than once 
		  	// 	{


		   // 			$("#yourCharacterFight").html("You attacked " + joker.name +"  for "+ batmanTotalPower +" damage");
		   // 			$("#batman_health").html(" " + newHealthBatman +"  ");

		   // 			$("#enemyCharacterFight").html(" " + joker.name + " attacked you for "+ joker.attackPower+" damage");
		   // 			$("#joker_health").html(" " + newHealthJoker +"  ");

		   // 			if (newHealthJoker < 0 )
		   // 			{
		   // 				$("#yourCharacterFight").html("You defeated " + joker.name +
		   // 					" You can choose to fight another enemy");
		   // 				$("#enemyCharacterFight").html(" ");
		   				
		   // 			}

		   // 			if (newHealthBatman < 0 )
		   // 			{
		   // 				$("#yourCharacterFight").html("You have been defeated. GAME OVER!!! " );
		   // 				$("#enemyCharacterFight").html(" ");

		   // 			}
		  			
		  	// 	}

		  	// 	counter++;

		  	// }

		  });




		   $("#restart_button").on("click", function()

		  	{ 	
		  		alert("i'm at restart button!");
		  		restart_game();

		  	});



	});
