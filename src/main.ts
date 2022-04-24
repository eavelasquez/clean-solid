import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Clean Code and SOLID Principles</h1>
  <p>View messages logged by the browser console.</p>
  <span>
    Press <pre>Command+Option+J</pre> (Mac) or <pre>Control+Shift+J</pre> (Windows, Linux, ChromeOS) to open the Console.
  </span>
`
