import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
   render() {
      var { name } = this.props;
      return (
         <div className="panel-footer">Panel footer</div>
      )
   }


}

export default Footer;