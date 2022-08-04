let i = 0; 			
let images = [];	
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

// Change Image
function changeImg(){
	document.slide.src = images[i];
	
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
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
// NAVBAR CLICK DROPDOWN
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  let myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// CAROUSEL ON SCROLL
const cards = [...document.querySelectorAll('.card')],
      container = document.querySelector('.container'),
      arrows = [...document.querySelectorAll('.arrow')]

let angle = 0,
    chgtCard = 0,
    canChange = true, //prevent spam
    prevX,
    prevY,
    timeElapsed = 50

window.onLoad = animateCards() 


// first card animation when the page is loaded
function animateCards(){  
  cards.forEach((card,idx) => {
    setTimeout(function(){
      
      let divClassName
      
      if(idx % 2 === 0) {
    divClassName = "card-on-left"
    }
      else{
    divClassName = "card-on-right"        
      }
      
      card.classList.remove(divClassName)
        setTimeout(function(){
          card.classList.add("card-centered")
        }, 150 + cards.length * 150)
    }, timeElapsed)
    
    timeElapsed += 150
  })
}


function changeCard(direction){
  // direction : -1 => left / 1 => right
  
  if(canChange){
  canChange = false
  
  for(let i = 0; i < 19; i++){
    
    let pos = parseInt(cards[i].dataset.pos,10)    
    let formerPos = pos    
    pos += direction
        
    cards[i].dataset.pos = pos
    
    if(pos === 0){
      setTimeout(function(){
        cards[i].dataset.pos = 19
        canChange = true
      }, 500)
    }
    
    else if(pos === 20){
      setTimeout(function(){
        cards[i].dataset.pos = 1
        canChange = true
      }, 500)
      
    }
  }
  }
}


// -A- change cards with wheel
container.addEventListener('wheel', e  =>{
    
  if(canChange){
    const direction = Math.sign(e.deltaY)
    chgtCard += direction
    
    Math.abs(chgtCard) > 5 && (
      changeCard(direction),
      chgtCard = 0)
  }
})


// -B- change cards with touches
container.addEventListener('touchstart', (e) => {
  e.preventDefault()
  prevX = e.touches[0].clientX
  prevY = e.touches[0].clientY
})

container.addEventListener('touchmove', (e) => {
  e.preventDefault()
  if(canChange){
    let direction
    let newX = e.touches[0].clientX
    let newY = e.touches[0].clientY
    let deltaX = Math.abs(newX - prevX)
    let deltaY = Math.abs(newY - prevY)
    if(deltaX > 10 || deltaY > 10){
      deltaX > deltaY ? ( direction = Math.sign(newX - prevX),
        prevX = newX) 
      : (direction = Math.sign(newY - prevY),
        prevY = newY)
    changeCard(direction)
    }
  }
})


// -C- change cards with arrows
arrows.forEach(arrow => arrow.addEventListener('click', e => changeCard(parseInt(e.target.dataset.dir) )))

