import './style.css'
import './clean-code/05-dry'
import './solid/02-open-close-a'
import './solid/05-dependency-a'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Clean Code and SOLID Principles</h1>
  <p>View messages logged by the browser console.</p>
  <span>
    Press <pre>Command+Option+J</pre> (Mac) or <pre>Control+Shift+J</pre> (Windows, Linux, ChromeOS) to open the Console.
  </span>
  <p>
    To test the exercises or files, import into the <code>src/main.ts</code>.
  </p>
  <p>
    <a href="https://github.com/eavelasquez/clean-solid" target="_blank">
    <i class="fa fa-github" style="font-size:36px;color:black"></i>
    </a>
  </p>
`
