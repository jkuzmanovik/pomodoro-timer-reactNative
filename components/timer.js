import React from 'react';
import { Text,View,Button } from 'react-native';

export default class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fullTime: this.props.secs + (this.props.mins * 60)
    }
}
    resetCounter = () => {
        this.setState({
            fullTime: this.props.secs + (this.props.mins * 60)
        })
 
    }

    stopCounter = () => {
         clearInterval(this.interval) 
         this.interval = null 
        }
     

    startCounter = () => {
        if(!this.interval)
        this.interval = setInterval(this.count,1000)
    }
    count = () => {
        if(this.state.fullTime !== 0)
        this.setState(prevState =>( {
            fullTime: prevState.fullTime - 1
             })
         )
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            fullTime: nextProps.secs + (nextProps.mins * 60)
        })
    }

    render(){
        return (
            <View>
                <Button title='start' onPress = { this.startCounter} />
                <Button title='stop' onPress = { this.stopCounter} />
                <Button title='reset' onPress = { this.resetCounter} />
               <Text> MINS: {Math.floor(this.state.fullTime / 60)} SECS: {this.state.fullTime % 60} </Text>

            </View>
        )
    }





} 