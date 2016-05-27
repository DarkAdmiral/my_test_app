import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
  render() {
    var { name } = this.props;
    // navbar-fixed-top onClick={() => history.push('page1')
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <nav className="collapse navbar-collapse navbar-right">
            <ul className="nav nav-pills navbar-right">
              <li role="presentation" className="active"><a href="#mainframe">Home</a></li>
              <li role="presentation"><a href="#content_1">Why React</a></li>
              <li role="presentation"><a href="#content_2">Features</a></li>
              <li role="presentation"><a href="#twitter-feed">Feeds</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavBar;
