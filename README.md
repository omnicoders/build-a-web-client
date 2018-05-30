# Web Client
This is a learning application that shows how to build a React Web Application that consumes a JSON API.

## Install Dependencies
* Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* Node.js: https://nodejs.org/en/download/package-manager
* Yarn: https://yarnpkg.com/lang/en/docs/install 

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
There are four files that we will retrieve by CDN and place in our HTML template found at `/public/index.html`:  

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

### Create Components Directory
```
mkdir ./src/components
```

### Add BrowserRouter Wrapper
```js
// /src/index.js
import React from 'react';  
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
```

### Add Router Import
```js
// /src/App.js
import React, { Component } from 'react';
import './App.css';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page-container">
          <Router />
        </div>  
      </div>
    );
  }
}

export default App;
```

### Add App Styles
```css
/* /src/App.css */
.page-container {
  position: relative;
  display: block;
  width: 100;
  min-height: 100vh;
  background-color: #EEE;
}
```

### Add Router Component
```js
// /src/Router.js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

class Router extends Component {
  render() {
    const landingPage = () => {
      return (
        <LandingPage {...this.props}/>
      );
    };
    return ( 
      <main>
        <Switch>
          <Route exact path='/' component={landingPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;

```

### Create Pages Directory
```
mkdir ./src/pages
```

### Create LandingPage Component
```js
// /src/pages/LandingPage.js
import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return ( 
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4">Hello World</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
```

### Create NavBar Component
```js
// ./src/components/NavBar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Web Client</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">Disabled</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;

```

### Add NavBar Styles File
```
touch ./src/components/NavBar.css
```

### Add NavBar Reference
```js
// /src/App.js
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="page-container">
          <Router />
        </div>  
      </div>
    );
  }
}

export default App;

```

### Add About Page
```js
// /src/pages/AboutPage.js
import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return ( 
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4">About Us</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
```

### Add About Page To Router
```js
// /src/Router.js
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

class Router extends Component {
  render() {
    const landingPage = () => <LandingPage {...this.props}/>;
    const aboutPage = () => <AboutPage {...this.props}/>;
    return ( 
      <main>
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route exact path='/about' component={aboutPage}/>
        </Switch>
      </main>
    );
  }
}

export default Router;
```

### Add About Link To NavBar
```js
// /src/components/NavBar.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Web Client</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Link</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="/">Disabled</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;

```

### Add Footer Component
```js
// /src/components/Footer.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return ( 
      <div className="bg-light p-4 text-center">
        Web Client 2018
      </div>
    );
  }
}

export default Footer;

```

### Add Footer Styles File
```
touch ./src/components/Footer.css
```

### Add Footer To App
```js
// /src/App.js
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Router from './Router';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="page-container">
          <Router />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
```