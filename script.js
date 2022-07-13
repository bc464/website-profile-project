let i = 0; 			
let images = [];	
let j = 0; 			
let images2 = [];	
let time = 5000;	
	 
// Image List
images[0] = "./images/frontend/Chat-app-css-illustration.png";
images[1] = "./images/frontend/E-commerce product page.png";
images[2] = "./images/frontend/Easybank landing page.png";
images[3] = "./images/frontend/Expenses chart component.png";
images[4] = "./images/frontend/Advice generator app.png";
images[5] = "./images/frontend/Bookmark landing page.png";
images[6] = "./images/frontend/Calculator app.png";
images[7] = "./images/frontend/Intro section with dropdown navigation.png";
images[8] = "./images/frontend/IP Address Tracker.png";
images[9] = "./images/frontend/Launch countdown timer.png";
images[10] = "./images/frontend/Manage landing page.png";
images[11] = "./images/frontend/NFT preview card component.png";
images[12] = "./images/frontend/Order summary card.png";
images[13] = "./images/frontend/QR code component.png";
images[14] = "./images/frontend/Room homepage.png";
images[15] = "./images/frontend/Shortly URL shortening API Challenge.png";
images[16] = "./images/frontend/Sunnyside agency landing page.png";
images[17] = "./images/frontend/Time tracking dashboard.png";
images[18] = "./images/frontend/Tip calculator app.png";

// Image List2
images2[0] = "./images/codewell/Accountable.png";
images2[1] = "./images/codewell/Arclight.png";
images2[2] = "./images/codewell/Chirp.png";
images2[3] = "./images/codewell/Comment Template.png";
images2[4] = "./images/codewell/Commune Waitlist Starter.png";
images2[5] = "./images/codewell/Developer Portfolio.png";
images2[6] = "./images/codewell/Gradie Sign Up.png";
images2[7] = "./images/codewell/Hosterr.png";
images2[8] = "./images/codewell/Ideate Dashboard.png";
images2[9] = "./images/codewell/Indie Brew.png";
images2[10] = "./images/codewell/JavaScript3--Navbar.png";
images2[11] = "./images/codewell/Meeet.png";
images2[12] = "./images/codewell/Newsletter Popup Starter.png";
images2[13] = "./images/codewell/Personal-Blog.png";
images2[14] = "./images/codewell/Snipper.png";
images2[15] = "./images/codewell/Spence.png";
images2[16] = "./images/codewell/Subway Multistep Form.png";
images2[17] = "./images/codewell/TimeNow Starter.png";
images2[18] = "./images/codewell/Unifeed Starter.png";
images2[19] = "./images/codewell/Workside.png";
images2[20] = "./images/codewell/Yelp_Camp.png";

// Change Image
function changeImg(){
	document.slide.src = images[i];
	document.slide2.src = images2[j];
	
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
	}
	if(j < images2.length - 1){
	   j++; 
	} else { 
		j = 0;
	}

	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

// MODAL
let modal = document.getElementById("myModal");
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

