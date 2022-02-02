import React, { Component } from 'react';
import { Platform, View, Text } from 'react-native';

export class systemInfo extends Component{
    // constructor(props){
    //     super(props);
    //     this.os = Platform.OS;
    // }

    render(){
        return (<View>
                    <Text>This app is about something1</Text>
            <Text>OS: {Platform.OS}</Text>
        </View>)
    }

}