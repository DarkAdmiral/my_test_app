import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import JumboTron from './JumboTron';
import Content from './Content';
import Footer from './Footer';
import TopBar from './TopBar';

class MainFrame extends React.Component {
   render() {
      var { name } = this.props;
      return (
         <div className="mainFrame">
            <TopBar />
            <NavBar />
            <div className="panel panel-default">
               <div className="panel-body">
                  <JumboTron />
                  {/* <Content name="Jan"/> */}
               </div>
               <Footer/>
            </div>
         </div>
      )
   }
}

export default MainFrame;