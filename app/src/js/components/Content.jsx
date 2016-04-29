import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         age: this.props.age
      }
   }
   render() {
      var { name } = this.props;
      return (
         <div className="main-box">
            <div className="jumbotron">
               <h1>Hello, world!</h1>
               <p>...</p>
               <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
            <h2>Hello {this.props.name}!</h2>
            <h4>You are {this.state.age}!</h4>
            <button onClick={this.okButton.bind(this) }>OK</button>
         </div>
      )
   }
   okButton() {
      this.setState({ age: this.state.age + 1 });
   }
}

export default Content;