

	var counter1 = 0; // to get the number of clicks
	var counter2 = 1; // the number of clicks for hero's health variable (see variable urCharacterHealth)
	

	
		var batman = {
			name: "Batman",
			health: 80,
			attackPower: 10,
			attackPowerIncrement: 5,
			image: "batman_attacking.jpg",
			healthIndicator: "#batman_health",
			totalPower: function (counter1) 
				   		{
					        return (batman.attackPower+(batman.attackPowerIncrement*counter1));
					 	}
					};

		var joker = {
		   name: "Joker",
		   health: 100,
		   attackPower: 15,
		   attackPowerIncrement: 5,
		   image: "joker.jpg",
		   healthIndicator: "#joker_health",
		   totalPower: function (counter1) 
				   		{
					        return (joker.attackPower+(joker.attackPowerIncrement*counter1));
					    }
					};

		var superman = {
		   name: "Superman",
		   health: 150,
		   attackPower: 25,
		   attackPowerIncrement: 5,
		   image: "superman.jpg",
		   healthIndicator: "#superman_health",
		   totalPower: function (counter1) 
				   			{
					        return (superman.attackPower+(superman.attackPowerIncrement*counter1));
					   		}
						};

		var scarecrow = {
		   name: "Scarecrow",
		   health: 60,
		   attackPower: 8,
		   attackPowerIncrement: 5,
		   image: "scarecrow.jpg",
		   healthIndicator: "#scarecrow_health",
		   totalPower: function (counter1) 
				   			{
					        return (scarecrow.attackPower+(scarecrow.attackPowerIncrement*counter1));
					    	}
						};

function fighting (urCharacter, theDefender,x,y) 

	{	
		var urCharacterTotalPower = urCharacter.totalPower(x);
		console.log(urCharacterTotalPower);
		var urCharacterHealth  = urCharacter.health-(y*theDefender.attackPower);

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
		defenderhealth.html(" " + theDefenderHealth +"  ");

		theDefenderStatus.html(" " + theDefender.name + " attacked you for "+ theDefender.attackPower + " damage");
		herohealth.html(" " + urCharacterHealth +"  ");



		if (urCharacterHealth <=0) // lose scenario
		 {
		   	urCharacterStatus.html("You have been defeated. GAME OVER!!! " );
		   	theDefenderStatus.html("");		
		   	$("#restart_button").show();	
		 }

		 if (theDefenderHealth <=0)	// win scenario 
		 {	
		 	
		   	urCharacterStatus.html("You defeated " + theDefender.name +" You can choose to fight another enemy");
		   	theDefenderStatus.html("");	
		   	$("#defender_div").empty();

		   	// after hero wins one game, he needs to defeat two more chars
		   	// setting counter2 to zero for those cases
		   	 counter2 = 0;
		   	 urCharacter.health = urCharacterHealth;
		   		
		   		if(  $('#enemiesAvailable div').length === 0 ) 
		   		{		
		   			
		   			urCharacterStatus.html("You won !!! GAME OVER !!!! ");
		   			theDefenderStatus.html("");	
		   			$("#restart_button").show();
		   		}			
		 }

		   
	}


	function resetHealth (a,b,c,d,e)
	{

		a.health = 80;
		
		b.health = 100;
		
		c.health = 150;
		
		d.health = 60;
		//d.totalPower = d.totalPower(e);
	}

	

	
	$(document).ready(function(){

		$("#restart_button").hide();

		
		function restart_game()

		{
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
			 //console.log(resetHealth);
			 counter1 = 0;
			 counter2 = 1;
			 console.log(batman);

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

		  		if(  $('#defender_div div').length === 0 ) 
		   		{		
		   			$("#yourCharacterFight").html("No enemy here ");
					$("#enemyCharacterFight").html("");

		   		}	

		 	 if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-1' && ($("#defender_div div").attr('id')) ==='characterDiv-2' )
		 		{	
		 		// batman vs joker 
		 		fighting (batman, joker,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}

		 	 if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-1' && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 	 	{	// batman vs superman 
		 	 	fighting (batman, superman,counter1,counter2);
		 		counter1++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-1' && ($("#defender_div div").attr('id')) ==='characterDiv-4' )
		 		{
		 		// batman vs scarecrow 
		 		fighting (batman, scarecrow,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}


		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-2'&& ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 		{// joker vs batman
		 		fighting (joker, batman,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-2' && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 		{// joker vs superman
		 		fighting (joker, superman,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-2'&& ($("#defender_div div").attr('id')) ==='characterDiv-4' )

		 		{// joker vs scarecrow
		 		fighting (joker, scarecrow,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-3' && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 		{// superman vs batman
		 		fighting (superman, batman,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-3'&& ($("#defender_div div").attr('id')) ==='characterDiv-2' )

		 		{// superman vs joker
		 		fighting (superman, joker,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-3'&& ($("#defender_div div").attr('id')) ==='characterDiv-4' )

		 		{// superman vs scarecrow
		 		fighting (superman, scarecrow,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-4' && ($("#defender_div div").attr('id')) ==='characterDiv-1' )

		 		{// scarecrow vs batman
		 		fighting (scarecrow, batman,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 	
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-4' && ($("#defender_div div").attr('id')) ==='characterDiv-2' )

		 		{// scarecrow vs joker
		 		fighting (scarecrow, joker,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 		}

		 	if ( ($("#yourCharacter div").attr('id')) === 'characterDiv-4' && ($("#defender_div div").attr('id')) ==='characterDiv-3' )

		 		{// scarecrow vs superman
		 		fighting (scarecrow, superman,counter1,counter2);
		 		counter1++;
		 		counter2++;
		 	
		 		}
		  });




		   $("#restart_button").on("click", function()

		  	{ 	
		  		restart_game();

		  	});

	});
