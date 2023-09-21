This project reporduces an error on autofill thrown by Reshaped.so TextField component when used with Next.js

## To repoduce:

```bash
1. Open your IDE of choice (VSCode in my case)
2. Git pull the repository
3. Open your CLI terminal
4. Run  "npm install"
5. Run "npm run dev"
6. In your browser, open [http://localhost:3000](http://localhost:3000)
7. Select the text input field by clicking, you should see a few autofill values from your browser.
8. Select an autofill value, check console for errors.
```

You can also see the bug on the vercel deployment if you open developer tools and check console.

[Autofill Bug Link](https://autofill-bug.vercel.app/)

## The Error:
On reshaped v2.3.2:
Uncaught TypeError: Cannot read properties of undefined (reading 'replace')
