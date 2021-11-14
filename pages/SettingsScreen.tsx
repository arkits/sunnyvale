import React from "react";
import { ScrollView, StyleSheet, } from "react-native";
import { List, Title } from "react-native-paper";
import Clock from "../components/Clock";
import NewsFeed from "../components/NewsFeed";


function ListItem(props) {
    return (
        <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
        />
    )
}


function SettingsScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        flexDirection: "column",
        paddingLeft: 150,
        paddingRight: 20,
        paddingTop: 20,
    },
});



export default SettingsScreen;