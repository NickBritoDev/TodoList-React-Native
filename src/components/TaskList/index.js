import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

export default function TaskList({data, handleDelete}){
    return(
        <Animatable.View style={styles.container} animation="bounceIn" useNativeDriver>
            <TouchableOpacity onPress={() => handleDelete(data)} >
                <Ionicons name="md-checkmark-circle" size={30} color="gray"/>
            </TouchableOpacity>
            <View>
                <Text style={styles.task}>{data.task}</Text>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'aliceblue',
        margin: 8,
        borderRadius: 5,
        padding: 8,
        alignItems: 'center',
        elevation: 1.5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset:{
            width:1,
            height:3,
        }
    },
    task:{
        color: 'gray',
        fontSize: 16,
        paddingLeft:8,
        paddingRight: 8,
    }
})