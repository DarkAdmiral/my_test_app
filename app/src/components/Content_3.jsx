import React from 'react';
import ReactDOM from 'react-dom';
import TwitterFeed from './TwitterFeed';

class Content_3 extends React.Component {
   render() {
      return (
         <div id="content_3">
            <div className="container">
               <div className="row">
                  <div className="twitter-feed">
                     <img src={'./resources/images/brand_005.png'}/>
                     <TwitterFeed/>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Content_3;