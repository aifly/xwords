import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';
class ResultApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {
		var mainStyle = {
				background:'url(./assets/images/bg.jpg) no-repeat center center',
				backgroundSize:'cover',
				width:'14rem',
				left:'-2rem',
				top:'-1rem',
				height:this.viewH + this.viewW/10*2
			}

		return (
			<div className='lt-result-main-ui' >
				  <ul ref="scene" className={"scene "}
          data-friction-x="0.05"
          data-scalar-x="25"
           data-scalar-y="0"
           data-limit-y='0'
          >
	            <li className="layer" style={{height:this.viewH}} data-depth="0.250">
	              <div className="lt-fupin1-img-C" style={mainStyle}>
	              </div>
	              <div className='lt-result-img lt-full'><img src='./assets/images/result.png'/></div>
	            </li>
	           
	        </ul>
			</div>
		);
	}


	componentDidMount() {
	}
}
export default PubCom(ResultApp);