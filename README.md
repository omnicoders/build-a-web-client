# Web Client
This is a learning application that shows how to build a React Web Application that consumes a JSON API.

## Clone & Run Current Project
```
git clone https://github.com/matthewstewart/web-client.git
cd web-client
yarn install
yarn start
```

## Step By Step
Here are the step by step instructions on how the current state of this application was built.  It is recommended to clone this project AND to recreate the steps in a seperate directory to prevent conflict.

### Install Create-React-App CLI
```
sudo npm i -g create-react-app
```

### Run Scaffold
```
create-react-app web-client && cd web-client
```

### Add React Router & API Request Modules
```
yarn add react-router-dom axios
```

### Start App
Start up your Development Server:
```
yarn start
```

### Add Bootstrap 4
We are going to be utilizing the Bootstrap 4 CDN for a quick styling/grid library.  See [https://getbootstrap.com/docs/4.0/getting-started/introduction/#quick-start](https://getbootstrap.com/docs/4.0/getting-started/introduction/#quick-start).  
There are four files that we will retrieve by CDN and place in our HTML template found at `/public/html`:  

- bootstrap.min.css - The minified Bootstrap CSS. This should be included in the `<head>`.
```
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```
- jquery-3.2.1.slim.min.js - The minified jQuery required by Bootstrap 4. It should be included at the top of the scripts that are just above the `</body>`.  
```
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
```
- popper.min.js - The minified popper.js required by Bootstrap 4.  It should be included just below the jquery-3.2.1.slim.min.js include.  
```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
```
- bootstrap.min.js - The minified Bootstrap JavaScript. It should be included last before the `</body>`.  
```
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> 
```