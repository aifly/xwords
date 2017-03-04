import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';

import IndexApp from './index/index.jsx';
import WordsListApp from './wordslist/index.jsx';
import CoverApp from './cover/index.jsx';
import ContentApp from './content/index.jsx';
import ResultApp from './result/index.jsx';
import Obserable from './components/public/obserable.js';
var obserable = new Obserable();
import $ from 'jquery';
import './assets/js/touch.js';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage:0
		}
		this.viewH = document.documentElement.clientHeight;
	}
	render() {
		var data ={
			currentPage:this.state.currentPage,
			obserable:obserable
		}
		var fupinProps = [
			{
				words:'扶真贫、真扶贫',
				page:this.state.currentPage-1,
				bg:'./assets/images/fupin2.jpg',
				top:'10rem',
				textStyle:{

				}
			},
			{
				words:'扶贫先扶智，绝不能让贫困家庭的孩子输在起跑线上',
				page:this.state.currentPage-1,
				bg:'./assets/images/fupin3.jpg',
				top:'2rem',
				textStyle:{
					lineHeight:'.7rem',
					textAlign:'left',
					fontSize:'.5rem',
					padding:10,
					boxSizing:'border-box'
				}
			},
			{
				words:'坚决阻止贫困现象代际传递',
				page:this.state.currentPage-1,
				bg:'./assets/images/fupin4.jpg',
				top:'2rem',
				textStyle:{
					fontSize:'.5rem',
				}
			},{
				words:'坚持精准扶贫，不能“手榴弹炸跳蚤”',
				page:this.state.currentPage-1,
				bg:'./assets/images/fupin5.jpg',
				textStyle:{
					lineHeight:'.7rem',
					textAlign:'left',
					fontSize:'.5rem',
					padding:10,
					boxSizing:'border-box'
				}
			}
		];
		var components = [
			<IndexApp {...data}></IndexApp>,
			<WordsListApp {...data}></WordsListApp>,
			<CoverApp {...data}></CoverApp>,
		];
		fupinProps.forEach((item,i)=>{
			components.push(<ContentApp {...data} {...item}></ContentApp>)
		});
		var gaigeCoverProps = {
				bg:'./assets/images/gaige1.jpg',
				textbg:'./assets/images/ggtext.png',
				words:'改革',
				times:100,
				all:4
		}
		components.push(<CoverApp {...data} {...gaigeCoverProps}></CoverApp>);

		var gaigeProps =[
			{
					words:'改革的集结号已经吹响',
					page:2,
					bg:'./assets/images/gaige2.jpg',
					top:'2rem',
					all:4,
					textStyle:{
						background:'rgba(233,75,75,.55)',
						fontSize:'.5rem',
						boxSizing:'border-box'
				}
			},
			{
					words:'我们要做改革的弄潮儿',
					page:3,
					bg:'./assets/images/gaige3.jpg',
					top:'2rem',
					all:4,
					textStyle:{
						background:'rgba(233,75,75,.55)',
						fontSize:'.5rem',
						boxSizing:'border-box'
				}
			},
			{
					words:'蹄疾步稳推进各项改革',
					page:4,
					bg:'./assets/images/gaige4.jpg',
					top:'2rem',
					all:4,
					textStyle:{
						background:'rgba(233,75,75,.55)',
						fontSize:'.5rem',
						boxSizing:'border-box'
				}
			}
		]
		gaigeProps.forEach((item,i)=>{
			components.push(<ContentApp {...data} {...item}></ContentApp>)
		});

		var shengtaiCoverProps = {
				bg:'./assets/images/shengtai1.jpg',
				textbg:'./assets/images/sttext.png',
				words:'生态',
				times:39,
				all:2
		}
		components.push(<CoverApp {...data} {...shengtaiCoverProps}></CoverApp>);
		var shengtaiProps =[
			{
					words:'环境就是民生，青山就是美丽、蓝天也是幸福',
					page:2,
					bg:'./assets/images/shengtai2.jpg',
					top:'auto',
					all:2,
					textStyle:{
						background:'rgba(0,153,51,.55)',
						fontSize:'.6rem',
						lineHeight:'.7rem',
						textAlign:'left',
						boxSizing:'border-box',
						padding:10
				}
			}
		]
		shengtaiProps.forEach((item,i)=>{
			components.push(<ContentApp {...data} {...item}></ContentApp>)
		});

		var chuangxinCoverProps = {
				bg:'./assets/images/chuangxin1.jpg',
				textbg:'./assets/images/cxtext.png',
				words:'创新',
				times:117,
				all:5
		}
		components.push(<CoverApp {...data} {...chuangxinCoverProps}></CoverApp>);

		var chuangxinProps =[
			{
					words:'要择天下英才而用之',
					page:2,
					bg:'./assets/images/chuangxin2.jpg',
					top:'2rem',
					all:5,
					textStyle:{
						background:'rgba(42,255,255,.55)',
						fontSize:'.6rem',
						boxSizing:'border-box',
				}
			},{
					words:'变“要我创新”为我要创新',
					page:3,
					bg:'./assets/images/chuangxin3.jpg',
					top:'auto',
					all:5,
					textStyle:{
						background:'rgba(42,255,255,.55)',
						fontSize:'.6rem',
						boxSizing:'border-box',
				}
			},{
					words:'谋创新就是谋未来',
					page:4,
					bg:'./assets/images/chuangxin4.jpg',
					top:'auto',
					all:5,
					textStyle:{
						background:'rgba(42,255,255,.55)',
						fontSize:'.6rem',
						boxSizing:'border-box',
				}
			},,{
					words:'创新是引领发展的第一动力',
					page:5,
					bg:'./assets/images/chuangxin5.jpg',
					top:'2rem',
					all:5,
					textStyle:{
						background:'rgba(42,255,255,.55)',
						fontSize:'.6rem',
						boxSizing:'border-box',
				}
			}
		]
		chuangxinProps.forEach((item,i)=>{
			components.push(<ContentApp {...data} {...item}></ContentApp>)
		});



		var kaifangCoverProps = {
				bg:'./assets/images/kaifang1.jpg',
				textbg:'./assets/images/kftext.png',
				words:'开放',
				times:49,
				all:5,
				position:'bottom',
				customerClass:'kaifang'
		}
		components.push(<CoverApp {...data} {...kaifangCoverProps}></CoverApp>);
		var kaifangProps =[
			{
					words:'做好对外开放这篇大文章',
					page:2,
					bg:'./assets/images/kaifang2.jpg',
					top:'2rem',
					all:4,
					textStyle:{
						background:'rgba(101,68,161,.7)',
						fontSize:'.6rem',
						boxSizing:'border-box',
				}
			},{
					words:'始终不渝的奉行互利共赢的开放战略',
					page:3,
					bg:'./assets/images/kaifang3.jpg',
					top:'auto',
					all:4,
					textStyle:{
						background:'rgba(101,68,161,.7)',
						lineHeight:'.72rem',
						padding:'10px 30px',
						textAlign:'left',
						boxSizing:'border-box',
				}
			},{
					words:'开放也是改革，要寓改革于开放之中',
					page:4,
					bg:'./assets/images/kaifang4.jpg',
					top:'auto',
					all:4,
					textStyle:{
						background:'rgba(101,68,161,.7)',
						lineHeight:'.72rem',
						padding:'10px 30px',
						textAlign:'left',
						boxSizing:'border-box',
				}
			}
		]
		kaifangProps.forEach((item,i)=>{
			components.push(<ContentApp {...data} {...item}></ContentApp>)
		});


		var fazhanCoverProps = {
				bg:'./assets/images/fazhan1.jpg',
				textbg:'./assets/images/fztext.png',
				words:'发展',
				times:238,
				all:4,
				position:'bottom',
				customerClass:'fazhan'
		}
		components.push(<CoverApp {...data} {...fazhanCoverProps}></CoverApp>);
		var fazhanProps =[
			{
					words:'坚持发展是硬道理的战略思想',
					page:2,
					bg:'./assets/images/fazhan2.jpg',
					top:'auto',
					all:4,
					textStyle:{
						background:'rgba(53,109,255,.55)',
						fontSize:'.6rem',
						lineHeight:'.72rem',
						padding:'10px 30px',
						textAlign:'left',
						boxSizing:'border-box',
				}
			},	{
					words:'众人拾柴火焰高',
					page:3,
					bg:'./assets/images/fazhan3.jpg',
					top:'2rem',
					all:4,
					textStyle:{
						background:'rgba(53,109,255,.55)',
						fontSize:'.6rem',
						lineHeight:'.72rem',
						padding:'10px 30px',
						textAlign:'left',
						boxSizing:'border-box',
				}
			},	{
					words:'主动适应经济发展新常态',
					page:4,
					bg:'./assets/images/fazhan4.jpg',
					top:'auto',
					all:4,
					textStyle:{
						background:'rgba(53,109,255,.55)',
						fontSize:'.6rem',
						boxSizing:'border-box',
				}
			}
		]
		fazhanProps.forEach((item,i)=>{
			components.push(<ContentApp {...data} {...item}></ContentApp>)
		});

		var lastStyle = {
			background:'url(./assets/images/end.jpg) no-repeat center top',
			backgroundSize:'cover',
			height:this.viewH
		}
		this.components = components;
		var infoStyle ={
			background:'url(./assets/images/info.png) no-repeat center center',
			backgroundSize:'contain'
		}
		return (
			<div style={{height:this.viewH,overflow:'hidden'}}>
				<ul  ref='lt-main-nav' className='lt-main-nav' style={{height:this.viewH * components.length,WebkitTransform:'translate3d(0,-'+(this.state.currentPage*this.viewH)+'px,0)'}}>
					{components.map((item,i)=>{
						return <li style={{height:this.viewH}} key={i}>{item} <span style={infoStyle} className='lt-info'></span></li>
					})}
					<li style={{height:this.viewH}}><ResultApp></ResultApp><span className='lt-info' style={infoStyle}></span></li>
					<li style={lastStyle}></li>
				</ul>

			</div>
		);
	}
	componentWillMount() {
		document.querySelector('html').style.fontSize = document.documentElement.clientWidth/10+'px';
		this.wxConfig();

	}
	wxConfig(){

		  var durl = location.href.split('#')[0]; //window.location;
		        var code_durl = encodeURIComponent(durl);

			$.ajax({
				url:'http://api.zmiti.com/weixin/jssdk.php',
				dataType:'jsonp',
				jsonp: "callback",
				data:{
					type:'signature',
					durl:durl
				},
		    jsonpCallback: "jsonFlickrFeed",
		    success(data){
		    	wx.config({
						    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						    appId: 'wxfacf4a639d9e3bcc', // 必填，公众号的唯一标识
						    timestamp:'1488558145' , // 必填，生成签名的时间戳
						    nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
						    signature: data.signature,// 必填，签名，见附录1
						    jsApiList: [ 'checkJsApi',
													  'onMenuShareTimeline',
													  'onMenuShareAppMessage',
													  'onMenuShareQQ',
													  'onMenuShareWeibo',
													  'hideMenuItems',
													  'showMenuItems',
													  'hideAllNonBaseMenuItem',
													  'showAllNonBaseMenuItem'
								] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
						});

		    	wx.ready(()=>{
		    			 		//朋友圈
                    wx.onMenuShareTimeline({
                        title: "总书记两会高频词", // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/xwords/assets/images/300.jpg", // 分享图标
                        type: "link",
                        dataUrl: "",
                        desc: "总书记两会高频词",
                        success: function () { },
                        cancel: function () { }
                    });
                    //朋友
                    wx.onMenuShareAppMessage({
                        title: "总书记两会高频词", // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/xwords/assets/images/300.jpg", // 分享图标
                        type: "link",
                        dataUrl: "",
                        desc: "总书记两会高频词",
                        success: function () { },
                        cancel: function () { }
                    });
                    //qq
                    wx.onMenuShareQQ({
                        title: "总书记两会高频词", // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/xwords/assets/images/300.jpg", // 分享图标
                        desc: "总书记两会高频词",
                        success: function () { },
                        cancel: function () { }
                    });
		    	});
		    }


			});
		
	}

	componentDidMount() {
		var s = this;
		
		$(this.refs['lt-main-nav']).swipe('up',function(){
				if(s.state.currentPage>=s.components.length+1){
					s.state.currentPage=s.components.length+1;
				}else{
					s.state.currentPage=s.state.currentPage+1;
					s.forceUpdate();
				}
				
				if(s.state.currentPage === 1){
					obserable.trigger({type:'startAnimate'});
				}
				else{
					obserable.trigger({type:'endAnimate'});
				}
			 
		}).swipe('down',function(){
			if(s.state.currentPage<=0){
					s.state.currentPage=0
				}else{
					s.state.currentPage=s.state.currentPage-1;
				}
			 s.forceUpdate();
		})
	}
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));