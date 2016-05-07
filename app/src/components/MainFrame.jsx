import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import JumboTron from './JumboTron';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
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

               <Content_1/>
               <Content_2/>
               <Footer/>
            </div>

         </div>
      )
   }
}

export default MainFrame;