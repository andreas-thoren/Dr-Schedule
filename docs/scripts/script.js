const urlReadme = "./docs/README.md"
const urlUserInfo = "./docs/user_info_swedish.md"
const aReadme = document.getElementById("a-readme");
const aUserInfo = document.getElementById("a-user-info");
const main = document.getElementsByClassName("main")[0];

let converter = new showdown.Converter();
converter.setFlavor('github');

async function fetchConvertMarkdown(url) {
  const x = await fetch(url);
  const y = await x.text();
  return converter.makeHtml(y);
}

aReadme.addEventListener("click", (event) => {
  event.preventDefault();
  fetchConvertMarkdown(urlReadme).then(parsedHtml => main.innerHTML = parsedHtml);
});

aUserInfo.addEventListener("click", (event) => {
  event.preventDefault();
  fetchConvertMarkdown(urlUserInfo).then(parsedHtml => main.innerHTML = parsedHtml)
});
