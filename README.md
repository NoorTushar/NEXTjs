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

Let us recall first how the react routing worked:

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

<img src='./Attachments/Pasted image 20240616183702.png'>

### 🟪 Dynamic Routing

🟩 Purpose: If we click on a card view details button, it should redirect us to a page with that ID/ slug and show data accordingly.

<img src='./Attachments/Pasted image 20240616193142.png'>

🟩 then we should create a subfolder named `[id]` inside the `blogs` folder

<img src='./Attachments/Pasted image 20240616193308.png'>

here we should be getting `params` in which we will have the `id` as our subfolder name is `[id]`

### 🟪 Grouping

🟩 Here we are wrapping the folder name by first bracket `( )` so this will not be considered as a route.

<img src='./Attachments/Pasted image 20240616211001.png'>

🟩 but the folders created inside without the `( )` will be considered as a route

<img src='./Attachments/Pasted image 20240616211248.png'>

<img src='./Attachments/Pasted image 20240616211312.png'>

🟩 And we can do nesting by putting new folders inside the dashboard folder.

<img src='./Attachments/Pasted image 20240616211545.png'>

<img src='./Attachments/Pasted image 20240616211640.png'>

### 🟪 Conditional Layout

Ok what if now want to see different `navbar` if we are inside the dashboard or its sub routes?

Simply put condition in the `NavBar.jsx`

📄 `NavBar.jsx`

<img src='./Attachments/Pasted image 20240616212500.png'>

so we will have this specific NavBar whenever the pathName contains `/dashboard` or its children routes.

<img src='./Attachments/Pasted image 20240616212754.png'>
