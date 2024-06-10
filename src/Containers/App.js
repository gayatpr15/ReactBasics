import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
//import {robots} from './robots.js';
import './App.css'

class App extends Component  {
	constructor() {
		super()
		this.state = {
			
			robots:[],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json())
		.then(users =>
			this.setState({robots:users}));
		//this.setState({robots:robots});
	}

	onSearchChange = (event) =>{
		
		this.setState({searchfield: event.target.value});
	}
	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length){
			return <h1>Loading..</h1>
		}
		else{
		return(
		<div className='tc'>
			<h1 className=''>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
		);
	}
	}
}

export default App;