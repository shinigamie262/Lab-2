import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

const HomeScreen = ({ navigation }) => {
    const Buttons = (props) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(props.screen)}
                style={styles.ButtonStyle}>
                <Text style={{ marginLeft: 15 }}>
                    exercises : {props.text} ({props.screen})
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.Headers}>
                <Text style={styles.TextStyle}>Home Screen</Text>
            </View>
            <View style={styles.ViewStyle}>
                <Buttons text='1' screen='HelloWorld' />
                <Buttons text='2' screen='CapturingTaps' />
                <Buttons text='3' screen='CustomComponent' />
                <Buttons text='4' screen='StateProps' />
                <Buttons text='5' screen='Styling' />
                <Buttons text='6' screen='ScrollableContent' />
                <Buttons text='7' screen='BuildingaForm' />
                <Buttons text='8' screen='LongLists' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        Headers: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            backgroundColor: '#8a9cb8'
        },
        ViewStyle: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        ButtonStyle: {
            height: 40,
            width: 250,
            justifyContent: 'center',
            backgroundColor: 'aqua',
            borderRadius: 10,
            margin: 10
        },
        TextStyle: {
            fontSize: 25,
            fontWeight: 'bold'
        }
    }
)

export default HomeScreen;