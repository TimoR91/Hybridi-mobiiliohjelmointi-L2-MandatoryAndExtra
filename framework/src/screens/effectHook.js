import { View, Text, Button, StyleSheet, } from "react-native";
import React, {useState, useEffect} from 'react';

export default function Counter(){

    const [count, setCount]= useState(-1);
    const [plusCount, setSecondCount] = useState(0);
    const [minusCount, setThirdCount] = useState(0);

    useEffect(() => {
        setCount(count-1);
    }, [minusCount]);

    useEffect(() => {
        setCount(count+1);
    }, [plusCount]);



    return (
        <View style={styles.container}>
            <div>
            <Text style={styles.text}>Number: {count}</Text>
            </div>
            <div style={{ "paddingRight": "5px"}}>
            <Button onPress={() => setSecondCount(plusCount+1)}>+</Button>
            </div>
            <Button onPress={() => setThirdCount(minusCount+1)}>+</Button>
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