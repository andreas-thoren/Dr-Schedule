Your JavaScript code looks well-structured and concise. It seems like you've used modern JavaScript features and asynchronous programming effectively. I have a few suggestions that might enhance the code further:

1. **Event Delegation:**
   Instead of adding click event listeners to each link separately, you could use event delegation by adding a single event listener to a common ancestor. This can improve performance, especially if you have many links.

   ```javascript
   // EVENTS
   mainDiv.addEventListener("click", (event) => {
     event.preventDefault();
     const target = event.target;
     if (target.matches("#a-readme")) {
       gotoDocument("README");
     } else if (target.matches("#a-user-info")) {
       gotoDocument("user_info_swedish");
     }
   });
   ```

2. **Async/Await:**
   The `main` function could be simplified using `async/await` for better readability.

   ```javascript
   async function main() {
     let doc = queryParams.get("doc") || "README";
     const parsedHtml = await fetchConvertMarkdown(doc);
     mainDiv.innerHTML = parsedHtml;
     queryParams.set("doc", doc);
     history.replaceState(null, null, "?" + queryParams.toString());
   }
   ```

3. **Error Handling:**
   Consider adding error handling for the `fetch` operation and promise rejections to ensure that if there's an issue fetching the markdown file, your application doesn't break silently.

   ```javascript
   async function fetchConvertMarkdown(fileName) {
     try {
       let url = "./docs/" + fileName + ".md";
       const response = await fetch(url);

       if (!response.ok) {
         throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
       }

       const text = await response.text();
       return converter.makeHtml(text);
     } catch (error) {
       console.error("Error fetching or converting markdown:", error);
       return "<p>Error loading document.</p>";
     }
   }
   ```

These are just suggestions for improvement. Overall, your code looks clean and functional!