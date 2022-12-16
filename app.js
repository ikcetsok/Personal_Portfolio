// Elements from index.html
let courseTitle = document.getElementById("coursesTitle");
let button = document.getElementById("cert-button");
// New elements created

let certLink = document.createElement("a");

certLink.href = "./certificates.html";
certLink.innerHTML = "See Certificates";
certLink.style.color = "#0e7ebd";
certLink.style.display = "inline-block";
certLink.style.fontSize = "1.5rem";
certLink.style.fontWeight = "700";
certLink.style.paddingBottom = "1rem";
certLink.style.paddingTop = "1rem";

let complete = document.createElement("span");
complete.style.fontWeight = "700";
complete.style.color = "#0e7ebd";
complete.innerHTML = " - Complete";

// Event Handler Function

const resetter = (e) => {
  button.removeEventListener("click", resetter);
  button.addEventListener("click", buttonSwitch);
  courseTitle.parentNode.removeChild(certLink);
  document.getElementById("CAFE").hidden = false;
  document.getElementById("FCRWD").removeChild(document.getElementById("FCRWD").lastChild);
  document.getElementById("FCJS").removeChild(document.getElementById("FCJS").lastChild);
  document.getElementById("FCFE").removeChild(document.getElementById("FCFE").lastChild);
  document.getElementById("CATS").removeChild(document.getElementById("CATS").lastChild);
  document.getElementById("CAITS").removeChild(document.getElementById("CAITS").lastChild);
};

const buttonSwitch = (e) => {
  button.removeEventListener("click", buttonSwitch);
  courseTitle.parentNode.insertBefore(certLink, courseTitle.nextSibling);
  button.innerHTML = "Click to see all Courses";
  //   Hide incomplete courses
  document.getElementById("CAFE").hidden = true;
  //   Add completion to other courses
  document.getElementById("FCRWD").appendChild(complete);
  document.getElementById("FCJS").appendChild(complete.cloneNode(true));
  document.getElementById("FCFE").appendChild(complete.cloneNode(true));
  document.getElementById("CATS").appendChild(complete.cloneNode(true));
  document.getElementById("CAITS").appendChild(complete.cloneNode(true));
  button.addEventListener("click", resetter);
  console.log(document.getElementById("FCFE"));
};

// Adding Event Listener to Button

button.addEventListener("click", buttonSwitch);

console.log(document.getElementById("FCFE"));
