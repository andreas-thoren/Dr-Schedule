"use strict";

// GLOBAL VARS AND CONSTANTS
const topNav = document.getElementById("top-nav");
const mainDiv = document.getElementsByClassName("main")[0];
const markdownFolder = "./docs/"

let queryParams = new URLSearchParams(window.location.search);
let converter = new showdown.Converter();
converter.setFlavor('github');

// MAIN FUNCTION - Executes after DOM is loaded
async function main() {
  let fileName = queryParams.get("doc") || "README.md";
  await setDocument(fileName);
  setDocumentUrl(fileName, false);
} 

// FUNCTION DEFINITIONS
async function fetchConvertMarkdown(fileName) {
  let url = markdownFolder + fileName;

  try {
    let response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }

    let markDown = await response.text();
    return converter.makeHtml(markDown);
  } catch (error) {
    console.log(`Error fetching or converting markdown document ${fileName}: `, error);
    return `<p>Could not fetch document ${fileName}.</p>`;
  }
}

async function setDocument(fileName) {
  const parsedHtml = await fetchConvertMarkdown(fileName);
  mainDiv.innerHTML = parsedHtml;
}

function setDocumentUrl(fileName, pushState = true) {

  if (queryParams.get("doc") === fileName) {
    return
  }

  queryParams.set("doc", fileName);

  if (pushState) {
    history.pushState(null, null, "?"+queryParams.toString());
  } else {
    history.replaceState(null, null, "?"+queryParams.toString());
  }
}

// EVENTS
topNav.addEventListener("click", async (event) => {
  let target = event.target;

  if ("documentName" in target.dataset) {
    event.preventDefault();
    let fileName = target.dataset.documentName;
    await setDocument(fileName);
    setDocumentUrl(fileName);
  }
});

main();
