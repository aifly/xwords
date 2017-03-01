import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';
import   '../components/public/jquery.parallax.js';

class ContentApp extends Component {
	constructor(props) {
		super(props);
		this.state={

		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {
		var mainStyle = {
			background:'url('+this.props.bg+') no-repeat center center',
			backgroundSize:'cover',
			width:'14rem',
			left:'-2rem',
			top:'-1rem',
			height:this.viewH + this.viewW/10*2
		}
		return (
			<div className='lt-fupin1-main-ui lt-full'>
				<ul ref="scene" className="scene "
					data-friction-x="0.05"
					data-scalar-x="25"
					data-scalar-y="0"
					data-limit-y='0'
				>
					<li className="layer" style={{height:this.viewH}} data-depth="0.50">
						<div className="lt-fupin1-img-C" style={mainStyle}>
						</div>
					</li>
					<li  className="layer" style={{height:this.viewH}} data-depth="0.25">
						<div className='lt-fp-center-text' style={{top:this.props.top}}>
							<h4><img src='./assets/images/yulu.png'/></h4>
							<section className='lt-fp-text-C' style={this.props.textStyle}>{this.props.words||'扶真贫、真扶贫'}</section>
							<section className='lt-fp-pagetion'>{this.props.page<10?'0'+this.props.page:this.props.page} / {this.props.all||5}</section>
						</div>
					</li>
				</ul>

			</div>
		);
	}


	componentDidMount() {
		$(this.refs['scene']).parallax();
	}
}
export default PubCom(ContentApp);