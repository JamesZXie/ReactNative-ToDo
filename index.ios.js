import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';
import List from "./app/components/List"


export default class todo extends Component {
  constructor(props){
    super(props);
    this.state={
      titleArray:["This is a work in progress,","But feel free to try me!",],
      textValue:"",
    }
  }


  _onSubmitEditing(value){

    var tempArray = this.state.titleArray.slice();
    tempArray.push(value);
    this.setState({textValue:""})
  
    /*this.setState({textValue:"", titleArray: tempArray})*/
  }

  _onChangeText(value){
    const tempVal = value;
    this.setState({textValue: tempVal});
  }

  render() {

    if (false){
      console.log(null);
    }

    return (
      <View style={{marginTop: 30,}}>
        <View style={styles.textInputContainer}>
          <TextInput style={{height: 20}} value={this.state.textValue} onChangeText={(value)=>this._onChangeText(value)} placeholder="Enter a todo item here" onSubmitEditing={(value) => this._onSubmitEditing(value)}/>
        </View>
        <List titleArray={this.state.titleArray}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  textInputContainer:{
    flex:1,
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 30,
  }
});

AppRegistry.registerComponent('todo', () => todo);
