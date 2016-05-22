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
      console.log('render called');
      return (
         <div id="tweets">
            <a ref="link" className="twitter-timeline" href="https://twitter.com/reactjs" data-widget-id="734368180404166656">Tweets by {this.props.screenName}</a>
         </div>
      )
   }
   componentDidMount() {
      console.log('did mount called');
      let js = document.createElement('script');
      js.id = 'twitter-wjs';
      js.src = 'http://platform.twitter.com/widgets.js';
      ReactDOM.findDOMNode(this.refs.link).appendChild(js);
      // js.setAttribute('src','http//platform.twitter.com/widgets.js');

   }
}

export default TwitterFeed;