import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class WordsListApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			list:[
				{
					img:'./assets/images/fupin.png',
					times:19,
					name:'扶贫'
				},{
					img:'./assets/images/shengtai.png',
					times:39,
					name:'生态'
				},{
					img:'./assets/images/kaifang.png',
					times:49,
					name:'开放'
				},{
					img:'./assets/images/gaige.png',
					times:100,
					name:'改革'
				},{
					img:'./assets/images/chuangxin.png',
					times:117,
					name:'创新'
				},{
					img:'./assets/images/fazhan.png',
					times:238,
					name:'发展'
				}
			]
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {

		var mainStyle = {
			background:'url(./assets/images/bg.jpg) no-repeat center top',
			backgroundSize:'cover',
			height:this.viewH

		};
		return (
			<div className='lt-wordslist-main-ui lt-full' style={mainStyle}>
				<ul style={{height:this.viewH - 20,marginTop:10}}>
					{this.state.list.map((item,i)=>{
						return <li key={i}>
							 <div className='lt-wordlist-img'>
							 	<img src={item.img}/>
							 </div>
							 <div>
							 	总书记两会重要讲话中,<span style={{color:i%2===0?'#ffff00':'#99ccff'}}>{item.times}</span>次<br/>提到{item.name}
							 </div>
							 <canvas width={this.viewW/10*7} height={this.viewW/10*2} ref={'canvas_'+i}></canvas>
						</li>
					})}
				</ul>
			</div>
		);
	}


	componentDidMount() {
		//this.startAnimate(this.refs['canvas_0']);
	}

	startAnimate(canvas){
		var context = canvas.getContext('2d');

		var x = 3,
			y = canvas.height/2;
			var w = canvas.width,
				h = canvas.height;
		var render = ()=>{
			x++;
			y+=1.5;
			context.clearRect(0,0,w,h);

			context.beginPath();
			context.fillStyle="#189cfb";
			context.strokeStyle="#189cfb";
			context.arc(3,canvas.height/2,3,0,Math.PI*2,false);
			context.closePath();
			context.fill();	
			context.moveTo(3,canvas.height/2);

			if(y>=h){
				context.beginPath();
				context.moveTo(20,h);
				context.lineTo(x,h);
				console.log(x,h)
			}
			else{
				context.lineTo(x,y);	
			}
			
			context.stroke();

			webkitRequestAnimationFrame(render);
		}
		webkitRequestAnimationFrame(render);

		

	}
}
export default PubCom(WordsListApp);