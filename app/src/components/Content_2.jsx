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
            <div className="left-box white-text">
               <h2>Why ReactJS</h2>
               <h3>Component based, easy, state of the art</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum nulla pariatur.</p>
            </div>
            <div className="right-box right-img">
               <img src={'./resources/images/keyboard_002.jpg'}/>
            </div>
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