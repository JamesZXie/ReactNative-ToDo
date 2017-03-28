import ListItem from "./ListItem"
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class List extends Component{
	constructor(props){
		super(props);
		this.state = {
			titleArray: this.props.titleArray,
		}
	}


	render(){
		var testArray = this.state.titleArray;
		
		function parseArray(index){
			return (<ListItem key={index} text={index} />);
		}

		return(
			<View>{testArray.map(parseArray)}</View>

			)
	}


}

AppRegistry.registerComponent('List', () => List);