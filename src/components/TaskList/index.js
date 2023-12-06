import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import PropTypes from 'prop-types'
import styles from './style'

const TaskList = ({ data, handleDelete }) => {
  return (
    <Animatable.View style={styles.container} animation="bounceIn" useNativeDriver>
      <TouchableOpacity onPress={() => handleDelete(data)}>
        <Ionicons name="md-checkmark-circle" size={30} color="black" />
      </TouchableOpacity>
      <View>
        <Text style={styles.task}>{data.task}</Text>
      </View>
    </Animatable.View>
  )
}

TaskList.propTypes = {
  data: PropTypes.shape({ task: PropTypes.string.isRequired }).isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default TaskList
