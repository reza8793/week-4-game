

	var counter = 0;
	var jokerHealthUpated = 100;
	var divcharacter; 
	
	
	
		var batman = {
				   name: "Batman",
				   health: 80,
				   attackPower: 10,
				   attackPowerIncrement: 5,
				   image: "batman_attacking.jpg",
				   healthIndicator: "#batman_health",
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
		   healthIndicator: "#superman_health",
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
		   healthIndicator: "#scarecrow_health",
		   totalPower: function (counter) 
				   		{
					        return (scarecrow.attackPower+(scarecrow.attackPowerIncrement*counter));
					    }
		};

function fighting (urCharacter, theDefender,x) 

	{	
		var urCharacterTotalPower = urCharacter.totalPower(x);
		console.log(urCharacterTotalPower);
		var urCharacterHealth  = urCharacter.health-(x*theDefender.attackPower);
		var theDefenderHealth = theDefender.health-urCharacterTotalPower;
			theDefender.health = theDefenderHealth;

		var urCharacterStatus = $("#yourCharacterFight");
		var theDefenderStatus = $("#enemyCharacterFight");
		console.log(urCharacterStatus);
		console.log(theDefenderStatus);


		var herohealth = $(urCharacter.healthIndicator);
		var defenderhealth = $(theDefender.healthIndicator);

		// console.log(herohealth);
		// console.log(defenderhealth);
		// console.log(urCharacterHealth);
		// console.log(theDefenderHealth);

		urCharacterStatus.html("You attacked " + theDefender.name +"  for "+ urCharacterTotalPower + " damage");
		herohealth.html(" " + urCharacterHealth +"  ");

		theDefenderStatus.html(" " + theDefender.name + " attacked you for "+ theDefender.attackPower + " damage");
		defenderhealth.html(" " + theDefenderHealth +"  ");


		if (urCharacterHealth <0) // lose scenario
		 {
		   	urCharacterStatus.html("You have been defeated. GAME OVER!!! " );
		   	theDefenderStatus.html("");		
		   	$("#restart_button").show();	
		 }

		 if (theDefenderHealth <0)	// win scenario 
		 {
		   	urCharacterStatus.html("You defeated " + theDefender.name +" You can choose to fight another enemy");
		   	theDefenderStatus.html("");	
		   	$("#defender_div").empty();
		   
		   	// if ($("#enemiesAvailable").empty() == true)
		   				
		   	// 	{
		   	// 		urCharacterStatus.html("You won !!! GAME OVER !!!! ");
		   	// 		theDefenderStatus.html("");	
		   	// 		$("#restart_button").show();
		   	// 	}			
		 }

		   // 			if (newHealthBatman < 0 )
		   // 			{
		   // 				$("#yourCharacterFight").html("You have been defeated. GAME OVER!!! " );
		   // 				$("#enemyCharacterFight").html(" ");



	}


	function resetHealth (a,b,c,d,e)
	{

		a.health = 80;
		a.totalPower(e);

		b.health = 100;
		b.totalPower(e);

		c.health = 150;
		c.totalPower(e);

		d.health = 60;
		d.totalPower(e);
	}

	

	
	$(document).ready(function(){

		$("#restart_button").hide();

		
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


			 resetHealth(batman,joker,superman,scarecrow,0);

			// initiate variables
			 $("#batman_health").html(" " + batman.health +"  ");
			 $("#joker_health").html(" " + joker.health +"  ");
			 $("#superman_health").html(" " + superman.health +"  ");
			 $("#scarecrow_health").html(" " + scarecrow.health +"  ");

		}

		var x = $(".col-sm-3").toArray();

	
			$("#initialCharacters").on("click", "div", function(){

				if ( $(this).attr('id') == (x[0].id)) 
			 	{
			 		$("#yourCharacter").append(x[0]).addClass('red-color');
			 		$("#enemiesAvailable").append(x[1]);
					$("#enemiesAvailable").append(x[2]);
					$("#enemiesAvailable").append(x[3]);
			 	}

			 	if ( $(this).attr('id') == (x[1].id)) 
			 	{
			 		$("#yourCharacter").append(x[1]);
			 		$("#enemiesAvailable").append(x[0]);
					$("#enemiesAvailable").append(x[2]);
					$("#enemiesAvailable").append(x[3]);
			 	}

			 	if ( $(this).attr('id') == (x[2].id)) 
			 	{
			 		$("#yourCharacter").append(x[2]);
			 		$("#enemiesAvailable").append(x[0]);
					$("#enemiesAvailable").append(x[1]);
					$("#enemiesAvailable").append(x[3]);
			 	}

			 	if ( $(this).attr('id') == (x[3].id)) 
			 	{
			 		$("#yourCharacter").append(x[3]);
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

			 });	


		  $("#attack_button").on("click", function()

		  	{ 	

		 	 if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-1' && ($("#defender_div div").attr('id')) ==='characterDiv-2' )
		 		{	
		 		// batman vs joker 
		 		fighting (batman, joker,counter);
		 		counter++;
		 		}

		 	 if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-1' && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 	 	{	// batman vs superman 
		 	 	fighting (batman, superman,counter);
		 		counter++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-1' && ($("#defender_div div").attr('id')) ==='characterDiv-4' )
		 		{
		 		// batman vs scarecrow 
		 		fighting (batman, scarecrow,counter);
		 		counter++;
		 		}


		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-2'&& ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 		{// joker vs batman
		 		fighting (joker, batman,counter);
		 		counter++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-2' && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 		{// joker vs superman
		 		fighting (joker, superman,counter);
		 		counter++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-2'&& ($("#defender_div div").attr('id')) ==='characterDiv-4' )

		 		{// joker vs scarecrow
		 		fighting (joker, scarecrow,counter);
		 		counter++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-3' && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 		{// superman vs batman
		 		fighting (superman, batman,counter);
		 		counter++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-3'&& ($("#defender_div div").attr('id')) ==='characterDiv-2' )

		 		{// superman vs joker
		 		fighting (superman, joker,counter);
		 		counter++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-3'&& ($("#defender_div div").attr('id')) ==='characterDiv-4' )

		 		{// superman vs scarecrow
		 		fighting (superman, scarecrow,counter);
		 		counter++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-4' && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 		{// scarecrow vs batman
		 		fighting (scarecrow, batman,counter);
		 		counter++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-4' && ($("#defender_div div").attr('id')) ==='characterDiv-2' )

		 		{// scarecrow vs joker
		 		fighting (scarecrow, joker,counter);
		 		counter++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-4' && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

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
