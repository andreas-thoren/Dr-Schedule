const aReadme = document.getElementById("a-readme");
const aUserInfo = document.getElementById("a-user-info");
const mainDiv = document.getElementsByClassName("main")[0];

let queryParams = new URLSearchParams(window.location.search);
let converter = new showdown.Converter();
converter.setFlavor('github');

// MAIN FUNCTION - Executes after DOM is loaded
function main() {
  let doc = queryParams.get("doc");
  doc = (doc == null) ? "README" : doc;
  fetchConvertMarkdown(doc).then(parsedHtml => mainDiv.innerHTML = parsedHtml);
  queryParams.set("doc", doc);
  history.replaceState(null, null, "?"+queryParams.toString());
} 

// FUNCTION DEFINITIONS
async function fetchConvertMarkdown(fileName) {
  let url = "./docs/" + fileName + ".md";
  const x = await fetch(url);
  const y = await x.text();
  return converter.makeHtml(y);
}

function gotoDocument(fileName) {
  fetchConvertMarkdown(fileName).then(parsedHtml => mainDiv.innerHTML = parsedHtml);

  if (queryParams.get("doc") !== fileName) {
    queryParams.set("doc", fileName);
    history.pushState(null, null, "?"+queryParams.toString());
  }
}

// EVENTS
aReadme.addEventListener("click", (event) => {
  event.preventDefault();
  gotoDocument("README");
});

aUserInfo.addEventListener("click", (event) => {
  event.preventDefault();
  gotoDocument("user_info_swedish");
});

main();
