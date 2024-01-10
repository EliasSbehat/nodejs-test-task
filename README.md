
# [Nodejs API task]

Express / Nodejs 

<br />

> APIs:

- ✅ get 
- ✅ getById
- ✅ add
- ✅ update
- ✅ delete
  
<br />

> Tested with:

| NodeJS | NPM | YARN | 
| --- | --- | --- | 
| `v16.17.1`  | ✅ | ✅ |
| `v16.10.0` | ✅ | ✅ | 

<br />

## ✨ Requirements

- [Node.js](https://nodejs.org/) >= v16.10
- MySQL

<br />

## ✨ How to use the code

> 👉 **Step 1** - Clone the project

```bash
$ git clone https://github.com/app-generator/api-server-nodejs.git
$ cd nodejs-test-task
```

<br />

> 👉 **Step 2** - Install dependencies via `Yarn`

```bash
$ npm i
// OR 
$ yarn
```

<br />


> 👉 **Step 3** - Edit the `.env` using the template `.env.sample`. 

```env
DB_HOST=localhost               # MYSQL DB HOST
DB_USER=root                    # MYSQL DB USER NAME
DB_PASS=                        # MYSQL DB USER PASSWORD
DB_NAME=test_db                 # MYSQL DB NAME

```

<br />

> 👉 **Step 4** - Start the API server (development mode)

```bash
$ npm start
// OR
$ yarn start
```

<br />

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br />

## ✨ Codebase Structure

```bash
< ROOT / src >
     | 
     |-- config/                              
     |    |-- db.js                 # DB Configuration       
     | 
     |-- controller/
     |    |-- usersController.js    # Controller
     |
     |-- model/                              
     |    |-- User.js               # User Model 
     | 
     |-- routes/                              
     |    |-- users.js              # Define Users API Routes
     | 
     | 
     |-- index.js                   # API Entry Point
     |-- .env                       # Specify the ENV variables
     |                        
     |-- ************************************************************************
```

<br />
