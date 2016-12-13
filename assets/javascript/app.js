 // Need a start button that starts the game and redirects user to the next page
 // List of multiple choice questions are displayed on the page
 // The player has a limited amount of time to finish the quiz
 // The player is only allowed to choose one answer for every quetion
 // Need a key that hosts the correct answer for each question
 // Need a variable to count the amount of right, wrong, and unanswered questions
  	$("#reset").hide();
  	$("#game").hide();
  // $(window).on("load",function(){
  // 	$("#reset").hide();
  // 	$("#game").hide();
  // }) 

  $(document).ready(function() {


  // $("#reset").hide();
  // $("#questions").hide();


  // This function starts the game when the button is pressed

    
    var questions =  [
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
    ];


  	// Variable that will hold our setInterval that runs the countDown
  	var countDown;
  	var choice;

  	// Countdown object
  	var counter = {

  		time: 10,

  		reset: function () {
  			counter.time = 120;
  			counter.start;

  			$("#display").html("02:00")

  		},

  		start: function() {
  			$("#start").hide();
  			$("#reset").show();
  			$("#game").show();
  			countDown = setInterval(counter.count, 1000);

  			// for (var i = 0; i < questions.length; i++){
  			// 	$("#list").append(questions[i].question + "<br>");

  			// 	for(var j = 0; j < questions[i].options.length; j++){
  			// 		choice = $("<input id='options'>");

	  		// 		choice.attr("type", "radio");

	  		// 		// if(form.questions[i] = 0) {
	  		// 		// choice.attr("name", "artist");
	  		// 		// }else if(form.questions[i] = 1) {
	  		// 		// choice.attr("name", "singer");
	  		// 		// }else if(form.questions[i] = 2) {
	  		// 		// choice.attr("name", "song");
	  		// 		// }else if(form.questions[i] = 3) {
	  		// 		// choice.attr("name", "year");	
	  		// 		// }else if(form.questions[i] = 4) {
	  		// 		// choice.attr("name", "band");	
	  		// 		// }

	  		// 		choice.attr("name", "artist");
	  		// 		choice.val(questions[i].options[j]);

	  		// 		$("#questions").append(choice).append(questions[i].options[j] + "<br>");
  			// 	};

  			// }
  		},

  		count: function() {
  			counter.time--;

  			var converted = counter.timeConverter(counter.time);

  			$("#display").html("<br>" + "Time Remaining: " + converted);
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
  		},
  	}

  	$("#start").on("click", counter.start);
  	$("#reset").on("click", counter.reset);

  	var correctCounter = 0;
  	var incorrectCounter = 0;
  	var unansweredCounter = 0;

  	$("#q1").on("click", "input", function () {
  		var checkVal = ($(this).val()); 
  		var userGuess = checkVal;
	  	console.log(userGuess);
	  	var questionOne = $("input[name='artist']:checked").val();

	  	if(questionOne == "The Beatles") {
	  		correctCounter++;
	  		console.log(correctCounter);
	  	}else if(questionOne != "The Beatles"){
	  		incorrectCounter++;
	  		console.log(incorrectCounter)
	  	}else if(questionOne == ""){
	  		unansweredCounter++;
	  	}
	  });
  	 $("#q2").on("click", "input", function () {
  		var checkVal = ($(this).val()); 
  		var userGuess = checkVal;
	  	console.log(userGuess);
	  	var questionTwo = $("input[name='artist']:checked").val();

	  	if(questionTwo == "R. Kelly") {
	  		correctCounter++;
	  		console.log(correctCounter);
	  	}else if(questionTwo != "R. Kelly"){
	  		incorrectCounter++;
	  		console.log(incorrectCounter)
	  	}else if(questionTwo == ""){
	  		unansweredCounter++;
	  	}
	  });
  	 $("#q3").on("click", "input", function () {
  		var checkVal = ($(this).val()); 
  		var userGuess = checkVal;
	  	console.log(userGuess);
	  	var questionThree = $("input[name='song']:checked").val();

	  	if(questionThree == "Thriller") {
	  		correctCounter++;
	  		console.log(correctCounter);
	  	}else if(questionThree != "Thriller"){
	  		incorrectCounter++;
	  		console.log(incorrectCounter)
	  	}else if(questionThree == ""){
	  		unansweredCounter++;
	  	}
	  });
  	 $("#q4").on("click", "input", function () {
  		var checkVal = ($(this).val()); 
  		var userGuess = checkVal;
	  	console.log(userGuess);
	  	var questionFour = $("input[name='year']:checked").val();

	  	if(questionFour == "1981") {
	  		correctCounter++;
	  		console.log(correctCounter);
	  	}else if(questionFour != "1981"){
	  		incorrectCounter++;
	  		console.log(incorrectCounter)
	  	}else if(questionFour == ""){
	  		unansweredCounter++;
	  	}
	  });
  	  	 $("#q5").on("click", "input", function () {
  		var checkVal = ($(this).val()); 
  		var userGuess = checkVal;
	  	console.log(userGuess);
	  	var questionFive = $("input[name='band']:checked").val();

	  	if(questionFive == "The Sugarhill Gang") {
	  		correctCounter++;
	  		console.log(correctCounter);
	  	}else if(questionFive != "The Sugarhill Gang"){
	  		incorrectCounter++;
	  		console.log(incorrectCounter)
	  	}else if(questionFive == ""){
	  		unansweredCounter++;
	  	}
	  });

  	
  	$("#submit").on("click", function () {
  		$("#game").hide()
  		$("#display").hide();
  		$("#main").append("Correct: " + correctCounter + "<br>");
  		$("#main").append("Incorrect: " + incorrectCounter + "<br>");
  		$("#main").append("Unanswered: " + unansweredCounter);
  	})



  	function display() {
  		if(converted=0) {
  			$("#game").hide();
  			$("#display").hide();
  			$("#main").append("Correct: " + correctCounter + "<br>");
  			$("#main").append("Incorrect: " + incorrectCounter + "<br>");
  		}
  	};


  		// if (checkedValue === form.questions[i].answer) {
  		// 	correctAnswer++;
  		// }else if (checkedValue != form.questions[i].answer){
  		// 	wrongAnswer++;
  		// }else{
  		// 	unanswered++;
  		// }
  	



  // checkAnswer();
	$( "form" ).submit(function( event ) {
		  event.preventDefault();
		});
  });