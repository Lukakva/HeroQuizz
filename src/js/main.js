(function() {
// this script will be run when icon in upper right corner will be clicked so we have to check if user is actually taking a test
var heroquizzRegex = new RegExp(".+\:\/\/.*\.heroquizz\.com\/r\/.+\/answer");

// get current tab
chrome.tabs.getSelected(function(tab) {
	// check if url matches regex
	var isHeroquizzTest = heroquizzRegex.test(tab.url);
	if (!isHeroquizzTest) {
		// if current website is not heroquizz test, show error message
		$(".error").show();
		$("#start-container").hide();
		return;
	}

	// otherwise start-button will be shown and create an event listener
	$("#start-button").click(function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		    chrome.tabs.sendMessage(tabs[0].id, {
		    	
		    }, function(response) {

		    });  
		});
	});
})


})();