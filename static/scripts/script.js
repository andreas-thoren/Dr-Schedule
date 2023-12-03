const myIframe = document.getElementById("myiframe");
const vertLinksDiv = document.getElementsByClassName("vert-links")[0];
const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const date = new Date();

// This will always be run when script loads!
function main () {
  const dayNr = date.getDay() - 1;
  const weekday = weekdays[dayNr];
  const dayLink = document.getElementById(weekday);
  const monday = document.getElementById("monday");

  vertLinksDiv.addEventListener("click", clickLink);

  if (dayLink != undefined) {
    selectLink(dayLink);
  } else { // If saturday or sunday -> show monday schedule.
    selectLink(monday);
  }
}

function clickLink (event) {
  event.preventDefault();

  if (event.target.tagName === "A") {
    selectLink(event.target);
  }
}

function selectLink (link) {
  // Change iframe src
  myIframe.src = link.href;
  
  // Remove active class from all links.
  for (let linkElem of vertLinksDiv.children) {
    linkElem.classList.remove("weekday-link--active");
  }

  // Add active class to clicked link.
  link.classList.add("weekday-link--active");
}

main();