import React from 'react';
import ReactDOM from 'react-dom';

class TopBar extends React.Component {
   render() {
      var { name } = this.props;
      return (
         <div className="topbar">
            <div className="container-fluid">
            <div className="navbar-header">
                  <p className="contact">Contact us: +1 1234 5678 9</p>
               </div>
               <div className="navbar-header brand">
                  <a className="navbar-brand" href="#">
                     <img src={'./resources/images/brand_001.png'}/>
                  </a>
                  <a className="navbar-brand" href="#">
                     <img src={'./resources/images/brand_002.png'}/>
                  </a>
               </div>
            </div>
         </div>
      )
   }


}

export default TopBar;