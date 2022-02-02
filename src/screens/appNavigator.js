import { View, Text, Button } from "react-native";
import { screens } from "./index";

export default ({ navigation }) => {
    return (
    <View>
        <Text>This app is about something</Text>
        {screens.map((s) => (
            <Button
            key={s.name} title={s.name} onPress={() => navigation.navigate(s.name)}> 
            </Button>)
            )
        }
        {/* <Button title="Counter" onPress={() => navigation.navigate("Counter")}> </Button>
        <Button title="Counter2" onPress={() => navigation.navigate("Counter2")}> </Button>
        <Button title="OS" onPress={() => navigation.navigate("OS")}> </Button> */}
    </View>)
}
