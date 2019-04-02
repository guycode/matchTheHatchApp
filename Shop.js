import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class Shop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Shop Here</Text>
            </View>
        );
    }
}
export default Shop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});