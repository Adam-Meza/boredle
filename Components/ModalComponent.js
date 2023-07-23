import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalComponent = ({setKeyboardDisable, visibility, message, closeModal, startNewGame, win}) => {
  const handlePress = () => {
    closeModal();
    setKeyboardDisable(false)
    startNewGame();
  };
  
  return (
    <Modal visible ={visibility} animationType='slide'>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style ={styles.text}>{message[0]}</Text>
          <Text style ={styles.text}>{message[1]}</Text>
          <Text style ={styles.emoji}>{message[2]}</Text>
        </View>
        <TouchableOpacity onPress={() => handlePress()}>
            <Text style={styles.modalButton}>
              Let's Play Again
            </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({ 
  contentContainer: {
    marginTop: "20%",
    height: "80%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
    padding: 60,
  },
  textContainer:{
    alignItems: 'center',
  },
  modalButton: {
    fontWeight: 500,
    color:'white',
    backgroundColor: "#4b7774",
    padding: 15,
  },
  text: {
    fontSize: 18,
    margin: 0,
    width: "100%"
  },
  emoji: {
    marginTop: 50,
    fontSize: 48,
  }
});