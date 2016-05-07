import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
   render() {
      var { name } = this.props;
      return (
         <div className="navbar">
            <ul className="nav nav-pills navbar-right">
               <li role="presentation" className="active"><a href="#">Home</a></li>
               <li role="presentation"><a href="#">Gallery</a></li>
               <li role="presentation"><a href="#">Pricing</a></li>
               <li role="presentation"><a href="#">Impressum</a></li>
            </ul>
         </div>
      )
   }
}

export default NavBar;