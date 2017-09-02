import React from 'react';
import {Row,  Col} from 'react-materialize';
import './styles.css';

const Join = () => (
  <div className="contact">
    <h4>Join Us</h4>
    <Row>
    	<Col className='join-media'>
        <img id="join-logo" src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" alt="Slack Logo" />
        <h5>Slack</h5>
        <hr />
        <p>Join Our Community</p>
        <div className="join-btn">
          <p><a href="http://www.facebook.com">Join</a></p>
        </div>
      </Col>
    	<Col className='join-media'>
        <img id="join-logo" src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png" alt="Facebook Logo" />
        <h5>Facebook</h5>
        <hr />
        <p>Join Our Facebook Page </p>
        <div className="join-btn">
          <p><a href="http://www.facebook.com">Join</a></p>
        </div>
      </Col>
    	<Col className='join-media'>
        <img id="join-logo" src="https://www.sketchappsources.com/resources/source-image/twitterlogo_1x.png" alt="Twitter Logo"/>
        <h5>Twitter</h5>
        <hr />
        <p>Follow Us On Twitter</p>
        <div className="join-btn">
          <p><a href="http://www.twitter.com">Join</a></p>
        </div>
      </Col>
    </Row>
  </div>
)

export default Join;
