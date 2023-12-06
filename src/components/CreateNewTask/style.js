import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEBEBE'
  },
  title: {
    marginTop: 22,
    paddingBottom: 10,
    fontSize: 23,
    textAlign: 'center',
    color: 'black',
    textTransform: 'uppercase'
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#5099FF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    textShadowOffset: {
      width: 1,
      height: 3
    }
  },
  modal: {
    flex: 1,
    backgroundColor: '#BEBEBE'
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalTitle: {
    marginLeft: 75,
    fontSize: 25,
    color: 'black',
    textTransform: 'uppercase'
  },
  modalBody: {
    marginTop: 20
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: 'aliceblue',
    padding: 9,
    height: 95,
    textAlignVertical: 'top',
    color: 'black',
    borderRadius: 5
  },
  handleAdd: {
    backgroundColor: '#5099FF',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5
  },
  handleAddText: {
    color: 'black',
    textTransform: 'uppercase'
  }
})

export default styles
