import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalComponent = ({setKeyboardDisable, visibility, message, closeModal, startNewGame, win}) => {
  const handlePress = () => {
    closeModal();
    setKeyboardDisable(false)
    startNewGame();
  };
  
  return (
    <Modal visible ={visibility}
            animationType='slide'
            style={styles.modalWrapper}
      >
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
  modalWrapper: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    border: "1px lightgrey solid",

  },
  contentContainer: {
    marginTop: "10%",
    height: 500,
    width: 300,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'space-evenly',
    padding: 60,
    backgroundColor: 'white',
    border: "1px lightgrey solid"
  },
  textContainer:{
    alignItems: 'center',
  },
  modalButton: {
    fontWeight: 500,
    color:'white',
    backgroundColor: "#4b7774",
    padding: 15,
    outline: 'none',
    borderWidth: 0,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    width: "100%"
  },
  emoji: {
    fontSize: 48,
  }
});