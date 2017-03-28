import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

export default class ListItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text,
			isComplete: 'false',
		}
	}

	_onComplete(){
		this.setState({isComplete: 'true'});
	}	

	_notComplete(){
		this.setState({isComplete: 'false'});
	}

	render(){
		
		if (this.state.isComplete == 'true')
		{
			return(
				<TouchableHighlight style={listStyles.highlight} onPress={this._notComplete.bind(this)}>
					<View style = {listStyles.containerComplete}>
						<Text style={listStyles.isComplete}>
							{this.state.text}
						</Text>
					</View>
				</TouchableHighlight>
			)
		}
		else if (this.state.isComplete == 'false')
		{
			return(
				<TouchableHighlight style={listStyles.highlight} onPress={this._onComplete.bind(this)}>
					<View style = {listStyles.containerIncomplete}>
						<Text style={listStyles.notComplete}>{this.state.text}</Text>
					</View>
				</TouchableHighlight>
				)
		
		


		}
	}
}

const listStyles = StyleSheet.create({
	containerComplete:{
		flexDirection: 'column',
		height: 40,
		padding: 10,
		marginLeft: 10,
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: 'white',


		 

		



	},
	containerIncomplete:{
		flexDirection: 'column',
		height: 40,
		padding: 10,
		marginLeft: 10,
		borderWidth: 2,
		borderStyle: 'solid',
	},

	isComplete: {
		color: 'grey',


	},

	notComplete:{
		color: 'black',

	},

})


AppRegistry.registerComponent('ListItem', () => ListItem);