import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component {
   render() {
      var { name } = this.props;
      return (
         <div className="navBar">
            <ul className="nav nav-pills">
               <li role="presentation" className="active"><a href="#">Home</a></li>
               <li role="presentation"><a href="#">Profile</a></li>
               <li role="presentation"><a href="#">Messages</a></li>
            </ul>
         </div>
      )
   }


}

export default NavBar;