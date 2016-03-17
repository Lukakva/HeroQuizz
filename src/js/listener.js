chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var i = 0;
	// when this gets called, it means that start cheating button was clicked
	$(".my_answers").each(function(index, el) {
		// every my_answers node has onclick attribute
		// with 4 arguments
		// AnswerQuestion(something, id of this answer, something, id of correct answer)
		// and AnswerQuestion functionc checks if 2nd and 4th arguments are equal
		// and evaluates results depending on that
	    var clickAttr = $(el).attr("onclick").split(",");

	    // 2nd argument will have space left to it
	    var currentIndex = clickAttr[1].trim();

	    // 4th argument will have ")" at the end so it has to be sliced off
	    // and whitespace on the left has to be trimmed as well
	    var correctAnswer = clickAttr[3].slice(0, -1).trim();

	    // if current possible answer is correct
	    if (correctAnswer == currentIndex) {
	    	// click on current node
	        setTimeout(function() {
	            el.click();
	            // the click will triger AnswerQuestion function which will set AnswerQuestion_working boolean to true
	            // and it will set it to false after 1.5 seconds. if you call the AnswerQUestion function between those 1.5 seconds
	            // the function won't work since whole function is placed inside if (AnswerQuestion_working === false) statement
	            // so we have to manually set it to false
	            AnswerQuestion_working = false;
	        }, i * 1600);
	        // store the number of current question since index variable will contain index of answer node which is not the number of question
	        i++;
	    }
	});
});