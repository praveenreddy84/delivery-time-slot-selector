chrome.extension.sendMessage({}, function(response) {
	var slotcontainer = document.getElementsByClassName("ufss-widget-title");
	if(slotcontainer.length>0 && slotcontainer[0].innerText=="Schedule your order"){
		var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Amazon slot selector initiated successfully");
			// ----------------------------------------------------------

			const slotcontainer = document.getElementsByClassName("ufss-widget-title").innerHtml;
			

			console.log("Checking slots availability..");
			setInterval(function(){ 

				//var btn = document.getElementById("20200410").parentElement.click();
					var elementExists = document.getElementsByClassName("ufss-slot");
					if(elementExists.length >0){
						var slot = elementExists[0];
						slot.click();
						console.log('Hurrey solts available');
						console.log('Continueing to next step in 3 seconds, Be Ready..')
						setTimeout(function(){
							var btn = document.querySelectorAll('[data-action="ufss-overview-click-continue-button"]');
							btn[0].click();
						},3000);
			
					}else{
						console.log(':( No luck.. Will try again in 30 seconds');

						setTimeout(function(){
							location.reload();
						},30000);
					}
			
			}, 3000);
		}
	},3000);
}else{
	console.log('Slot selector not found on this page, Stopped tracking.');
}
});