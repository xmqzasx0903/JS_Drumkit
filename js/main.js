(() => {
	// hook up the JS file
	console.log("fired! ready to jam out");

	function playDrumSound(e) {
		// e in round backets is the event object ->
		// gets generated with every ebent and oasses some data though
		//debugger;
		//
		//try selecting the matching audio element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		
		//the return keyword stops js from runing (any code below it)
		if (!audio) {return; }

		//play the audio track
		
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener('keydown', playDrumSound);

})();