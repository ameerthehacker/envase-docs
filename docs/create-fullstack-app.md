---
id: create-fullstack-app
title: Create fullstack App
sidebar_label: Create fullstack App
---

## Connect to MySQL from Node.js

You connect to the **mysql** Envase app from **node.js** or any language Envase app as shown below. The hostname is your **mysql** app name in Envase.

```js
// the host name is your mysql app's name in Envase
// it would work with any client library that connects to mysql
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'my-mysql-db',
  dialect: 'mysql',
  user: 'root',
  password: 'test'
});
```

## Create Wordpress

1. Click on the **All Apps** tab and find the **Wordpress** App.

![wordpress-1](/img/create-fullstack-app/wordpress-1.png)

2. Click on the **Create** button and select the mysql database that you want wordpress to use.

![wordpress-2](/img/create-fullstack-app/wordpress-2.png)

3. Provide the **username (root)** and **password** of your mysql Envase app.

![wordpress-3](/img/create-fullstack-app/wordpress-3.png)

4. Start the wordpress app from **My Apps** tab.

![wordpress-4](/img/create-fullstack-app/wordpress-4.png)

5. The wordpress installation page will automatically open in the browser.

![wordpress-5](/img/create-fullstack-app/wordpress-5.png)
