import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';

import IndexApp from './index/index.jsx';
import WordsListApp from './wordslist/index.jsx';

export class App extends Component {
	constructor(props) {
		super(props);	
		this.state = {
			currentPage:1
		}
		this.viewH = document.documentElement.clientHeight;
	}
	render() {

		var components = [
			<IndexApp currentPage={this.state.currentPage}></IndexApp>,
			<WordsListApp></WordsListApp>
			];
		return (
			<div style={{height:this.viewH,overflow:'hidden'}}>
				<ul  className='lt-main-nav' style={{height:this.viewH * components.length,WebkitTransform:'translate3d(0,-'+(this.state.currentPage*this.viewH)+'px,0)'}}>
					{components.map((item,i)=>{
						return <li style={{height:this.viewH}} key={i}>{item}</li>
					})}					
				</ul>
				
			</div>
		);
	}
	componentWillMount() {
		document.querySelector('html').style.fontSize = document.documentElement.clientWidth/10+'px';
	}
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));