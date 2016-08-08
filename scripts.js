$(function() {

	//DECLARE VARIABLES
	var diva = {
		
		mariah: {
			points:0,
			name:'Mariah',
			description:'Your life is one hell of a fantasy. And why not? You’ve got a five-octave vocal range and Guinness World Records refers to you as the “songbird supreme.” A long trail of wannabes have been left in your wake. If anyone could shove a new pop song into the traditional Christmas canon, it’s you. And of course you’ll be doing it dressed in the skimpiest Santa costume imaginable. Sure, every now and then some heartbreaker will get the best of you, but you know how to shake it off. Marriages might not last but diamonds are forever. Just make those diamonds 35-carats or higher, please.',
			image: '<img src="images/mariah.gif">',
			percentage: function() {
				return (this.points / 10) * 100 + '%';
			}
		},
		beyonce:{
			points:0,
			name:'Beyonce',
			description:'Bow down, bitches. Everybody knows you run the world. You’ve been hustling hard to reach the top and you are not about to apologize for enjoying the view. You’re not above sharing it either though. Your girls will always be your girls. You inspire fierce loyalty in your many admirers and whatever enemies you might have collected along the way know damn well by now to keep their heads (and their good hair) down when you sashay past. Long live the Queen.',
			image: '<img src="images/beyonce1.gif">',
			percentage: function() {
				return (this.points / 10) * 100 + '%';
			}
		},
		drake: {
			points:0,
			name:'Drake',
			description:'Appearance isn’t everything, but not to you - you Drake Diva! You take pride in your appearance, and make that extra effort to ensure when that ‘Hotline Bling’ you’re ready for the next adventure. You are a loyal friend because you’ve "Started from the Bottom" and found your way on-top, so you definitely appreciate good company. Night glamor is your thing, and you’ve been known to carry along trimmers, lint brushes, four dozen natural-scented incense sticks, and extra speakers with you at all times. No exceptions.',
			image: '<img src="images/drake.gif">',
			percentage: function() {
				return (this.points / 10) * 100 + '%';
			}
		},
		rihanna:{
			points:0,
			name:'Rihanna',
			description:'As defined by your bestie,a Diva; “is a female version of a hustler.” Many would describe you as a hard worker with your own vision of success. You are not shy of the spot-light, and like to shine bright like a "Diamond" with your experimental self-expression and sexuality. You are not usually outspoken unless a "Rude Boy" offends you and that’s usually when the gloves come off.',
			image: '<img src="images/rihanna.gif">',
			percentage: function() {
				return (this.points / 10) * 100 + '%';
			}
		},
		neutral:{
			name: 'Neutral',
			points:0,
			description: "Get off the stage!"
		}	
	};
		//When submit button is pressed
	$('form').on('submit', function(event) {

		//Prevent default
		event.preventDefault();

		//clear allMatches array
		var allMatches = [];
		//remove any previous revealDiva info
		$('.revealDiva').children('ul').remove();

		//Store the value attribute for the checked option of each question
		var choiceOne = $("input[name=questionOne]:checked").val();

		var choiceTwo = $("input[name=questionTwo]:checked").val();

		var choiceThree = $("input[name=questionThree]:checked").val();

		var choiceFour = $("input[name=questionFour]:checked").val();

		var choiceFive = $("input[name=questionFive]:checked").val();

		var choiceSix = $("input[name=questionSix]:checked").val();

		var choiceSeven = $("input[name=questionSeven]:checked").val();

		var choiceEight = $("input[name=questionEight]:checked").val();

		var choiceNine = $("input[name=questionNine]:checked").val();

		var choiceTen = $("input[name=questionTen]:checked").val();


		// Find the matching diva within the diva object for each question
		var divaMatchOne = diva[choiceOne];

		//Update the points property for each question
		if(divaMatchOne.name === 'Neutral') {
			divaMatchOne.points = 0;
		} else {
			divaMatchOne.points = divaMatchOne.points + 1;
		}
		// end Question One


		var divaMatchTwo = diva[choiceTwo];
		//update the points property
		if(divaMatchTwo.name === 'Neutral') {
			divaMatchTwo.points = 0;
		} else {
			divaMatchTwo.points = divaMatchTwo.points + 1;
		}
		// end Question Two

		var divaMatchThree = diva[choiceThree];
		//update the points property
		if(divaMatchThree.name === 'Neutral') {
			divaMatchThree.points = 0;
		} else {
			divaMatchThree.points = divaMatchThree.points + 1;
		}
		// end Question Two

		var divaMatchFour = diva[choiceFour];
		//update the points property
		if(divaMatchFour.name === 'Neutral') {
			divaMatchFour.points = 0;
		} else {
			divaMatchFour.points = divaMatchFour.points + 1;
		}
		// end Question Four

		var divaMatchFive = diva[choiceFive];
		//update the points property
		if(divaMatchFive.name === 'Neutral') {
			divaMatchFive.points = 0;
		} else {
			divaMatchFive.points = divaMatchFive.points + 1;
		}
		// end Question Five

		var divaMatchSix = diva[choiceSix];
		//update the points property
		if(divaMatchSix.name === 'Neutral') {
			divaMatchSix.points = 0;
		} else {
			divaMatchSix.points = divaMatchSix.points + 1;
		}
		// end Question Six

		var divaMatchSeven = diva[choiceSeven];
		//update the points property
		if(divaMatchSeven.name === 'Neutral') {
			divaMatchSeven.points = 0;
		} else {
			divaMatchSeven.points = divaMatchSeven.points + 1;
		}
		// end Question Seven

		var divaMatchEight = diva[choiceEight];
		//update the points property
		if(divaMatchEight.name === 'Neutral') {
			divaMatchEight.points = 0;
		} else {
			divaMatchEight.points = divaMatchEight.points + 1;
		}
		// end Question Eight

		var divaMatchNine = diva[choiceNine];
		//update the points property
		if(divaMatchNine.name === 'Neutral') {
			divaMatchNine.points = 0;
		} else {
			divaMatchNine.points = divaMatchNine.points + 1;
		}
		// end Question Nine

		var divaMatchTen = diva[choiceTen];
		//update the points property
		if(divaMatchTen.name === 'Neutral') {
			divaMatchTen.points = 0;
		} else {
			divaMatchTen.points = divaMatchTen.points + 1;
		}
		// end Question Ten

		//Create variable to store highest points total(s)
		var highestMatch = {
			points: 0
		}
		//Go through diva object and find diva with the highest points total(s)
		for(key in diva){
			if(diva[key].points >= highestMatch.points){
				highestMatch = diva[key];
			}
		}
		console.log(highestMatch.points);

		//Check if user chose "Neutral" for every answer
		if(highestMatch.points === 0) {
			allMatches.push(diva.neutral);
			//Display "Get off the stage" message to non-diva
			var divaChoice = $('<ul class="divaResult' + i +'"></ul>').append("You are 0% diva. Get off the stage!");
			$('.revealDiva').append(divaChoice);
		} else {
		// Loop through again and add all divas with the highest points total(s) to allMatches variable(which has an array value)
			for(match in diva) {
				if (diva[match].points === highestMatch.points){
					allMatches.push(diva[match]);
				} /*ends IF*/
			} /*ends FOR*/

			// For allMatches check if there is more then one diva in allMatches
			for(var i = 0; i < allMatches.length; i = i + 1){

				//Store diva name, percentage, description, and image for all divas with highest point totals
				var allNames = allMatches[i].name;
				var allPercentages = allMatches[i].percentage();
				var allDescriptions = allMatches[i].description;
				var allImages = allMatches[i].image;

				//Store list items of text, percentage, name, description, and image
				var text = $('<li>').text('YOU ARE ...')
				var names = $('<li>').text(allNames);
				var percentages = $('<li>').text(allPercentages);
				var descriptions = $('<li>').text(allDescriptions);
				var images = $('<li">').html(allImages);

				//Create <ul> for each diva to display all info to user
				var divaChoice = $('<ul class="divaResult' + i +'"></ul>').append(text, percentages, names, descriptions, images);
				$('.revealDiva').append(divaChoice);
			} /*ends FOR*/
		} /*ends ELSE*/
		// CHANGE ENDS HERE

		//Modal box appears with info
		var revealDiva = document.getElementById('revealDiva');
		revealDiva.style.display = 'block';
		// When the user clicks on <span> (x), close the modal
		$('.closeDiva').on('click', function() {
			console.log("closeDiva");
			//Reset points to 0
			for(key in diva){
				diva[key].points = 0;
				console.log(diva[key].points);
			}
			//removed checked options
			$('input:checked').removeAttr('checked');
			//Remove revealDiva box
		    revealDiva.style.display = "none";
		});
	}); //form submit end
}); //function ready end