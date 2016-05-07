import React from 'react';
import ReactDOM from 'react-dom';

class Content_2 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         age: this.props.age
      }
   }
   render() {
      var { name } = this.props;
      return (
         <div className="content-2-box">
            {/*<h2>Hello {this.props.name}!</h2>
            <h4>You are {this.state.age}!</h4>
            <button onClick={this.okButton.bind(this) }>OK</button> */}
         </div>
      )
   }
   okButton() {
      this.setState({ age: this.state.age + 1 });
   }
}

export default Content_2;