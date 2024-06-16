#nextjs

### 🟪 Setup

```
npx create-next-app@latest
```

To run the app, go inside the app directory and then on the console

```
npm run dev
```

### 🟪 Folders and Files Structure

Let us recall how the routing first

<img src='./Attachments/Pasted image 20240616114347.png'>

Similarly in NEXTjs,

📄 layout.js - main route element

<img src='./Attachments/Pasted image 20240616113105.png'>

📄 page.js - this is the children element of main.js

<img src='./Attachments/Pasted image 20240616114958.png'>

<img src='./Attachments/Pasted image 20240616115027.png'>

### 🟪 Routing

<img src='./Attachments/Pasted image 20240616115630.png'>

🟩 For the common layout design like navbar, you have to write code inside the 📄 layout.js file.

<img src='./Attachments/Pasted image 20240616121906.png'>

<img src='./Attachments/Pasted image 20240616121928.png'>

🟩 Let us create routes for `about` , `services` and `contact` page.

<img src='./Attachments/Pasted image 20240616121532.png'>

<img src='./Attachments/Pasted image 20240616121557.png'>

### 🟪 Navigation

🟩 one of the ways is to use `Link` from nextjs. This is like an anchor tag with href as its props.

<img src='./Attachments/Pasted image 20240616122653.png'>

🟩 show different style for active route

<img src='./Attachments/Pasted image 20240616125622.png'>

<img src='./Attachments/Pasted image 20240616125640.png'>

🟩 another way to route is to use `useRouter()`

<img src='./Attachments/Pasted image 20240616130500.png'>

### 🟪 Nested Navigation

Simply create folders inside.
