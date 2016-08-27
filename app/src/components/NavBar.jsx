import React from 'react';
import ReactDOM from 'react-dom';
import Scroll from 'react-scroll';
var scroll = Scroll.animateScroll;
var Link = Scroll.Link;

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let navbarTransparent = this.props.scrollTop > 0 ? ' navbar-transparent' : '';
        return (
            <nav className={"navbar navbar-fixed-top navbar-inverse"+ navbarTransparent} role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button ref="hamburgerButton" type="button" className="navbar-toggle collapsed" onClick={this.hamburgerClick.bind(this)}>
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div ref="mainNavBar" id="main-nav-bar" className="collapse navbar-collapse">
                        <ul ref="navPills" className="nav navbar-nav navbar-left">
                            <li role="presentation"><div className="phone"><i className="fa fa-phone" aria-hidden="true"></i> + 1 800 123 456 789</div></li>
                        </ul>
                        <ul ref="navPills" className="nav navbar-nav navbar-right">
                            <li role="presentation"><Link activeClass="active" to="mainframe" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                            <li role="presentation"><Link activeClass="active" to="content_1" spy={true} smooth={true} offset={0} duration={500}>Why React</Link></li>
                            <li role="presentation"><Link activeClass="active" to="content_2" spy={true} smooth={true} offset={-50} duration={500}>Features</Link></li>
                            <li role="presentation"><Link activeClass="active" to="twitter-feed" spy={true} smooth={true} offset={0} duration={500} >Feeds</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
    hamburgerClick() {
        let isVisible = this.refs.mainNavBar.className.indexOf('in') > -1;
        this.refs.hamburgerButton.className = isVisible ? "navbar-toggle collapsed" : "navbar-toggle";
        this.refs.mainNavBar.className = isVisible ? "collapse navbar-collapse" : "collapse navbar-collapse in";
    }
    navbarItemClick(btn) {
        console.log(this);
    }
}

export default NavBar;
