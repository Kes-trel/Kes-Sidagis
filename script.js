// OVERLAY FOR CONTACT ME MENU - START

openOverlay = () => {
  document.getElementById("contactNav").style.width = "100%";
};

closeOverlay = () => {
  document.getElementById("contactNav").style.width = "0%";
};

// Links for contact buttons

document.getElementById("email").onclick = () => {
  window.open("mailto:kes.sidagis@gmail.com");
};

document.getElementById("linkedin").onclick = () => {
  window.open("https://www.linkedin.com/in/sidagis/");
};

document.getElementById("github").onclick = () => {
  window.open("https://github.com/Kes-trel");
};

document.getElementById("twitter").onclick = () => {
  window.open("https://twitter.com/sidagis");
};

document.getElementById("fcc").onclick = () => {
  window.open("https://www.freecodecamp.org/kes-trel");
};

// Links for contact buttons

// OVERLAY FOR CONTACT ME MENU - END