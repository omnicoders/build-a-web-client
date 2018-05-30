import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return ( 
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card mt-3">
              <div className="card-header">
                <h5 className="card-title mb-0">Home</h5>
              </div>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">/src/pages/LandingPage.js</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/about" className="card-link">About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
