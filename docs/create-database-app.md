---
id: create-database-app
title: Create database App
sidebar_label: Create database App
---

## Create MySQL Database

1. Click on the **All Apps** tab and find the **MySQL** App.

![mysql-1](/img/create-database-app/mysql-1.png)

2. Click on the **Create** button and provide a **name** and **password** for your MySQL App. The username of your **MySQL** database will be **root**.

![mysql-2](/img/create-database-app/mysql-2.png)

3. Click on the **browse** button in the **Project folder** field and choose the folder where your want to store MySQL **database files**. This is optional, if you do not choose a folder your database files will be lost when you **delete** your MySQL app.

![mysql-3](/img/create-database-app/mysql-3.png)

4. Choose the version of MySQL app you want, I have choosen **v8.0.23**.

![mysql-4](/img/create-database-app/mysql-4.png)

5. Clicking on the **Create** button will start pulling the required image from DockerHub.

![mysql-5](/img/create-database-app/mysql-5.png)

6. Once the image has been pulled, you can see your newly created app in the **My Apps** tab.

![mysql-6](/img/create-database-app/mysql-6.png)

7. Click on the play button, to view **live logs** from the database click on the wrench icon and choose **Show Logs**.

![mysql-7](/img/create-database-app/mysql-7.png)

8. You will be provided with **live logs** from the database app container. You can use this to check whether the database has started or not.

![mysql-8](/img/create-database-app/mysql-8.png)

9. Click on the wrench icon and choose **Open MySQL CLI** to connect with MySQL database using **MySQL Client**.

![mysql-9](/img/create-database-app/mysql-9.png)

10. You will be provided with **terminal** running **MySQL Client**. You can use this to query and manipulate data from the CLI.

![mysql-10](/img/create-database-app/mysql-10.png)
