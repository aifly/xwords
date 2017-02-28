import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import IndexApp from './index/index.jsx';

export class App extends Component {
	render() {
		return (
			<div>
				<IndexApp></IndexApp>
			</div>
		);
	}
	componentWillMount() {
		document.querySelector('html').style.fontSize = document.documentElement.clientWidth/10+'px';
	}
}

ReactDOM.render(<App></App>,document.getElementById('fly-main'));