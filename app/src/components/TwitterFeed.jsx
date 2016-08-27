import React from 'react';
import ReactDOM from 'react-dom';

class TwitterFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            href: this.props.link,
            widgetId: this.props.widgetId,
            screenName: this.props.screenName
        }
    }
    render() {
        return (
            <div id="twitter-feed">
                <div className="container">
                    <div className="row">
                        <div className="twitter-feed">
                            <img src={'./resources/images/brand_005.png'}/>
                            <div id="tweets">
                                <a ref="link" className="twitter-timeline" href={this.state.href}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let js = document.createElement('script');
        js.id = 'twitter-wjs';
        js.src = 'http://platform.twitter.com/widgets.js';
        ReactDOM.findDOMNode(this.refs.link).appendChild(js);
    }
}

export default TwitterFeed;
