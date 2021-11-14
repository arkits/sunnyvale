import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { FAB } from "react-native-paper";
import Clock from "../components/Clock";
import NewsFeed from "../components/NewsFeed";


const image = { uri: "https://source.unsplash.com/1600x900/?nature,water" };


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.overlay} />
                <View style={styles.widgetsContainer}>
                    <Clock />
                    <NewsFeed />
                </View>
                <FAB
                    style={styles.fab}
                    icon="cog"
                    onPress={() => navigation.navigate('Settings')}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        flexDirection: "column",
    },
    widgetsContainer: {
        flex: 1,
        flexDirection: "row",
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    image: {
        flex: 1,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});



export default HomeScreen;