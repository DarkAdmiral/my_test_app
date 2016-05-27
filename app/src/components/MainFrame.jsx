import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import JumboTron from './JumboTron';
import Content_1 from './Content_1';
import Content_2 from './Content_2';
import TwitterFeed from './TwitterFeed';
import Footer from './Footer';
import TopBar from './TopBar';

class MainFrame extends React.Component {
  render() {
    return (
      <div id="mainframe">
        <TopBar />
        <NavBar />
        <div className="panel panel-default">
          <JumboTron />
          <Content_1/>
          <Content_2/>
          <TwitterFeed link="https://twitter.com/reactjs"/>
          <Footer/>
        </div>

      </div>
    )
  }
}

export default MainFrame;
