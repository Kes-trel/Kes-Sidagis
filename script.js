const navItems = document.querySelectorAll(".navlink");
const navButton = document.querySelectorAll(".nav-button");
const allImages = document.querySelectorAll(".image")
const allText = document.querySelectorAll(".text");
const allButtons = document.querySelectorAll(".contact-button");


function toggleText(dataClass){
  allText.forEach( text => {
  text.dataset.class === dataClass ? text.style.display = "block" : text.style.display = "none";
  });

  allImages.forEach( image => {
  image.dataset.class === dataClass ? image.style.display = "block" : image.style.display = "none";
  })

  allButtons.forEach( contact => {
  contact.dataset.class === dataClass ? contact.style.display = "block" : contact.style.display = "none";
  })
}

navItems.forEach( function(item) {
  item.addEventListener("click", () => {
    toggleText(item.dataset.class);
  });
});

navButton.forEach( function(item) {
  item.addEventListener("click", () => {
    toggleText(item.dataset.class);
  });
});

const allLinks = document.querySelectorAll("a");
const scrollDiv = document.getElementById("text-scroll")

allLinks.forEach( function(item) {
  item.addEventListener("click", () => {
    scrollDiv.scrollTop = 0;  
  });
});




// Links for contact buttons

document.getElementById("mobile").onclick = () => {
  window.open("tel: +44");
}

document.getElementById("email").onclick = () => {
  window.open("mailto:kes.sidagis@gmail.com");
}

document.getElementById("linkedin").onclick = () => {
  window.open("https://www.linkedin.com/in/sidagis/");
}

document.getElementById("github").onclick = () => {
  window.open("https://github.com/Kes-trel");
}

document.getElementById("twitter").onclick = () => {
  window.open("https://twitter.com/sidagis");
}

document.getElementById("skype").onclick = () => {
  window.open("https://join.skype.com/invite/hahCJc2s8ef6");
}

document.getElementById("teams").onclick = () => {
  window.open("https://teams.microsoft.com/join/v3c2mc8f4unc");
}

// Links for contact buttons