import React from 'react';
import ReactDOM from 'react-dom';

class Content_1 extends React.Component {
  render() {
    return (
      <div id="content_1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img className="img-responsive" src={'./resources/images/brand_003.png'}/>
            </div>
            <div className="col-sm-5 col-sm-offset-1">
              <h2>Why ReactJS</h2>
              <h3>Component based, easy, state of the art</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum nulla pariatur.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Content_1;
