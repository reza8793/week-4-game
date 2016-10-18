// var myGameCharacters = [
// 	$('#gimli.character').data({
// 		health: 150,
// 		name: 'Gimli',
// 		attack: 100
// 	}),
// 	$('#arwen.character').data({
// 		health: 100,
// 		name: 'Arwen',
// 		attack: 455
// 	}),
// 	$('#frodo.character').data({
// 		health: 50,
// 		name: 'Frodo',
// 		attack: 5
// 	})
// ];


$(document).ready(function(){

var myCharacters = [

		 $('#characterDiv-1.col-sm-3').data({

						   name: "Batman",
						   health: 80,
						   attackPower: 10,
						   attackPowerIncrement: 5,
						   image: "batman_attacking.jpg"
		 }),

		 $('#characterDiv-2.col-sm-3').data({

				   name: "Joker",
				   health: 100,
				   attackPower: 15,
				   attackPowerIncrement: 5,
				   image: "joker.jpg"
				
		 	
		 }),

		 $('#characterDiv-3.col-sm-3').data({

				   name: "Superman",
				   health: 150,
				   attackPower: 25,
				   attackPowerIncrement: 5,
				   image: "superman.jpg"


		 }),
					

		$('#characterDiv-4.col-sm-3').data({

				   name: "Scarecrow",
				   health: 60,
				   attackPower: 8,
				   attackPowerIncrement: 5,
				   image: "scarecrow.jpg"


		})				  
	

]



		$('.col-sm-3').on('click',function(){

			alert("i'm inside click");

			
				var $currentCharacter = $(this);
				var characterData = $currentCharacter.data();

				var defender = $("<img>");
  
            	var defenderId = $(this).attr('id');
 	         	var defenderSource = $(this).attr('src');
  
 			
            	var defender_image_tag = '<img id='+ defenderId + ' src= '+ defenderSource + ' />';
				//$("#yourCharacter").append(myCharacters[0]);
				$("#yourCharacter").append(characterData.name); 
				 $("#yourCharacter").append(defender_image_tag);
				$("#yourCharacter").append(characterData.image);
				$("#yourCharacter").append(characterData.health);
	
			});


});




// $('.character').on('click', function() {
// 	var $currentCharacter = $(this);
//   var characterData = $currentCharacter.data();
//   console.log(characterData)
//   $('#output').html(
//   		'<h1>Name: ' + characterData.name +'</h1>' +
//       	'<h2>Attack: ' + characterData.attack +'</h2>'
//   );
// })