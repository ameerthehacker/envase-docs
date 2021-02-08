---
id: create-language-app
title: Create language App
sidebar_label: Create language App
---

## Create NodeJS App

Let us say you are learning **NodeJS** you can setup a sandboxed environment using Envase in seconds.

1. Click on the **All Apps** tab and find the NodeJS App.

![nodejs-1](/img/create-language-app/nodejs-1.png)

2. Click on **Create** button and provide a name for your **NodeJS** app.

![nodejs-2](/img/create-language-app/nodejs-2.png)

3. Click on the **browse** button in the **Project folder** field and choose the folder where your NodeJS projects live.

![nodejs-3](/img/create-language-app/nodejs-3.png)

4. Choose the version of **NodeJS** you want, I have choosen **v10.23.2**.

![nodejs-4](/img/create-language-app/nodejs-4.png)

5. We will be building a simple **web server** which runs on **port 3000**, so expand the **Advanced section** and add **3000** to the list of additional ports you want to **expose** from the app container.

![nodejs-5](/img/create-language-app/nodejs-5.png)

6. Click on the **Create** button and Envase will start pulling the image from DockerHub.

![nodejs-6](/img/create-language-app/nodejs-6.png)

7. Once the image has been pulled, you can see your newly created app in the **My Apps** tab.

![nodejs-7](/img/create-language-app/nodejs-7.png)

8. Click on the play button and you will be provided with **terminal** connected to the container app. You can find all your projects inside the `~/projects` folder.

![nodejs-8](/img/create-language-app/nodejs-8.png)
For the sake of the demo I have added a `index.js` file with the following code.

```javascript
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

9. Run your app using **NodeJS** from the terminal

![nodejs-9](/img/create-language-app/nodejs-9.png)

10. Navigate to `http://localhost:3000/` in your browser and you should see **Hello World** 🥳

![nodejs-10](/img/create-language-app/nodejs-10.png)
