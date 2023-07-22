import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalComponent = ({visibility, message, closeModal}) => {
  const handlePress = () => {
    closeModal()
  }
  
  return (
    <Modal visible ={visibility} animationType='slide' style={styles.modalContainer}>
      <View style={styles.contentBox}>
        <Text style ={styles.modalText}>{message}</Text>
        <TouchableOpacity onPress={() => handlePress()}>
            <Text style={styles.modalButton}>
              Let's Play Again
            </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({ 
  contentBox: {
    marginTop: "30%",
    height: "66%",
    width: "66%",
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: .5,
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  modalButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    border: "none",
  },
  modalText: {
    fontSize: 18,
  }
})