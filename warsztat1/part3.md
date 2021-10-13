<img src="./img/logo.png" alt="Chmurowisko logo" width="200" align="right">
<br><br>
<br><br>
<br><br>

# Azure Data Engineer

## LAB 1
---
### Lab overview:
In this lab you are going to work with two most common data storing services:
- Azure Data Lake, which is best solution for storing unstructured data
- Azure SQL, which is an old, good, battle-tested relational database in Azure. For storing structured data of course.

The plan for the lab is like following:

1. Create all resources in Azure
2. Load data into Azure Data Lake
3. Load data into Azure SQL using Azure Data Factory
4. Create users in Azure SQL and authenticate it
5. Configuring security
6. Configuring high-availability

---
## Prerequisites:

- An active Azure subscription and a resource group created.
- Part 1 and Part 2 of the lab finished

---
## Part 3 - Securing the Azure SQL database and making it high-available.
---
## Task 1: Create new user in SQL database
1. Open the query editor
2. Create new user by executing a query:

```
CREATE USER YOUR_USER_NAME WITH PASSWORD='Passw0rd1!123';
```
3. Give db_datareader permission to this user:
```
ALTER ROLE db_datareader 
ADD MEMBER [YOUR_USER_NAME] ;  
GO
```
4. Exit the query editor
5. Login to query editor again using new user credentials


## Task 2: Hide sensitive data using dynamic data masking
1. On your SQL database, from left menu select "Dynamic Data Masking"
2. Add two masks:
    - On "email" column using Email mask
    - On "Credit card" column using Credit Card Mask
    - On "Last Name" column - the mas that will look like this: "KowXXXski"
3. Save your masks
4. Open the query editor, login as a newly created user and verify that the masks are applied.


## Task 3: Configure geo-replication for your database
1. Go to your Azure SQL database
2. From left menu select Geo-replication
3. Replicate your data to second region (eg. France Central). You will need to create new SQL server.
4. Wait for the replication to finish.

## Exercise!
Your task is to create a failover group over these two databases. Failover group is one of the main tool to obtain high-availabilkity and business continuity of your database.

Primary replica should be in West Europe and the secondary (read only) should be in your second region.

When you are read paste on chat your Read/write listener endpoint. 

If you need help you can refer to documentation (https://docs.microsoft.com/en-us/azure/azure-sql/database/auto-failover-group-configure?tabs=azure-portal) or simply ask your trainers :)

Good luck!