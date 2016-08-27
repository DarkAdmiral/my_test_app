import React from 'react';
import ReactDOM from 'react-dom';

class TopBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="label label-default">Contact us: +1 1234 5678 9</span>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a className="navbar-brand" href="#">
                <img src={'./resources/images/brand_001.png'}/>
              </a>
            </li>
            <li>
              <a className="navbar-brand" href="#">
                <img src={'./resources/images/brand_002.png'}/>
              </a>
            </li>
          </ul>

        </div>
      </nav>
    )
  }
}

export default TopBar;
