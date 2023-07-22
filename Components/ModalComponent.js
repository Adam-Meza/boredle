import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalComponent = ({visibility, message, closeModal}) => {
  const handlePress = () => {
    closeModal()
  }
  
  return (
    <Modal visible ={visibility} animationType='slide'>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => handlePress()}>
          <Text >
            X
          </Text>
        </TouchableOpacity>
        
        <Text style ={styles.modalText}>{message}</Text>
      </View>
    </Modal>
  )
}

export default ModalComponent

const styles = StyleSheet.create({
  modalWrap: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },  
  modalContainer: {
    height: 100,
    width: 100,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: .5,
    alignItems: "center",
    justifyContent: "center"
  },
  modalText: {

  }
})