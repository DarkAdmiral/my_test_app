import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {
    var { name } = this.props;
    return (
      <div className="panel-footer mta-footer">By feuersturm.eu 2016</div>
    )
  }
}

export default Footer;
