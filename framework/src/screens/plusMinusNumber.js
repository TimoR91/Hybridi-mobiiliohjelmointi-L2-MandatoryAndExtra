import { View, Text, Button, StyleSheet, } from "react-native";
import React, {useState} from 'react';

export default function Counter(){

    const [count, setCount]= useState(0);

    

    return (
        <View style={styles.container}>
            
            <div>
            <Text style={styles.text}>Number: {count}</Text>
            </div>
            <div style={{ "paddingRight": "5px"}}>
            <Button title="+" onPress={() => setCount(count+1)}></Button>
            </div>
            <Button title="-" onPress={() => setCount(count-1)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexFlow: "row",
        alignSelf: "center",
        padding: "16px"
    },
    text: {
        alingSelf: "center",
        paddingRight: "8px"
    }
})