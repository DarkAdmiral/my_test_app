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
    constructor(props) {
        super(props);
        this.state = {
            scrollTop: 0
        };
    }
    render() {
        return (
            <div ref="mainframe" id="mainframe">
                <NavBar scrollTop={ this.state.scrollTop } />
                <div ref="mainPanel" className="panel panel-default">
                    <JumboTron />
                    <Content_1/>
                    <Content_2/>
                    <TwitterFeed link="https://twitter.com/reactjs"/>
                    <Footer/>
                </div>

            </div>
        )
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(e) {
        let scrollTop = document.body.scrollTop;
        this.setState({scrollTop: scrollTop});
    }
}

export default MainFrame;
