import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import JumboTron from './JumboTron';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import Content_3 from './Content_3';
import Footer from './Footer';
import TopBar from './TopBar';

class MainFrame extends React.Component {
   render() {
      return (
         <div id="mainFrame">
            <TopBar />
            <NavBar />
            <div className="panel panel-default">
               <JumboTron />
               <Content_1/>
               <Content_2/>
               <Content_3/>
               <Footer/>
            </div>

         </div>
      )
   }
}

export default MainFrame;