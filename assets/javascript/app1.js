var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;
var questionCounter = 0;

var questions =  [
	{
		question: "Which Artist Is Number #1 On The List For 250 Million Or More Records Sold?",

		options: ["Michael Jackson", "Elvis Presley", "The Beatles", "Madonna"],

		answer: "Elvis Presley",
	}, {
		question: "Who IS/WAS Nicknamed 'The King of R&B?'",
		options: ["Usher", "R. Kelly", "Brian McKnight", "Maxwell"],
		answer: "R.Kelly",
	}, {
		question: "What Was Michael Jackson's Biggest Song Of All Time?",
		options: ["Billie Jean", "Don't Stop 'Til You Get Enough", "Man In The  Mirror", "Thriller"],
		answer: "Thriller",
	}, {
		question: "When was the song 'Don't Stop Believin' by Journey released?",
		options: ["1981", "1985", "1979", "1991"],
		answer: "1981",
	}, {
		question: "Which Hip-Hop/Rap Group Released The First Hip-Hop Song 'Rappers Delight'?",
		options: ["Public Enemy", "N.W.A", "Run-D.M.C.", "The Sugarhill Gang"],
		answer: "Sugarhill Gang",
	}
];



  // Variable that will hold our setInterval that runs the countDown
	var countDown;
	var choice;

	// Countdown object
	var counter = {

		time: 60,

		reset: function () {
			counter.time = 60;
			counter.start;

		},
		start: function() {

			countDown = setInterval(counter.count, 1000);

		},
		count: function() {
			counter.time--;

			var converted = counter.timeConverter(counter.time);

			$(".display").html("<br>" + "Time Remaining: " + converted);

      // When counter reaches 00:00, game is over and the results are displayed
      if(counter.time == 0){
        // clearInterval(counter.time)
        // audio.pause();
        // winMusic(winSound);
        nextQuestion();
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
	};


function displayQuestion() {

	if(questionCounter < questions.length){

			var question = questions[questionCounter].question
	// console.log(question);
			$("#questionForm").append($("<h3>" +question + "</h3>"));

		for(var i=0; i < questions[questionCounter].options.length; i++){

				// console.log(questions[questionCounter].options[i])
				var option = questions[questionCounter].options[i];
				var input = $("<input name='option'>").attr('type', 'radio').attr('value', option);
				// console.log(input)
				var label = $("<label id='option'>").html(option);		
				// console.log(label)
				label.append(input);
				var space = $("<br>");
				label.append(space);

				// console.log(input);  
				$("#questionForm").append(label);
			}	
	// Countdown starts here
  	counter.start();
	}
	else{
		clearInterval(countDown);
		// audio.pause();
		// winMusic(winSound);
		$("#game").hide()
		$(".display").hide();
		$(".main").append("Correct: " + correctCounter + "<br>");
		$(".main").append("Incorrect: " + incorrectCounter + "<br>");
		$(".main").append("Unanswered: " + unansweredCounter);
	}
};

// When this function is executed questionCounter is incremented by 1 and the next question in the array of questions is displayed on the screen

function nextQuestion(){

		questionCounter++;
		counter.time = 60;
		$("#questionForm").empty();
		displayQuestion();
};

	displayQuestion();


$(document).ready(function() {

	var gameSound = 'assets/music/WalkingOnADream.mp3';
  var audio;
  // Plays game sound on page load
    function playSound(snd) {
      audio = new Audio(snd)
      audio.play();
    } playSound(gameSound);

  $(".img").on("click", function () {
	  
    var play = "./assets/images/playbutton.png"
    var pause = "./assets/images/pausebutton.png"
    var state = $(this).attr("data-state");

    if(state === "pause"){
      audio.pause();
      $(".img").attr('src', play);
      $(this).attr("data-state", "play")
    }else {
      audio.play()
      $(".img").attr('src', pause);
      $(this).attr("data-state", "pause")
    }
	})

	$("#questionForm").on("click", "input", function () {
  		var checkVal = ($(this).val()); 
  		var userGuess = checkVal;
	  	console.log(userGuess);

	  	var userAnswer = $("input[name='option']:checked").val();

	  	var correctAnswer = questions[questionCounter].answer;

	  	if(userAnswer == correctAnswer) {
	  		correctCounter++;
	  		console.log(correctCounter);
	  	}else if(userAnswer != correctAnswer ){
	  		incorrectCounter++;
	  		console.log(incorrectCounter)
	  	}else if(userAnswer == ""){
	  		unansweredCounter++;
	  	}
	 });

	 $("#submit").on("click", function () {
      setTimeout(nextQuestion(), 3000);
  	});
});


