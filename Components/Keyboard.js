import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Keyboard = ({disableKeyboard, updateGuess, submitGuess, backspace, guessedLetters, closeLetters, correctLetters }) => {
  const handleLetterKeyPress = (letter) => {
    if (!disableKeyboard){
      updateGuess(letter);
    }
  };

  const checkIfGuessed = (letter) => {
    if (correctLetters.includes(letter)) {
      return [StyleSheet.flatten([styles.button, styles.correctLetterButton]),
              StyleSheet.flatten([styles.buttonText, styles.guessedText]) ];
              
    } else if (closeLetters.includes(letter)) {
      return [StyleSheet.flatten([styles.button, styles.closeLetterButton]),
              StyleSheet.flatten([styles.buttonText, styles.guessedText]) ];
      
    } else if (guessedLetters.includes(letter)) {
      return [StyleSheet.flatten([styles.button, styles.guessedLetterButton]),
              StyleSheet.flatten([styles.buttonText, styles.guessedText])];
    } else {
      return [styles.button, styles.buttonText]
    }
  };

  const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => {
    const keyStyle = checkIfGuessed(letter)[0];
    const textStyle = checkIfGuessed(letter)[1];
    return (
      <TouchableOpacity
        key={letter}
        style={keyStyle}
        onPress={() => handleLetterKeyPress(letter)}
      >
        <Text style={textStyle}>{letter}</Text>
      </TouchableOpacity>
    )
  });

  const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => {
    const textStyle = checkIfGuessed(letter)[1];
    const keyStyle = checkIfGuessed(letter)[0];
    return (  
      <TouchableOpacity
        key={letter}
        style={keyStyle}
        onPress={() => handleLetterKeyPress(letter)}
      >
        <Text style={textStyle}>{letter}</Text>
      </TouchableOpacity>
    )
  });

  const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => {
    const textStyle = checkIfGuessed(letter)[1]
    const keyStyle = checkIfGuessed(letter)[0]
    return (
      <TouchableOpacity
        key={letter}
        style={keyStyle}
        onPress={() => handleLetterKeyPress(letter)}
      >
        <Text style={textStyle}>{letter}</Text>
      </TouchableOpacity>
    )
  });

  const specialButtonsStyle = StyleSheet.flatten([styles.button, styles.specialButton])

  return (
    <View style={styles.keyboardContainer}>
      <View style={styles.keyRow}>{row1}</View>
        <View style={styles.keyRow}>{row2}</View>
      <View style={styles.specialRow}>
        <TouchableOpacity style={specialButtonsStyle} onPress={() => submitGuess()}>
          <Text>Submit</Text>
        </TouchableOpacity>
        <View style={styles.keyRow}>{row3}</View>
        <TouchableOpacity style={specialButtonsStyle} onPress={() => backspace()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  specialRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  button: {
    marginHorizontal: 3,
    padding: 10,
    paddingTop: 13,
    paddingBottom: 13,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    fontWeight: "500"
  },
  guessedText: {
    color: "white"
  },
  specialButton: {
    padding: 5.5,
    height: 45.5,
    alignItems: "center",
    justifyContent: "center"
  }, 
  guessedLetterButton: {
    backgroundColor: "grey"
  }, 
  closeLetterButton: {
    borderColor: "#f2c41d",
    backgroundColor: "#f2c41d"
  },
  correctLetterButton: {
    backgroundColor: "#537308",
    borderColor:"#537308"
  }
});

export default Keyboard;