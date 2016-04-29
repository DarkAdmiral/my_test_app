import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

class MainFrame extends React.Component {
   render() {
      var { name } = this.props;
      return (
         <div className="mainFrame">
            <NavBar />
            <div className="panel panel-default">
               <div className="panel-body">
                  <Content name="Jan"/>
               </div>
               <Footer/>
            </div>          
         </div>
      )
   }
}

export default MainFrame;