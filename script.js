// IE not rendering the site properly
// If you see this code it means that I'm still working on it to fix it.
//It seems that IE does not like CSS Grid and not reading JavaScript in ES6 with arrow functions etc.
// I hope you'll give me some slack for this :) Thanks

const navItems = document.querySelectorAll(".navlink");
const navButton = document.querySelectorAll(".nav-button");
const allImages = document.querySelectorAll(".image")
const allText = document.querySelectorAll(".text");


toggleText = (dataClass) => {
  allText.forEach(text => {
    text.dataset.class === dataClass ? text.style.display = "block" : text.style.display = "none";
  });

  allImages.forEach(image => {
    image.dataset.class === dataClass ? image.style.display = "block" : image.style.display = "none";
  })

}

navItems.forEach(function (item) {
  item.addEventListener("click", () => {
    toggleText(item.dataset.class);
  });
});

navButton.forEach(function (item) {
  item.addEventListener("click", () => {
    toggleText(item.dataset.class);
  });
});

const allLinks = document.querySelectorAll(".header a");
const scrollDiv = document.getElementById("text-scroll")

allLinks.forEach(function (item) {
  item.addEventListener("click", () => {
    scrollDiv.scrollTop = 0;
  });
});


// OVERLAY FOR CONTACT ME MENU - START

openOverlay = () => {
  document.getElementById("contactNav").style.width = "100%";
}

closeOverlay = () => {
  document.getElementById("contactNav").style.width = "0%";
}

// Links for contact buttons

document.getElementById("mobile").onclick = () => {
  window.open("tel: +447742471147");
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

// Links for contact buttons

// OVERLAY FOR CONTACT ME MENU - END
