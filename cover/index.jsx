import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';
import   '../components/public/jquery.parallax.js';

class CoverApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url('+(this.props.bg||'./assets/images/fupin1.jpg')+') no-repeat center '+(this.props.position||'center')+'',
			backgroundSize:'cover',
			width:'14rem',
			left:'-2rem',
			top:'-1rem',
			height:this.viewH + this.viewW/10*2
		}
		return (
			<div className='lt-fupin1-main-ui lt-full'>
					 <ul ref="scene" className={"scene "+(this.props.customerClass?this.props.customerClass:'')}
            data-friction-x="0.05"
            data-scalar-x="25"
             data-scalar-y="0"
             data-limit-y='0'
            >
            <li className="layer" style={{height:this.viewH}} data-depth="0.250">
              <div className="lt-fupin1-img-C" style={mainStyle}>
              </div>
            </li>
            <li  className="layer" style={{height:this.viewH}} data-depth="0.40">
            		<div className='lt-fp-text'>
            				<img src={this.props.textbg||'./assets/images/fptext.png'}/>
            		</div>
            </li>
            <li  style={{height:this.viewH}} className="layer lt-fp-word"  data-depth="0.20">
            		<div>
            				总书记两会重要讲话中，<span>{this.props.times}</span>次提到{this.props.words||'扶贫'}
            		</div>
            		<div>以下是精彩语录</div>
            		<div className='lt-fp-pagetion'>{'01'} / {this.props.all||5}</div>
            </li>
        </ul>
					
			</div>
		);
	}


	componentDidMount() {	
 			$(this.refs['scene']).parallax();
	}
}
export default PubCom(CoverApp);