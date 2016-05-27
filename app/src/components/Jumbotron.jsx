import React from 'react';
import ReactDOM from 'react-dom';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>feuersturm.eu</h1>
        <p>start your business now</p>
        <div class="container">
          <p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            <a className="btn btn-primary btn-lg" href="#" role="button">Get it now</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
