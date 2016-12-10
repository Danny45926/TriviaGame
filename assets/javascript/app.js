 // Need a start button that starts the game and redirects user to the next page
 // List of multiple choice questions are displayed on the page
 // The player has a limited amount of time to finish the quiz
 // The player is only allowed to choose one answer for every quetion
 // Need a key that hosts the correct answer for each question
 // Need a variable to count the amount of right, wrong, and unanswered questions

  $(document).ready(function() {

  // This function starts the game when the button is pressed

    var form = {
    	questions: [
    	{
    		question: "Which Artist Is Number #1 On The List For 250 Million Or More Records Sold?",
    		options: ["Michael Jackson", "Elvis Presley", "The Beatles", "Madonna"],
  			answer: 2,
    	}, {
    		question: "Who IS/WAS Nicknamed 'The King of R&B?'",
    		options: ["Usher", "R. Kelly", "Brian McKnight", "Maxwell"],
    		answer: 1,
    	}, {
    		question: "What Was Michael Jackson's Biggest Song Of All Time?",
    		options: ["Billie Jean", "Don't Stop 'Til You Get Enough", "Man In The  Mirror", "Thriller"],
    		answer: 3,
    	}, {
    		question: "When was the song 'Don't Stop Believin' by Journey released?",
    		options: ["1981", "1985", "1979", "1991"],
    		answer: 0,
    	}, {
    		question: "Which Hip-Hop/Rap Group Released The First Hip-Hop Song 'Rappers Delight'?",
    		options: ["Public Enemy", "N.W.A", "Run-D.M.C.", "The Sugarhill Gang"],
    		answer: 3,
    	}
    	]
	};	
  

  	window.onload = function() {
  		$("#start").on("click", counter.start);
  		$("#reset").on("click", counter.reset);
  	};


  	// Variable that will hold our setInterval that runs the countDown
  	var countDown;
  	
  	// Countdown object
  	var counter = {

  		time: 120,

  		reset: function () {
  			counter.time = 120;

  			$("#display").html("02:00")
  		},

  		start: function() {
  			$("#start").hide();
  			countDown = setInterval(counter.count, 1000);


  			for (var i = 0; i < form.questions.length; i++){
  				$("#questions").append(form.questions[i].question + "<br>");

  				for(var j = 0; j < form.questions[i].options.length; j++){
  					var choice = $("<input>");

	  				choice.attr("type", "radio");

	  				// if(form.questions[i] = 0) {
	  				// choice.attr("name", "artist");
	  				// }else if(form.questions[i] = 1) {
	  				// choice.attr("name", "singer");
	  				// }else if(form.questions[i] = 2) {
	  				// choice.attr("name", "song");
	  				// }else if(form.questions[i] = 3) {
	  				// choice.attr("name", "year");	
	  				// }else if(form.questions[i] = 4) {
	  				// choice.attr("name", "band");	
	  				// }
	  				choice.attr("name", "artist");
	  				choice.val(form.questions[i].options[j]);

	  				$("#questions").append(choice).append(form.questions[i].options[j] + "<br>");
  				};
  			}
  			checkAnswer();

  		},

  		count: function() {
  			counter.time--;

  			var converted = counter.timeConverter(counter.time);

  			$("#display").html("<h1> Music Trivia </h1>" + "<br>" + "Time Remaining: " + converted);

  			 // Stops the countDown when the time is up
  			 if(countDown <= 0) {
  				clearInterval(countDown);
  			}
  		},

  		timeConverter: function(t) {

	    var minutes = Math.floor(t / 60);
	    var seconds = t - (minutes * 60);

	    if (seconds < 10) {
	      seconds = "0" + seconds;
	    }

	    if (minutes === 0) {
	      minutes = "00";
	    }
	    else if (minutes < 10) {
	      minutes = "0" + minutes;
	    }

	    return minutes + ":" + seconds;
  		}
  	}

  	var checkedValue = "";
  	var 
  	checkedValue = $("input").on("click", function () {
  			console.log($("input[name='artist']:checked").val());
  		});	

  	function checkAnswer() {
  		// if (checkedValue === form.questions[i].answer) {
  		// 	correctAnswer++;
  		// }else if (checkedValue != form.questions[i].answer){
  		// 	wrongAnswer++;
  		// }else{
  		// 	unanswered++;
  		// }
  		console.log($(":selected"));
  	}



  

  });