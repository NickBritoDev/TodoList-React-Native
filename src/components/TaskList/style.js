import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
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
    shadowOffset: {
      width: 1,
      height: 3
    }
  },
  task: {
    color: 'gray',
    fontSize: 16,
    paddingLeft: 8,
    paddingRight: 8
  }
})

export default styles
